import python from './code/python'
import javascript from './code/javascript'
import web from './code/web'
import react from './code/react'
import typescript from './code/typescript'
import sql from './code/sql'
import git from './code/git'
import ai from './code/ai'
import cyber from './code/cyber'
import robotica from './code/robotica'

import matematica from './sci/matematica'
import fisica from './sci/fisica'
import quimica from './sci/quimica'
import biologia from './sci/biologia'
import astronomia from './sci/astronomia'
import economia from './sci/economia'
import historia from './sci/historia'

import english from './lang/english'
import spanish from './lang/spanish'
import italian from './lang/italian'
import portuguese from './lang/portuguese'
import french from './lang/french'
import german from './lang/german'
import catalan from './lang/catalan'
import dutch from './lang/dutch'
import swedish from './lang/swedish'
import polish from './lang/polish'
import japanese from './lang/japanese'
import chinese from './lang/chinese'
import korean from './lang/korean'
import russian from './lang/russian'
import ukrainian from './lang/ukrainian'
import arabic from './lang/arabic'
import hebrew from './lang/hebrew'
import hindi from './lang/hindi'
import turkish from './lang/turkish'
import greek from './lang/greek'
import latin from './lang/latin'
import vietnamese from './lang/vietnamese'
import thai from './lang/thai'
import indonesian from './lang/indonesian'
import quechua from './lang/quechua'
import langExtras from './lang/extras'
import langExtras2 from './lang/extras2'
import langExtras3 from './lang/extras3'
import stemExtras from './stemExtras'
import stemMore from './stemMore'
import stemPack3 from './stemPack3'

function attach(course) {
  const extra = [
    ...(langExtras[course.id] || []),
    ...(langExtras2[course.id] || []),
    ...(langExtras3[course.id] || []),
    ...(stemExtras[course.id] || []),
    ...(stemMore[course.id] || []),
    ...(stemPack3[course.id] || []),
  ]
  return extra.length ? { ...course, units: [...course.units, ...extra] } : course
}

export const CODE_COURSES = [python, javascript, web, react, typescript, sql, git, ai, robotica, cyber].map(attach)
export const SCI_COURSES = [matematica, fisica, quimica, biologia, astronomia, economia, historia].map(attach)
export const LANG_COURSES = [
  english, spanish, italian, portuguese, french, german, catalan, dutch, swedish, polish,
  japanese, chinese, korean, russian, ukrainian, arabic, hebrew, hindi, turkish, greek, latin,
  vietnamese, thai, indonesian, quechua,
].map(attach)

export const GROUPS = [
  { id: 'code', title: 'Programación y tecnología', icon: '💻', sub: 'Caminos largos: de tu primera línea a publicar, testear y pensar como un equipo.', courses: CODE_COURSES },
  { id: 'sci', title: 'Ciencia, números y el país', icon: '🔬', sub: 'Mate, física, química, biología, cielo, plata e historia argentina. Unidad por unidad.', courses: SCI_COURSES },
  { id: 'lang', title: 'Idiomas', icon: '🌎', sub: '25 idiomas con bandera, audio y un camino largo: viajes, deporte, ropa, emociones y más.', courses: LANG_COURSES },
]

export const COURSES = GROUPS.flatMap((g) => g.courses)
export const getCourse = (id) => COURSES.find((c) => c.id === id) || COURSES[0]
export const groupOf = (course) => GROUPS.find((g) => g.courses.includes(course)) || GROUPS[0]

export const LESSONS_PER_UNIT = 3
export const LESSON_NAMES = ['Aprender', 'Practicar', 'Repaso de unidad']

export const lessonKey = (u, l) => `${u}-${l}`

export function courseStats(course, progress) {
  const done = progress?.[course.id]?.done || {}
  const total = course.units.length * LESSONS_PER_UNIT
  const completed = Object.keys(done).filter((k) => {
    const u = Number(k.split('-')[0])
    return u < course.units.length
  }).length
  return { total, completed, pct: Math.min(100, Math.round((completed / total) * 100)) }
}

export function currentLesson(course, progress) {
  const done = progress?.[course.id]?.done || {}
  for (let u = 0; u < course.units.length; u++) {
    for (let l = 0; l < LESSONS_PER_UNIT; l++) {
      if (!done[lessonKey(u, l)]) return { u, l }
    }
  }
  return null
}

/* ---------- utils ---------- */
export const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
const sample = (arr, n) => shuffle(arr).slice(0, n)
export const tokenize = (s) => s.replace(/[¿?¡!.,。、]/g, '').split(/\s+/).filter(Boolean)

/* ---------- quiz-style lessons (code, science, maths) ---------- */
function quizLesson(course, u, l) {
  const tag = (ex, uu, i) => ({ ...ex, id: `${course.id}:${uu}:${i}`, courseId: course.id })
  const exs = course.units[u].exercises.map((ex, i) => tag(ex, u, i))
  const half = Math.ceil(exs.length / 2)
  if (l === 0) return exs.slice(0, half)
  if (l === 1) return exs.slice(half)
  const prev = u > 0 ? course.units[u - 1].exercises.map((ex, i) => tag(ex, u - 1, i)) : []
  return shuffle([...sample(exs, 6), ...sample(prev, 2)])
}

/* ---------- language lessons ---------- */
function langTools(course) {
  const name = course.title.toLowerCase()
  const allWords = course.units.flatMap((un) => un.words)
  const allPhrases = course.units.flatMap((un) => un.phrases)
  const otherTargets = (exclude, pool) => sample([...new Set(pool.map((w) => w[1]).filter((x) => x !== exclude))], 3)

  const wordChoice = (w, id) => {
    const wrong = otherTargets(w[1], allWords)
    const opts = [w[1], ...wrong]
    const hintOf = (txt) => (allWords.find((x) => x[1] === txt) || [])[2]
    return { type: 'choice', id, prompt: `¿Cómo se dice "${w[0]}" en ${name}?`, options: opts, answer: 0, hints: opts.map(hintOf), speakOptions: true }
  }
  const reverseChoice = (w, id) => {
    const wrong = sample([...new Set(allWords.map((x) => x[0]).filter((x) => x !== w[0]))], 3)
    return { type: 'choice', id, prompt: '¿Qué significa?', sentence: w[1], sentenceHint: w[2], speak: w[1], options: [w[0], ...wrong], answer: 0 }
  }
  const typeWord = (w, id) => ({
    type: 'type', id, prompt: `Escribí "${w[0]}" en ${name}`, answers: [w[1], w[2]].filter(Boolean), speakAnswer: w[1],
    placeholder: w[2] ? 'Podés escribir en alfabeto latino' : `Escribí en ${name}`,
  })
  const match = (words, id) => ({ type: 'match', id, prompt: 'Uní los pares', pairs: words.map((w) => [w[1], w[0]]), speakLeft: true })

  const distractors = (answer, pool) => sample([...new Set(pool.flatMap(tokenize))].filter((x) => !answer.includes(x)), 3)

  const phraseChoice = (p, id) => {
    const opts = [p[1], ...otherTargets(p[1], allPhrases)]
    const hintOf = (txt) => (allPhrases.find((x) => x[1] === txt) || [])[2]
    return { type: 'choice', id, prompt: `¿Cómo se dice "${p[0]}" en ${name}?`, options: opts, answer: 0, hints: opts.map(hintOf), speakOptions: true }
  }
  const buildTarget = (p, id) => {
    const answer = tokenize(p[1])
    if (answer.length < 2) return phraseChoice(p, id)
    return { type: 'build', id, prompt: 'Traducí esta frase', sentence: p[0], answer, extra: distractors(answer, allPhrases.map((x) => x[1])), speakAnswer: p[1], answerHint: p[2] }
  }
  const buildSpanish = (p, id) => {
    const answer = tokenize(p[0])
    if (answer.length < 2) return reverseChoice(p, id)
    return { type: 'build', id, prompt: 'Traducí esta frase', sentence: p[1], sentenceHint: p[2], speak: p[1], answer, extra: distractors(answer, allPhrases.map((x) => x[0])) }
  }
  const listen = (p, id) => {
    const answer = tokenize(p[1])
    if (answer.length < 2) return { ...typeWord(p, id), listen: p[1], prompt: 'Escribí lo que escuchás' }
    return { type: 'build', id, prompt: 'Escuchá y armá la frase', listen: p[1], answer, extra: distractors(answer, allPhrases.map((x) => x[1])), answerHint: p[2] }
  }

  return { wordChoice, reverseChoice, typeWord, match, buildTarget, buildSpanish, listen }
}

function langLesson(course, u, l) {
  const T = langTools(course)
  const unitData = course.units[u]
  const W = unitData.words
  const P = unitData.phrases
  const id = (kind, i, uu = u) => `${course.id}:${uu}:${kind}:${i}`
  const wi = (w, uu = u) => course.units[uu].words.indexOf(w)
  const pi = (p, uu = u) => course.units[uu].phrases.indexOf(p)
  const at = (arr, i) => arr[i % arr.length]
  let list = []

  if (l === 0) {
    const w = shuffle(W)
    list = [
      T.match(w.slice(0, 4), id('m', 0)),
      ...w.slice(0, 4).map((x) => T.wordChoice(x, id('wc', wi(x)))),
      ...w.slice(4, 6).map((x) => T.reverseChoice(x, id('rc', wi(x)))),
      T.typeWord(w[0], id('tw', wi(w[0]))),
      T.match(w.slice(4, 8), id('m', 1)),
    ]
  } else if (l === 1) {
    const p = shuffle(P)
    list = [
      ...p.slice(0, 3).map((x) => T.buildTarget(x, id('bt', pi(x)))),
      ...p.slice(3, 5).map((x) => T.buildSpanish(x, id('bs', pi(x)))),
      T.listen(at(p, 0), id('li', pi(at(p, 0)))),
      T.listen(at(p, 1), id('li', pi(at(p, 1)))),
      T.wordChoice(at(W, Math.floor(Math.random() * W.length)), id('wc', 'x')),
    ]
  } else {
    const p = shuffle(P)
    const w = shuffle(W)
    list = [
      T.listen(at(p, 0), id('li', pi(at(p, 0)))),
      T.buildTarget(at(p, 1), id('bt', pi(at(p, 1)))),
      T.typeWord(at(w, 0), id('tw', wi(at(w, 0)))),
      T.typeWord(at(w, 1), id('tw', wi(at(w, 1)))),
      T.match(w.slice(2, 6), id('m', 2)),
      T.buildSpanish(at(p, 2), id('bs', pi(at(p, 2)))),
      T.listen(at(p, 3), id('li', pi(at(p, 3)))),
    ]
    if (u > 0) {
      const prevP = sample(course.units[u - 1].phrases, 1)[0]
      list.push(T.buildTarget(prevP, id('bt', pi(prevP, u - 1), u - 1)))
    }
    list = shuffle(list)
  }
  return list
    .filter((ex) => {
      if (!ex) return false
      if (ex.type === 'match' && (!ex.pairs || ex.pairs.length < 2)) return false
      if (ex.type === 'choice' && (!ex.options || ex.options.length < 2)) return false
      if (ex.type === 'build' && (!ex.answer || ex.answer.length < 2)) return false
      return true
    })
    .map((ex) => ({ ...ex, courseId: course.id, lang: course.lang }))
}

export function buildLesson(course, u, l) {
  return course.kind === 'lang' ? langLesson(course, u, l) : quizLesson(course, u, l)
}

export function buildPractice(course, progress, mistakes) {
  const saved = Object.values(mistakes?.[course.id] || {})
  const done = progress?.[course.id]?.done || {}
  const unlockedUnits = course.units.map((_, u) => u).filter((u) => done[lessonKey(u, 0)])
  const units = unlockedUnits.length ? unlockedUnits : [0]
  let pool = []
  units.forEach((u) => { pool = pool.concat(buildLesson(course, u, 2)) })
  const fill = sample(pool.filter((p) => !saved.some((s) => s.id === p.id)), Math.max(0, 8 - saved.length))
  return shuffle([...sample(saved, 6), ...fill]).slice(0, 10)
}
