import { useRef, useState } from 'react'
import { useStore, setState, QUESTS, claimQuest, ACHIEVEMENTS, MAX_HEARTS, hasUnlimitedHearts, resetAll, todayStr, checkAchievements, toggleTheme } from '../store'
import { COURSES, GROUPS, courseStats } from '../data/courses'
import { ownedCount } from '../data/cards'
import { go } from '../router'
import { Aki, Bar, Modal, Confetti, CourseIcon } from '../components/ui'
import { leagueTable, tierFor, TIERS } from '../league'
import { sfx } from '../fx'

function Head({ pose, title, sub }) {
  return (
    <div className="page-head">
      <Aki pose={pose} h={96} idle={false} />
      <div><h1>{title}</h1><p>{sub}</p></div>
    </div>
  )
}

/* ---------- Courses ---------- */
export function Courses() {
  const s = useStore()
  const pick = (id) => { setState({ currentCourse: id }); go('aprender') }
  const Row = ({ c }) => {
    const st = courseStats(c, s.progress)
    return (
      <button className={`course-row ${s.currentCourse === c.id ? 'active' : ''}`} onClick={() => pick(c.id)}>
        <span className="ci"><CourseIcon course={c} size={36} /></span>
        <div className="cb">
          <h4>{c.title}</h4>
          <p>{c.desc}</p>
          <Bar value={st.pct} cel style={{ height: 10 }} />
          <div className="small muted" style={{ fontWeight: 700, marginTop: 4 }}>{c.units.length} unidades · {st.pct}%</div>
        </div>
      </button>
    )
  }
  return (
    <>
      <Head pose="wave" title="Cursos" sub={`${COURSES.length} cursos gratis, cada uno con un camino largo de unidades. Tu progreso se guarda acá.`} />
      {GROUPS.map((g) => (
        <section key={g.id}>
          <div className="group-title">{g.icon} {g.title}</div>
          <p className="muted small" style={{ fontWeight: 700, margin: '-6px 0 12px' }}>{g.sub}</p>
          <div className="courses-list">{g.courses.map((c, i) => <div key={c.id} className="reveal" style={{ animationDelay: `${i * 0.03}s` }}><Row c={c} /></div>)}</div>
        </section>
      ))}
    </>
  )
}

/* ---------- League ---------- */
export function League() {
  const s = useStore()
  const tier = tierFor(s.xp)
  const table = leagueTable(s.name, s.league.xp)
  const now = new Date()
  const daysLeft = 7 - ((now.getDay() + 6) % 7)
  return (
    <>
      <Head pose="hero" title={`Liga ${tier.name} ${tier.icon}`} sub={`Los 5 primeros ascienden. Quedan ${daysLeft} ${daysLeft === 1 ? 'día' : 'días'} de esta semana.`} />
      <div className="tiers">{TIERS.map((t) => <div key={t.name} className={`tier ${t.name === tier.name ? 'on' : ''}`} title={`${t.name} · desde ${t.min} XP`}>{t.icon}</div>)}</div>
      <div className="card">
        <div className="list">
          {table.map((r, i) => (
            <div key={r.name + i}>
              {i === 5 && <div className="league-zone up">▲ Zona de ascenso ▲</div>}
              {i === table.length - 3 && <div className="league-zone down">▼ Zona de descenso ▼</div>}
              <div className={`league-row ${r.me ? 'me' : ''} ${i < 5 ? 'up' : ''}`}>
                <span className="pos">{i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}</span>
                <span className="av" style={{ background: r.color }}>{r.me ? '🧉' : r.name[0]}</span>
                <span className="nm">{r.name}<div className="small muted">{r.city}</div></span>
                <span>{r.xp} XP</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="muted small" style={{ fontWeight: 700, textAlign: 'center' }}>Tu división sube según tu XP total. Próxima: {TIERS[TIERS.indexOf(tier) + 1]?.name || '¡Ya sos campeón!'}</p>
    </>
  )
}

/* ---------- Quests ---------- */
export function Quests() {
  const s = useStore()
  const [won, setWon] = useState(null)
  const today = s.xpByDay[todayStr()] || 0
  return (
    <>
      <Head pose="cheer" title="Misiones del día" sub="Cumplilas antes de la medianoche y ganá medialunas." />
      <div className="card">
        {QUESTS.map((q) => {
          const target = q.target(s)
          const val = Math.min(q.value(s.quests), target)
          const claimed = s.quests.claimed.includes(q.id)
          const ready = val >= target && !claimed
          return (
            <div className="quest" key={q.id}>
              <span className="qi">{q.icon}</span>
              <div className="qb">
                <div className="qt">{q.id === 'xp' ? `Sumá ${target} XP hoy` : q.title}</div>
                <Bar value={val} max={target} />
                <div className="small muted" style={{ fontWeight: 700, marginTop: 4 }}>{val} / {target}</div>
              </div>
              <button className={`btn sm ${ready ? 'gold' : 'white'}`} disabled={!ready}
                onClick={() => { claimQuest(q.id); sfx.coin(); setWon(q.reward) }}>
                {claimed ? '✔ Listo' : `🥐 ${q.reward}`}
              </button>
            </div>
          )
        })}
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Hoy llevás {today} XP</h3>
        <p className="muted" style={{ fontWeight: 700, margin: 0 }}>Tu meta diaria es {s.dailyGoal} XP. Cambiala desde tu perfil.</p>
      </div>
      {won && (
        <Modal onClose={() => setWon(null)}>
          <Confetti count={40} />
          <div style={{ textAlign: 'center' }}>
            <Aki pose="victory" h={150} idle={false} />
            <h2>¡Misión cumplida!</h2>
            <p style={{ fontSize: 26, fontWeight: 900, color: 'var(--oro-2)' }}>+{won} 🥐</p>
            <button className="btn gold block" onClick={() => setWon(null)}>¡Joya!</button>
          </div>
        </Modal>
      )}
    </>
  )
}

/* ---------- Shop ---------- */
export function Shop() {
  const s = useStore()
  const [msg, setMsg] = useState(null)
  const unlimited = hasUnlimitedHearts(s)
  const buy = (cost, patch, text) => {
    if (s.gems < cost) { setMsg('No te alcanzan las medialunas. ¡Hacé lecciones y misiones para ganar más!'); return }
    setState({ gems: s.gems - cost, ...patch })
    sfx.coin()
    setMsg(text)
  }
  const items = [
    { icon: '❤️', title: 'Recargar vidas', desc: 'Volvé a tener las 5 vidas al toque.', cost: 350, disabled: s.hearts >= MAX_HEARTS || unlimited, label: s.hearts >= MAX_HEARTS ? 'Completas' : null, action: () => buy(350, { hearts: MAX_HEARTS }, '¡Vidas recargadas! A seguir.') },
    { icon: '🧊', title: 'Protector de racha', desc: `Si un día no practicás, tu racha no se pierde. Tenés ${s.freezes}/3.`, cost: 200, disabled: s.freezes >= 3, label: s.freezes >= 3 ? 'Máximo' : null, action: () => buy(200, { freezes: s.freezes + 1 }, '¡Protector activado! Tu racha está cubierta.') },
    { icon: '♾️', title: 'Vidas ilimitadas · 1 hora', desc: 'Equivocate todo lo que quieras durante una hora.', cost: 500, disabled: unlimited, label: unlimited ? 'Activo' : null, action: () => buy(500, { unlimitedHeartsUntil: Date.now() + 3600000 }, '¡Vidas ilimitadas por una hora!') },
    { icon: '🧉', title: 'Invitale un mate a AKI', desc: 'No da poderes, pero lo pone muy contento.', cost: 50, action: () => buy(50, {}, 'AKI te agradece el mate. ¡Gracias, che! 🧉') },
  ]
  return (
    <>
      <Head pose="shop" title="Tienda" sub={`Tenés ${s.gems} 🥐 medialunas. Las ganás con lecciones, misiones, cofres y logros.`} />
      <div className="card">
        {items.map((it) => (
          <div className="shop-item" key={it.title}>
            <span className="si">{it.icon}</span>
            <div className="sb"><h4>{it.title}</h4><p>{it.desc}</p></div>
            <button className="btn gold sm" disabled={it.disabled} onClick={it.action}>{it.label || `🥐 ${it.cost}`}</button>
          </div>
        ))}
      </div>
      {msg && (
        <Modal onClose={() => setMsg(null)}>
          <div style={{ textAlign: 'center' }}>
            <Aki pose={msg.startsWith('No') ? 'oops' : 'victory'} h={150} idle={false} />
            <p style={{ fontWeight: 800, fontSize: 18 }}>{msg}</p>
            <button className="btn block" onClick={() => setMsg(null)}>Dale</button>
          </div>
        </Modal>
      )}
    </>
  )
}

/* ---------- Profile ---------- */
const COLORS = ['#74ACDF', '#F6B40E', '#1F5F99', '#E5484D', '#2FA86B', '#8B5CF6']

export function Profile() {
  const s = useStore()
  const [confirm, setConfirm] = useState(false)
  const [name, setName] = useState(s.name)
  const fileRef = useRef()
  // getCourse falls back to the first course, so stale ids are dropped instead of mapped.
  const started = COURSES.filter((c) => s.progress[c.id])
  const since = new Date(s.createdAt).toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })

  const exportData = () => {
    const blob = new Blob([localStorage.getItem('aki-academy-v1') || '{}'], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `aki-academy-${s.name || 'progreso'}.json`
    a.click()
  }
  const importData = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      const data = JSON.parse(await file.text())
      setState({ ...data })
      checkAchievements()
      alert('¡Progreso importado!')
    } catch {
      alert('Ese archivo no es un progreso válido de AKI-Academy.')
    }
  }

  return (
    <>
      <div className="profile-top">
        <div className="avatar-big" style={{ background: s.avatarColor }}>{(s.name || 'A')[0].toUpperCase()}</div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <input className="name-input" style={{ maxWidth: 320, fontSize: 24, fontWeight: 900, padding: '8px 12px' }} value={name}
            onChange={(e) => setName(e.target.value)} onBlur={() => setState({ name: name.trim() || 'Estudiante' })} maxLength={24} />
          <p className="muted" style={{ fontWeight: 700, margin: '8px 0' }}>Aprendiendo desde {since} · Liga {tierFor(s.xp).name} {tierFor(s.xp).icon}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {COLORS.map((c) => <button key={c} onClick={() => setState({ avatarColor: c })} aria-label="Color de avatar"
              style={{ width: 28, height: 28, borderRadius: '50%', background: c, border: s.avatarColor === c ? '3px solid var(--tinta)' : '2px solid #fff', boxShadow: '0 0 0 1px var(--gris)' }} />)}
          </div>
        </div>
        <Aki pose="mate" h={130} />
      </div>

      <h2 className="section-title">Estadísticas</h2>
      <div className="stat-grid">
        <div className="stat-box"><span className="e">🔥</span><div><b>{s.streak}</b><span>Racha actual</span></div></div>
        <div className="stat-box"><span className="e">🏅</span><div><b>{s.longestStreak}</b><span>Racha más larga</span></div></div>
        <div className="stat-box"><span className="e">⚡</span><div><b>{s.xp}</b><span>XP total</span></div></div>
        <div className="stat-box"><span className="e">🥐</span><div><b>{s.gems}</b><span>Medialunas</span></div></div>
        <div className="stat-box"><span className="e">📚</span><div><b>{started.length}</b><span>Cursos empezados</span></div></div>
        <div className="stat-box"><span className="e">💻</span><div><b>{s.labSolved.length}</b><span>Desafíos resueltos</span></div></div>
        <div className="stat-box"><span className="e">🃏</span><div><b>{ownedCount(s.deck)} / 20</b><span>Cartas del mazo</span></div></div>
        <div className="stat-box"><span className="e">🧢</span><div><b>{s.cardPts || 0}</b><span>Figus</span></div></div>
      </div>

      <div className="card" style={{ margin: '8px 0 22px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }} onClick={() => go('mazo')}>
        <span style={{ fontSize: 36 }}>🃏</span>
        <div style={{ flex: 1 }}>
          <h3 style={{ margin: 0 }}>Tu mazo de cartas</h3>
          <p className="muted" style={{ margin: '4px 0 0', fontWeight: 700 }}>Canjeá figus por AKI futbolista, chef, gaucho y más.</p>
        </div>
        <button className="btn sm gold" type="button">Abrir álbum</button>
      </div>

      <h2 className="section-title">Mis cursos</h2>
      <div className="courses-list">
        {started.length === 0 && <p className="muted" style={{ fontWeight: 700 }}>Todavía no empezaste ningún curso.</p>}
        {started.map((c) => {
          const st = courseStats(c, s.progress)
          return (
            <button key={c.id} className="course-row" onClick={() => { setState({ currentCourse: c.id }); go('aprender') }}>
              <span className="ci"><CourseIcon course={c} size={36} /></span>
              <div className="cb"><h4>{c.title}</h4><Bar value={st.pct} cel style={{ height: 10 }} /><div className="small muted" style={{ fontWeight: 700, marginTop: 4 }}>{st.completed}/{st.total} lecciones</div></div>
            </button>
          )
        })}
      </div>

      <h2 className="section-title">Logros</h2>
      <div className="ach-grid">
        {ACHIEVEMENTS.map((a) => {
          const on = s.achievements.includes(a.id)
          return <div key={a.id} className={`ach ${on ? 'on' : 'off'}`}><div className="ai">{a.icon}</div><h4>{a.title}</h4><p>{a.desc}</p></div>
        })}
      </div>

      <h2 className="section-title">Ajustes</h2>
      <div className="card" style={{ display: 'grid', gap: 14 }}>
        <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <b>Meta diaria</b>
          <div style={{ display: 'flex', gap: 8 }}>
            {[10, 30, 50, 100].map((g) => <button key={g} className={`btn sm ${s.dailyGoal === g ? '' : 'white'}`} onClick={() => setState({ dailyGoal: g })}>{g} XP</button>)}
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <b>Tema</b>
          <button className="btn sm white" onClick={toggleTheme}>{s.theme === 'dark' ? '🌙 Oscuro' : '☀️ Claro'}</button>
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <b>Efectos de sonido</b>
          <button className={`btn sm ${s.sound ? '' : 'white'}`} onClick={() => setState({ sound: !s.sound })}>{s.sound ? '🔊 Activados' : '🔇 Apagados'}</button>
        </div>
        <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div><b>Tu progreso</b><div className="small muted" style={{ fontWeight: 700 }}>Se guarda en este dispositivo. Exportalo para pasarlo a otro.</div></div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="btn sm white" onClick={exportData}>⬇ Exportar</button>
            <button className="btn sm white" onClick={() => fileRef.current.click()}>⬆ Importar</button>
            <input ref={fileRef} type="file" accept="application/json" hidden onChange={importData} />
          </div>
        </div>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <b>Empezar de cero</b>
          <button className="btn sm red" onClick={() => setConfirm(true)}>Borrar progreso</button>
        </div>
      </div>

      {confirm && (
        <Modal onClose={() => setConfirm(false)}>
          <div style={{ textAlign: 'center' }}>
            <Aki pose="sad" h={150} />
            <h2>¿Seguro, che?</h2>
            <p className="muted" style={{ fontWeight: 700 }}>Se borra todo: racha, XP, medialunas y cursos. No hay vuelta atrás.</p>
            <div style={{ display: 'grid', gap: 10 }}>
              <button className="btn block" onClick={() => setConfirm(false)}>No, me arrepentí</button>
              <button className="btn red block" onClick={() => { resetAll(); go('') }}>Sí, borrar todo</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
