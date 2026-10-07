import { useState } from 'react'
import { useStore, setState, checkAchievements } from '../store'
import { getCourse, LESSONS_PER_UNIT, LESSON_NAMES, lessonKey, currentLesson, courseStats } from '../data/courses'
import { go } from '../router'
import { Aki, Modal, Code, Bar, Confetti, CourseIcon } from '../components/ui'
import { HeartsModal } from '../components/Layout'
import { sfx } from '../fx'

const ZIG = ['z0', 'z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7']
const POSES = ['mascot', 'code', 'streak', 'languages', 'celebrate']
// Each unit gets its own colour so the path reads like a journey, not a list.
const HUES = ['#2E7FC2', '#E0A106', '#19A974', '#8B5CF6', '#E06C2B', '#D14A6B', '#0E9BA8', '#6B7FD7']

export default function Learn() {
  const s = useStore()
  const course = getCourse(s.currentCourse)
  const done = s.progress[course.id]?.done || {}
  const chests = s.progress[course.id]?.chests || {}
  const cur = currentLesson(course, s.progress)
  const stats = courseStats(course, s.progress)
  const [guide, setGuide] = useState(null)
  const [pick, setPick] = useState(null)
  const [chest, setChest] = useState(null)
  const [noHearts, setNoHearts] = useState(false)

  const start = (u, l) => {
    if (s.hearts <= 0 && s.unlimitedHeartsUntil < Date.now()) { setNoHearts(true); return }
    go(`leccion/${course.id}/${u}/${l}`)
  }

  const openChest = (u) => {
    const amount = 20 + Math.floor(Math.random() * 31)
    const cp = s.progress[course.id] || { done: {} }
    setState({ gems: s.gems + amount, progress: { ...s.progress, [course.id]: { ...cp, chests: { ...(cp.chests || {}), [u]: true } } } })
    sfx.coin()
    setChest(amount)
    checkAchievements()
  }

  let nodeIndex = 0
  return (
    <div className="path-wrap">
      <div className="card course-head">
        <CourseIcon course={course} size={40} />
        <div className="course-head-copy">
          <div style={{ fontWeight: 900, fontSize: 18 }}>{course.title}</div>
          <div className="small muted" style={{ fontWeight: 700, marginBottom: 6 }}>{stats.completed} de {stats.total} lecciones · {stats.pct}%</div>
          <Bar value={stats.pct} cel style={{ height: 12 }} />
        </div>
        <button className="btn white sm" onClick={() => go(`practica/${course.id}`)}>🏋️ Practicar</button>
      </div>

      {course.units.map((un, u) => {
        const unitUnlocked = u === 0 || done[lessonKey(u - 1, LESSONS_PER_UNIT - 1)]
        const unitDone = Array.from({ length: LESSONS_PER_UNIT }, (_, l) => done[lessonKey(u, l)]).every(Boolean)
        return (
          <section key={u} style={{ '--unit': HUES[u % HUES.length] }}>
            <div className={`unit-banner ${unitUnlocked ? '' : 'locked'}`}>
              <div className="unit-copy">
                <div className="lvl">Unidad {u + 1} · {un.level}</div>
                <h2>{un.title}</h2>
              </div>
              <button className="btn white sm" onClick={() => setGuide(guide === u ? null : u)}>
                {guide === u ? 'Cerrar' : '📖 Guía'}
              </button>
            </div>
            {guide === u && (
              <div className="guide-panel" role="region" aria-label={`Guía de ${un.title}`}>
                <Aki pose={course.kind === 'code' ? 'code' : course.kind === 'lang' ? 'languages' : 'streak'} h={88} idle={false} />
                <div className="guide-panel-body">
                  <div className="ex-tag">Guía · Unidad {u + 1}</div>
                  <p>{un.guide.intro}</p>
                  <ul className="guide-points">{un.guide.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
                  {un.guide.code && <Code>{un.guide.code}</Code>}
                  {course.kind === 'lang' && un.words?.length > 0 && (
                    <div className="guide-words">
                      {un.words.map((w, i) => (
                        <span key={i} className="tile" style={{ fontSize: 14 }}>{w[1]} <span className="muted">· {w[0]}</span></span>
                      ))}
                    </div>
                  )}
                  <button className="btn sm" onClick={() => setGuide(null)}>¡Entendido!</button>
                </div>
              </div>
            )}
            <div className="path">
              {Array.from({ length: LESSONS_PER_UNIT + 1 }, (_, l) => {
                const zig = ZIG[nodeIndex++ % ZIG.length]
                const isChest = l === LESSONS_PER_UNIT
                if (isChest) {
                  const opened = chests[u]
                  return (
                    <div className={`node-row ${zig}`} key={l}>
                      <button className={`node chest ${unitDone ? '' : 'locked'}`} disabled={!unitDone || opened}
                        onClick={() => openChest(u)} title={opened ? 'Cofre abierto' : 'Cofre de medialunas'}>
                        {opened ? '📭' : '🎁'}
                      </button>
                    </div>
                  )
                }
                const isDone = !!done[lessonKey(u, l)]
                const isCur = cur && cur.u === u && cur.l === l
                const locked = !isDone && !isCur
                const open = pick && pick.u === u && pick.l === l
                return (
                  <div className={`node-row ${zig} ${isCur ? 'has-bubble' : ''} ${open ? 'has-pick' : ''}`} key={l}>
                    {isCur && (
                      <button type="button" className="start-bubble" onClick={() => start(u, l)}>EMPEZAR</button>
                    )}
                    <button className={`node ${isDone ? 'done' : ''} ${isCur ? 'current' : ''} ${locked ? 'locked' : ''} ${open ? 'open' : ''}`}
                      onClick={() => {
                        if (locked) return
                        if (isCur) start(u, l)
                        else setPick(open ? null : { u, l })
                      }} aria-label={`Lección ${l + 1}`}>
                      {isDone ? '⭐' : l === 2 ? '🏆' : locked ? '🔒' : l === 0 ? '🧉' : '💪'}
                    </button>
                    {open && (
                      <div className="lesson-pop" role="dialog">
                        <Aki pose={l === 2 ? 'streak' : 'mascot'} h={72} idle={false} />
                        <div>
                          <div className="ex-tag">{LESSON_NAMES[l]}</div>
                          <p>{isDone ? 'Repasar suma XP igual.' : 'Unos minutos y listo.'}</p>
                          <button className="btn sm block" onClick={() => start(u, l)}>
                            {isDone ? 'Repasar +XP' : 'Empezar +10 XP'}
                          </button>
                        </div>
                        <button type="button" className="pop-x" onClick={() => setPick(null)} aria-label="Cerrar">✕</button>
                      </div>
                    )}
                    {l === 1 && (
                      <Aki pose={POSES[u % POSES.length]} className={`path-mascot ${u % 2 ? 'left' : 'right'}`}
                        idle={false} h={110} style={{ opacity: unitUnlocked ? 1 : 0.35 }} />
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      {!cur && (
        <div className="card" style={{ textAlign: 'center', marginTop: 40 }}>
          <Aki pose="victory" h={180} idle={false} />
          <h2>¡Terminaste {course.title}! Sos un crack 🏆</h2>
          <p className="muted" style={{ fontWeight: 700 }}>Seguí practicando para no oxidarte o arrancá otro curso.</p>
          <button className="btn gold" onClick={() => go('cursos')}>Elegir otro curso</button>
        </div>
      )}

      {chest !== null && (
        <Modal onClose={() => setChest(null)}>
          <Confetti count={50} />
          <div style={{ textAlign: 'center' }}>
            <Aki pose="victory" h={150} idle={false} />
            <h2>¡Cofre abierto!</h2>
            <p style={{ fontSize: 28, fontWeight: 900, color: 'var(--oro-2)', margin: '8px 0 18px' }}>+{chest} 🥐</p>
            <button className="btn gold block" onClick={() => setChest(null)}>¡Joya!</button>
          </div>
        </Modal>
      )}

      {noHearts && <HeartsModal onClose={() => setNoHearts(false)} />}
    </div>
  )
}
