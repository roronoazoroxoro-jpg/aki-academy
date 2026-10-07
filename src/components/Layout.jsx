import { useEffect, useState } from 'react'
import { useStore, QUESTS, MAX_HEARTS, nextHeartIn, hasUnlimitedHearts, todayStr, toggleTheme } from '../store'
import { getCourse } from '../data/courses'
import { go } from '../router'
import { Aki, Bar, Modal, fmtTime, CourseIcon, Ring } from './ui'
import { MateGlow } from './Decor'
import { leagueTable, tierFor } from '../league'

export const NAV = [
  { id: 'aprender', label: 'Aprender', ico: '🏠' },
  { id: 'cursos', label: 'Cursos', ico: '📚' },
  { id: 'lab', label: 'Laboratorio', ico: '💻' },
  { id: 'liga', label: 'Liga', ico: '🏆' },
  { id: 'misiones', label: 'Misiones', ico: '🎯' },
  { id: 'tienda', label: 'Tienda', ico: '🥐' },
  { id: 'perfil', label: 'Perfil', ico: '🧉' },
]

export function Stats({ compact = false }) {
  const s = useStore()
  const course = getCourse(s.currentCourse)
  const [open, setOpen] = useState(null)
  const activeToday = s.lastActive === todayStr()
  const unlimited = hasUnlimitedHearts(s)
  return (
    <>
      <div className="stats">
        <button className="stat course-chip" onClick={() => go('cursos')} title="Cambiar de curso">
          <CourseIcon course={course} size={22} />{!compact && <span className="small">{course.title}</span>}
        </button>
        <button className={`stat fire ${activeToday ? '' : 'off'}`} onClick={() => setOpen('streak')} title="Racha">
          <span className="em">🔥</span>{s.streak}
        </button>
        <button className="stat gem" onClick={() => go('tienda')} title="Medialunas">
          <span className="em">🥐</span>{s.gems}
        </button>
        <button className="stat heart" onClick={() => setOpen('hearts')} title="Vidas">
          <span className="em">❤️</span>{unlimited ? '∞' : s.hearts}
        </button>
      </div>
      {open === 'streak' && <StreakModal onClose={() => setOpen(null)} />}
      {open === 'hearts' && <HeartsModal onClose={() => setOpen(null)} />}
    </>
  )
}

function StreakModal({ onClose }) {
  const s = useStore()
  const days = []
  const now = new Date()
  const first = new Date(now.getFullYear(), now.getMonth(), 1)
  const offset = (first.getDay() + 6) % 7
  const total = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  for (let i = 0; i < offset; i++) days.push(null)
  for (let d = 1; d <= total; d++) days.push(new Date(now.getFullYear(), now.getMonth(), d))
  const monthName = now.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })
  return (
    <Modal onClose={onClose}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <Aki pose="streak" h={120} />
        <div>
          <h2 style={{ fontSize: 40, color: '#f08a00', margin: 0 }}>{s.streak} {s.streak === 1 ? 'día' : 'días'}</h2>
          <p className="muted" style={{ margin: 0, fontWeight: 700 }}>
            {s.lastActive === todayStr() ? '¡Ya sumaste hoy! Volvé mañana para seguir la racha.' : 'Hacé una lección hoy para no perder la racha, che.'}
          </p>
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ textTransform: 'capitalize' }}>{monthName}</h3>
        <div className="cal">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => <div key={i} className="h">{d}</div>)}
          {days.map((d, i) => d
            ? <div key={i} className={`d ${s.activeDays.includes(todayStr(d)) ? 'on' : ''} ${todayStr(d) === todayStr() ? 'today' : ''}`}>{d.getDate()}</div>
            : <div key={i} />)}
        </div>
      </div>
      <p className="muted small" style={{ fontWeight: 700 }}>🧊 Protectores de racha: {s.freezes} · Racha más larga: {s.longestStreak} días</p>
      <button className="btn block" onClick={onClose}>Dale</button>
    </Modal>
  )
}

export function HeartsModal({ onClose }) {
  const s = useStore()
  const [, tick] = useState(0)
  useEffect(() => { const t = setInterval(() => tick((x) => x + 1), 1000); return () => clearInterval(t) }, [])
  const unlimited = hasUnlimitedHearts(s)
  return (
    <Modal onClose={onClose}>
      <div style={{ textAlign: 'center' }}>
        <Aki pose={s.hearts > 0 || unlimited ? 'mate' : 'oops'} h={140} />
        <h2>Vidas</h2>
        <div style={{ fontSize: 34, letterSpacing: 4 }}>
          {Array.from({ length: MAX_HEARTS }, (_, i) => <span key={i} style={{ opacity: unlimited || i < s.hearts ? 1 : 0.2 }}>❤️</span>)}
        </div>
        <p className="muted" style={{ fontWeight: 700 }}>
          {unlimited ? 'Tenés vidas ilimitadas activas. ¡A romperla!' : s.hearts >= MAX_HEARTS ? 'Tenés todas tus vidas. ¡A aprender!' : `Próxima vida en ${fmtTime(nextHeartIn(s))}`}
        </p>
        <div style={{ display: 'grid', gap: 10 }}>
          <button className="btn gold block" onClick={() => { onClose(); go('tienda') }}>Recargar en la tienda</button>
          <button className="btn white block" onClick={() => { onClose(); go(`practica/${s.currentCourse}`) }}>Practicar para ganar vidas</button>
        </div>
      </div>
    </Modal>
  )
}

function DailyGoal() {
  const s = useStore()
  const today = s.xpByDay[todayStr()] || 0
  return (
    <div className="card">
      <h3>Meta diaria</h3>
      <div className="row">
        <Ring value={today} max={s.dailyGoal} label={`${Math.round(Math.min(100, (today / s.dailyGoal) * 100))}%`} sub="hoy" />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 800, marginBottom: 8 }}>{Math.min(today, s.dailyGoal)} / {s.dailyGoal} XP</div>
          <Bar value={today} max={s.dailyGoal} />
          <div className="small muted" style={{ fontWeight: 700, marginTop: 6 }}>
            {today >= s.dailyGoal ? '¡Meta cumplida! Sos un fenómeno 🎉' : `Te faltan ${s.dailyGoal - today} XP, dale que va.`}
          </div>
        </div>
      </div>
    </div>
  )
}

function QuestsMini() {
  const s = useStore()
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Misiones del día</h3>
        <button className="btn ghost sm" onClick={() => go('misiones')}>Ver todas</button>
      </div>
      {QUESTS.slice(0, 3).map((q) => {
        const target = q.target(s)
        const val = Math.min(q.value(s.quests), target)
        return (
          <div key={q.id} className="row" style={{ marginBottom: 10 }}>
            <span style={{ fontSize: 24 }}>{q.icon}</span>
            <div style={{ flex: 1 }}>
              <div className="small" style={{ fontWeight: 800, marginBottom: 4 }}>{q.title}</div>
              <Bar value={val} max={target} cel style={{ height: 12 }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function LeagueMini() {
  const s = useStore()
  const tier = tierFor(s.xp)
  const table = leagueTable(s.name, s.league.xp)
  const pos = table.findIndex((r) => r.me) + 1
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Liga {tier.name}</h3>
        <button className="btn ghost sm" onClick={() => go('liga')}>Ver liga</button>
      </div>
      <div className="row">
        <span style={{ fontSize: 40 }}>{tier.icon}</span>
        <div className="muted" style={{ fontWeight: 700 }}>
          Estás <b style={{ color: 'var(--celeste-3)' }}>#{pos}</b> esta semana con {s.league.xp} XP.
          {pos <= 5 ? ' ¡Zona de ascenso!' : ' Sumá XP para subir.'}
        </div>
      </div>
    </div>
  )
}

export function ThemeToggle() {
  const dark = useStore((s) => s.theme === 'dark')
  return (
    <button className="nav-item" onClick={toggleTheme} title={dark ? 'Modo claro' : 'Modo oscuro'}>
      <span className="ico">{dark ? '☀️' : '🌙'}</span><span className="label">{dark ? 'Modo claro' : 'Modo oscuro'}</span>
    </button>
  )
}

export function Layout({ active, children }) {
  return (
    <div className="app">
      <aside className="sidebar">
        <a className="logo" href="#/aprender">
          <img src="/img/aki-icon.jpg" alt="AKI" />
          <b>AKI<span>-Academy</span></b>
        </a>
        <div className="side-aki">
          <Aki pose="mate" h={86} />
          <MateGlow />
        </div>
        {NAV.map((n) => (
          <button key={n.id} className={`nav-item ${active === n.id ? 'active' : ''}`} onClick={() => go(n.id)}>
            <span className="ico">{n.ico}</span><span className="label">{n.label}</span>
          </button>
        ))}
        <div className="spacer" />
        <ThemeToggle />
        <div className="flag-strip" />
        <div className="small muted label" style={{ textAlign: 'center', fontWeight: 700 }}>Hecho en Argentina ☀️</div>
      </aside>

      <div className="mobile-top"><Stats compact /></div>

      <main className="main">{children}</main>

      <aside className="rightbar">
        <Stats />
        <DailyGoal />
        <LeagueMini />
        <QuestsMini />
        <div className="card" style={{ background: 'linear-gradient(120deg, var(--celeste-soft), #fff)' }}>
          <div className="row">
            <Aki pose="teach" h={80} />
            <div>
              <h3 style={{ marginBottom: 4 }}>Laboratorio</h3>
              <p className="small muted" style={{ margin: '0 0 8px', fontWeight: 700 }}>Programá Python y webs de verdad en el navegador.</p>
              <button className="btn sm gold" onClick={() => go('lab')}>Abrir</button>
            </div>
          </div>
        </div>
      </aside>

      <nav className="bottom-nav">
        {NAV.map((n) => (
          <button key={n.id} className={active === n.id ? 'active' : ''} onClick={() => go(n.id)} aria-label={n.label}>{n.ico}</button>
        ))}
      </nav>
    </div>
  )
}
