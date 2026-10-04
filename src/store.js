import { useSyncExternalStore } from 'react'

const KEY = 'aki-academy-v1'
export const MAX_HEARTS = 5
const HEART_REGEN_MS = 30 * 60 * 1000

export const todayStr = (d = new Date()) => {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}
const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000)
export const weekId = (d = new Date()) => {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const dayNum = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  return `${t.getUTCFullYear()}-W${Math.ceil(((t - yearStart) / 86400000 + 1) / 7)}`
}

const initial = () => ({
  onboarded: false,
  name: '',
  avatarColor: '#74ACDF',
  dailyGoal: 30,
  currentCourse: 'python',
  xp: 0,
  gems: 500,
  hearts: MAX_HEARTS,
  heartsUpdatedAt: Date.now(),
  unlimitedHeartsUntil: 0,
  streak: 0,
  longestStreak: 0,
  lastActive: null,
  freezes: 1,
  activeDays: [],
  xpByDay: {},
  progress: {},
  mistakes: {},
  achievements: [],
  quests: { day: null, xp: 0, lessons: 0, combo: 0, perfect: 0, claimed: [] },
  league: { week: weekId(), xp: 0 },
  labRuns: 0,
  labSolved: [],
  sound: true,
  theme: 'light',
  createdAt: Date.now(),
})

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return initial()
    return { ...initial(), ...JSON.parse(raw) }
  } catch {
    return initial()
  }
}

let state = load()
const listeners = new Set()

function emit() {
  localStorage.setItem(KEY, JSON.stringify(state))
  document.documentElement.dataset.theme = state.theme
  listeners.forEach((l) => l())
}

document.documentElement.dataset.theme = state.theme

export function toggleTheme() {
  setState((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' }))
}

export function setState(updater) {
  const next = typeof updater === 'function' ? updater(state) : updater
  state = { ...state, ...next }
  emit()
}
export const getState = () => state

export function useStore(selector = (s) => s) {
  return selector(useSyncExternalStore((cb) => { listeners.add(cb); return () => listeners.delete(cb) }, () => state))
}

/* ---------- maintenance on app open ---------- */
export function refreshDaily() {
  const s = state
  const patch = {}
  const today = todayStr()

  if (s.lastActive && s.streak > 0) {
    const gap = daysBetween(s.lastActive, today)
    if (gap >= 2) {
      const missed = gap - 1
      if (s.freezes >= missed) {
        patch.freezes = s.freezes - missed
        const y = new Date(); y.setDate(y.getDate() - 1)
        patch.lastActive = todayStr(y)
      } else {
        patch.streak = 0
      }
    }
  }

  if (s.quests.day !== today) patch.quests = { day: today, xp: 0, lessons: 0, combo: 0, perfect: 0, claimed: [] }
  if (s.league.week !== weekId()) patch.league = { week: weekId(), xp: 0 }

  const hearts = computeHearts(s)
  if (hearts.hearts !== s.hearts) Object.assign(patch, hearts)

  if (Object.keys(patch).length) setState(patch)
}

export function computeHearts(s = state) {
  if (s.hearts >= MAX_HEARTS) return { hearts: s.hearts, heartsUpdatedAt: Date.now() }
  const elapsed = Date.now() - s.heartsUpdatedAt
  const gained = Math.floor(elapsed / HEART_REGEN_MS)
  if (gained <= 0) return { hearts: s.hearts, heartsUpdatedAt: s.heartsUpdatedAt }
  const hearts = Math.min(MAX_HEARTS, s.hearts + gained)
  return { hearts, heartsUpdatedAt: s.heartsUpdatedAt + gained * HEART_REGEN_MS }
}

export function nextHeartIn(s = state) {
  if (s.hearts >= MAX_HEARTS) return 0
  return Math.max(0, HEART_REGEN_MS - (Date.now() - s.heartsUpdatedAt))
}

export const hasUnlimitedHearts = (s = state) => s.unlimitedHeartsUntil > Date.now()

export function loseHeart() {
  if (hasUnlimitedHearts()) return
  const s = state
  setState({ hearts: Math.max(0, s.hearts - 1), heartsUpdatedAt: s.hearts >= MAX_HEARTS ? Date.now() : s.heartsUpdatedAt })
}

export function addHearts(n) {
  setState((s) => ({ hearts: Math.min(MAX_HEARTS, s.hearts + n) }))
}

/* ---------- lesson completion ---------- */
export function completeLesson({ courseId, lessonKey, xp, perfect, maxCombo, mistakes = [], cleared = [], practice = false }) {
  const s = state
  const today = todayStr()
  let { streak, longestStreak, lastActive, activeDays } = s
  let streakExtended = false

  if (lastActive !== today) {
    const gap = lastActive ? daysBetween(lastActive, today) : null
    streak = gap === 1 ? streak + 1 : 1
    streakExtended = true
    lastActive = today
    activeDays = [...new Set([...activeDays, today])].slice(-400)
  }
  longestStreak = Math.max(longestStreak, streak)

  const progress = { ...s.progress }
  if (!practice && lessonKey) {
    const cp = { ...(progress[courseId] || { done: {} }) }
    cp.done = { ...cp.done, [lessonKey]: (cp.done[lessonKey] || 0) + 1 }
    progress[courseId] = cp
  }

  const courseMistakes = { ...(s.mistakes[courseId] || {}) }
  cleared.forEach((id) => { delete courseMistakes[id] })
  mistakes.forEach((m) => { courseMistakes[m.id] = m })

  const q = s.quests.day === today ? s.quests : { day: today, xp: 0, lessons: 0, combo: 0, perfect: 0, claimed: [] }
  const quests = { ...q, xp: q.xp + xp, lessons: q.lessons + 1, combo: Math.max(q.combo, maxCombo), perfect: q.perfect + (perfect ? 1 : 0) }

  setState({
    xp: s.xp + xp,
    gems: s.gems + (perfect ? 10 : 5),
    streak, longestStreak, lastActive, activeDays,
    xpByDay: { ...s.xpByDay, [today]: (s.xpByDay[today] || 0) + xp },
    progress,
    mistakes: { ...s.mistakes, [courseId]: courseMistakes },
    quests,
    league: { week: weekId(), xp: (s.league.week === weekId() ? s.league.xp : 0) + xp },
    hearts: practice ? Math.min(MAX_HEARTS, s.hearts + 1) : s.hearts,
  })

  const unlocked = checkAchievements()
  return { streakExtended, streak, unlocked }
}

export function addXp(xp, gems = 0) {
  const s = state
  const today = todayStr()
  setState({
    xp: s.xp + xp,
    gems: s.gems + gems,
    xpByDay: { ...s.xpByDay, [today]: (s.xpByDay[today] || 0) + xp },
    league: { week: weekId(), xp: (s.league.week === weekId() ? s.league.xp : 0) + xp },
    quests: s.quests.day === today ? { ...s.quests, xp: s.quests.xp + xp } : s.quests,
  })
}

/* ---------- quests ---------- */
export const QUESTS = [
  { id: 'xp', title: 'Sumá XP del día', icon: '⚡', target: (s) => s.dailyGoal, value: (q) => q.xp, reward: 20 },
  { id: 'lessons', title: 'Completá 3 lecciones', icon: '📚', target: () => 3, value: (q) => q.lessons, reward: 25 },
  { id: 'combo', title: 'Hacé 8 respuestas seguidas bien', icon: '🎯', target: () => 8, value: (q) => q.combo, reward: 30 },
  { id: 'perfect', title: 'Terminá una lección sin errores', icon: '💎', target: () => 1, value: (q) => q.perfect, reward: 25 },
]

export function claimQuest(id) {
  const s = state
  const quest = QUESTS.find((q) => q.id === id)
  if (!quest || s.quests.claimed.includes(id)) return
  if (quest.value(s.quests) < quest.target(s)) return
  setState({ gems: s.gems + quest.reward, quests: { ...s.quests, claimed: [...s.quests.claimed, id] } })
}

/* ---------- achievements ---------- */
export const ACHIEVEMENTS = [
  { id: 'first', icon: '🧉', title: 'Primer mate', desc: 'Completá tu primera lección', test: (s) => s.xp > 0 },
  { id: 'streak3', icon: '🔥', title: 'Prendido fuego', desc: 'Racha de 3 días', test: (s) => s.longestStreak >= 3 },
  { id: 'streak7', icon: '🌞', title: 'Semana de oro', desc: 'Racha de 7 días', test: (s) => s.longestStreak >= 7 },
  { id: 'streak30', icon: '🏆', title: 'Campeón del mundo', desc: 'Racha de 30 días', test: (s) => s.longestStreak >= 30 },
  { id: 'xp100', icon: '⚡', title: 'Arrancando', desc: 'Juntá 100 XP', test: (s) => s.xp >= 100 },
  { id: 'xp500', icon: '🚀', title: 'Imparable', desc: 'Juntá 500 XP', test: (s) => s.xp >= 500 },
  { id: 'xp2000', icon: '👑', title: 'Leyenda', desc: 'Juntá 2000 XP', test: (s) => s.xp >= 2000 },
  { id: 'poly', icon: '🌎', title: 'Trotamundos', desc: 'Empezá 3 cursos distintos', test: (s) => Object.keys(s.progress).length >= 3 },
  { id: 'coder', icon: '💻', title: 'Hacker criollo', desc: 'Ejecutá código en el Laboratorio', test: (s) => s.labRuns >= 1 },
  { id: 'solver', icon: '🧠', title: 'Resolvedor', desc: 'Resolvé 3 desafíos del Laboratorio', test: (s) => s.labSolved.length >= 3 },
  { id: 'perfect', icon: '💎', title: 'De diez', desc: 'Lección perfecta', test: (s) => s.quests.perfect >= 1 || s.achievements.includes('perfect') },
  { id: 'scientist', icon: '🔬', title: 'Científico criollo', desc: 'Empezá un curso de ciencia', test: (s) => ['matematica', 'fisica', 'quimica', 'biologia', 'astronomia', 'economia', 'historia'].some((id) => s.progress[id]) },
  { id: 'polyglot', icon: '🗣️', title: 'Políglota', desc: 'Empezá 5 cursos de idiomas', test: (s) => Object.keys(s.progress).filter((id) => ['english', 'spanish', 'italian', 'portuguese', 'french', 'german', 'catalan', 'dutch', 'swedish', 'polish', 'japanese', 'chinese', 'korean', 'russian', 'ukrainian', 'arabic', 'hebrew', 'hindi', 'turkish', 'greek', 'latin', 'vietnamese', 'thai', 'indonesian', 'quechua'].includes(id)).length >= 5 },
]

export function checkAchievements() {
  const s = state
  const fresh = ACHIEVEMENTS.filter((a) => !s.achievements.includes(a.id) && a.test(s)).map((a) => a.id)
  if (fresh.length) setState({ achievements: [...s.achievements, ...fresh], gems: s.gems + fresh.length * 50 })
  return fresh
}

export function resetAll() {
  localStorage.removeItem(KEY)
  state = initial()
  emit()
}
