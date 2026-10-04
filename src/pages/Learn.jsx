import { useState } from 'react'
import { useStore, setState, checkAchievements } from '../store'
import { getCourse, LESSONS_PER_UNIT, LESSON_NAMES, lessonKey, currentLesson, courseStats } from '../data/courses'
import { go } from '../router'
import { Aki, Modal, Code, Bar, Confetti, CourseIcon } from '../components/ui'
import { HeartsModal } from '../components/Layout'
import { sfx } from '../fx'

const OFFSETS = [0, 44, 70, 44, 0, -44, -70, -44]
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
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <CourseIcon course={course} size={40} />
        <div style={{ flex: 1 }}>
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
              <span className="sun">☀️</span>
              <div>
                <div className="lvl">Unidad {u + 1} · {un.level}</div>
                <h2>{un.title}</h2>
              </div>
              <button className="btn white sm" onClick={() => setGuide(u)}>📖 Guía</button>
            </div>
            <div className="path">
              {Array.from({ length: LESSONS_PER_UNIT + 1 }, (_, l) => {
                const off = OFFSETS[nodeIndex++ % OFFSETS.length]
                const isChest = l === LESSONS_PER_UNIT
                if (isChest) {
                  const opened = chests[u]
                  return (
                    <div className="node-row" key={l} style={{ transform: `translateX(${off}px)` }}>
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
                return (
                  <div className={`node-row ${isCur ? 'has-bubble' : ''}`} key={l} style={{ transform: `translateX(${off}px)` }}>
                    {isCur && <div className="start-bubble">EMPEZAR</div>}
                    <button className={`node ${isDone ? 'done' : ''} ${isCur ? 'current' : ''} ${locked ? 'locked' : ''}`}
                      onClick={() => locked ? null : setPick({ u, l })} aria-label={`Lección ${l + 1}`}>
                      {isDone ? '⭐' : l === 2 ? '🏆' : locked ? '🔒' : l === 0 ? '🧉' : '💪'}
                    </button>
                    {l === 1 && (
                      <Aki pose={POSES[u % POSES.length]} className="path-mascot"
                        style={{ [u % 2 ? 'left' : 'right']: 'calc(50% - 260px)', opacity: unitUnlocked ? 1 : 0.35 }} />
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
          <Aki pose="celebrate" h={200} />
          <h2>¡Terminaste {course.title}! Sos un crack 🏆</h2>
          <p className="muted" style={{ fontWeight: 700 }}>Seguí practicando para no oxidarte o arrancá otro curso.</p>
          <button className="btn gold" onClick={() => go('cursos')}>Elegir otro curso</button>
        </div>
      )}

      {guide !== null && (
        <Modal onClose={() => setGuide(null)}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <Aki pose={course.kind === 'code' ? 'code' : 'languages'} h={100} />
            <div>
              <div className="ex-tag">Guía · Unidad {guide + 1}</div>
              <h2>{course.units[guide].title}</h2>
            </div>
          </div>
          <p style={{ fontWeight: 600, fontSize: 17 }}>{course.units[guide].guide.intro}</p>
          <ul className="guide-points">{course.units[guide].guide.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
          {course.units[guide].guide.code && <Code>{course.units[guide].guide.code}</Code>}
          {course.kind === 'lang' && (
            <>
              <div className="group-title">Vocabulario</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {course.units[guide].words.map((w, i) => (
                  <span key={i} className="tile" style={{ fontSize: 14 }}>{w[1]} <span className="muted">· {w[0]}</span></span>
                ))}
              </div>
            </>
          )}
          <button className="btn block" style={{ marginTop: 18 }} onClick={() => setGuide(null)}>¡Entendido!</button>
        </Modal>
      )}

      {pick && (
        <Modal onClose={() => setPick(null)}>
          <div style={{ textAlign: 'center' }}>
            <Aki pose={pick.l === 2 ? 'streak' : 'mascot'} h={130} />
            <div className="ex-tag" style={{ justifyContent: 'center' }}>Unidad {pick.u + 1} · {course.units[pick.u].title}</div>
            <h2>{LESSON_NAMES[pick.l]}</h2>
            <p className="muted" style={{ fontWeight: 700 }}>
              {done[lessonKey(pick.u, pick.l)] ? 'Ya la hiciste. ¿La repasamos? Suma XP igual.' : pick.l === 2 ? 'Mezcla todo lo de la unidad y un poco de la anterior.' : 'Unos minutos y listo. ¡Vamos, che!'}
            </p>
            <button className="btn block" onClick={() => start(pick.u, pick.l)}>
              {done[lessonKey(pick.u, pick.l)] ? 'Repasar +XP' : 'Empezar +10 XP'}
            </button>
          </div>
        </Modal>
      )}

      {chest !== null && (
        <Modal onClose={() => setChest(null)}>
          <Confetti count={50} />
          <div style={{ textAlign: 'center' }}>
            <Aki pose="celebrate" h={170} />
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
