import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useStore, getState, setState, loseHeart, completeLesson, hasUnlimitedHearts, MAX_HEARTS, ACHIEVEMENTS } from '../store'
import { getCourse, buildLesson, buildPractice, lessonKey } from '../data/courses'
import { go } from '../router'
import { Aki, Bar, Modal, Confetti, fmtTime, Count, Sparks } from '../components/ui'
import { Exercise, prepare, isCorrect, correctText, canCheck } from '../components/exercises'
import { sfx, speak } from '../fx'

const PRAISE = ['¡Bien ahí!', '¡Genio!', '¡Sos un crack!', '¡De diez!', '¡Golazo!', '¡Espectacular!', '¡La rompiste!', '¡Joya!', '¡Tremendo!']
const OOPS = ['Casi, che', 'Uh, no era esa', 'No pasa nada, seguí', 'Ups, la próxima sale']
const pickOne = (a) => a[Math.floor(Math.random() * a.length)]
const REFILL_COST = 350

export default function Lesson({ courseId, u, l, practice = false }) {
  const s = useStore()
  const course = getCourse(courseId)
  const initial = useMemo(() => {
    const raw = practice ? buildPractice(course, getState().progress, getState().mistakes) : buildLesson(course, u, l)
    return raw.map(prepare)
  }, [courseId, u, l, practice]) // eslint-disable-line react-hooks/exhaustive-deps

  const [queue, setQueue] = useState(initial)
  const [idx, setIdx] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [status, setStatus] = useState('idle')
  const [msg, setMsg] = useState('')
  const [combo, setCombo] = useState(0)
  const [maxCombo, setMaxCombo] = useState(0)
  const [mistakes, setMistakes] = useState([])
  const [cleared, setCleared] = useState([])
  const [retried, setRetried] = useState(() => new Set())
  const [quit, setQuit] = useState(false)
  const [outOfHearts, setOutOfHearts] = useState(false)
  const [result, setResult] = useState(null)
  const [shake, setShake] = useState(false)
  const startedAt = useRef(Date.now())

  const ex = queue[idx]
  const total = initial.length
  const unlimited = hasUnlimitedHearts(s)

  const fail = useCallback((skipped) => {
    sfx.wrong()
    setStatus('bad')
    setMsg(skipped ? 'Salteada, la vemos de nuevo al final' : pickOne(OOPS))
    setShake(true); setTimeout(() => setShake(false), 350)
    setCombo(0)
    const { tiles, order, left, right, ...plain } = ex // eslint-disable-line no-unused-vars
    setMistakes((m) => (m.some((x) => x.id === ex.id) ? m : [...m, plain]))
    if (!retried.has(ex.id)) {
      setQueue((q) => [...q, prepare(plain)])
      setRetried((r) => new Set(r).add(ex.id))
    }
    if (!practice && !skipped) {
      loseHeart()
      if (getState().hearts <= 0 && !hasUnlimitedHearts()) setTimeout(() => setOutOfHearts(true), 600)
    }
  }, [ex, retried, practice])

  const check = useCallback(() => {
    if (status !== 'idle' || !ex || !canCheck(ex, answer)) return
    if (isCorrect(ex, answer)) {
      sfx.correct()
      setStatus('ok')
      setMsg(pickOne(PRAISE))
      const nc = combo + 1
      setCombo(nc)
      setMaxCombo((m) => Math.max(m, nc))
      if (practice) setCleared((c) => [...c, ex.id])
      const say = ex.speakAnswer || (ex.listen && ex.listen)
      if (say && ex.lang) speak(say, ex.lang)
    } else {
      fail(false)
    }
  }, [status, ex, answer, combo, practice, fail])

  const finish = useCallback(() => {
    const perfect = mistakes.length === 0
    const xp = practice ? 8 : 10 + (perfect ? 5 : 0) + Math.floor(maxCombo / 5) * 2
    const res = completeLesson({
      courseId, lessonKey: practice ? null : lessonKey(u, l), xp, perfect, maxCombo,
      mistakes, cleared, practice,
    })
    sfx.finish()
    setResult({ xp, perfect, time: Date.now() - startedAt.current, accuracy: Math.round((total / (total + mistakes.length)) * 100), ...res })
  }, [mistakes, practice, maxCombo, courseId, u, l, cleared, total])

  const next = useCallback(() => {
    if (status === 'idle') return
    if (idx + 1 >= queue.length) { finish(); return }
    setIdx((i) => i + 1)
    setAnswer(null)
    setStatus('idle')
  }, [status, idx, queue.length, finish])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Enter' || quit || outOfHearts || result) return
      if (e.target.tagName === 'TEXTAREA' && status === 'idle') return
      e.preventDefault()
      status === 'idle' ? check() : next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [status, check, next, quit, outOfHearts, result])

  if (!initial.length) {
    return (
      <div className="result">
        <Aki pose="mascot" className="hero" />
        <h1>¡Nada para repasar todavía!</h1>
        <p className="muted" style={{ fontWeight: 700 }}>Hacé algunas lecciones y después volvé a practicar.</p>
        <button className="btn" onClick={() => go('aprender')}>Volver</button>
      </div>
    )
  }

  if (result) return <Result result={result} practice={practice} />

  return (
    <div className="lesson">
      <div className="lesson-top">
        <button className="x" onClick={() => setQuit(true)} aria-label="Salir">✕</button>
        <Bar value={idx + (status === 'idle' ? 0 : 1)} max={queue.length} />
        {combo >= 3 && <span className="combo" key={combo}>🔥 {combo} seguidas</span>}
        <span className="stat heart" style={{ padding: 0 }}><span className="em">❤️</span>{practice || unlimited ? '∞' : s.hearts}</span>
      </div>

      <div className={`lesson-body ${shake ? 'shake' : ''}`}>
        {practice && idx === 0 && status === 'idle' && <div className="ex-tag" style={{ marginBottom: 8 }}>🏋️ Práctica · No perdés vidas y ganás una al terminar</div>}
        {retried.has(ex.id) && idx >= total && <div className="ex-tag" style={{ color: 'var(--oro-2)', marginBottom: 6 }}>🔁 Error anterior</div>}
        <Exercise key={idx} ex={ex} answer={answer} setAnswer={setAnswer} status={status} onSubmit={check} />
      </div>

      <div className={`check-bar ${status === 'ok' ? 'ok' : status === 'bad' ? 'bad' : ''}`}>
        <div className="inner">
          {status === 'idle' ? (
            <>
              <button className="btn white" onClick={() => fail(true)} style={{ visibility: ex.type === 'match' ? 'hidden' : 'visible' }}>Saltear</button>
              <button className="btn" disabled={!canCheck(ex, answer)} onClick={check}>Comprobar</button>
            </>
          ) : (
            <>
              <div className="feedback">
                <div className="badge">{status === 'ok' ? '🧉' : '💔'}{status === 'ok' && <Sparks />}</div>
                <div>
                  <h3>{msg}</h3>
                  {status === 'bad' && ex.type !== 'match' && (
                    <p style={{ whiteSpace: 'pre-wrap', fontFamily: ex.code !== undefined || ex.mono ? 'var(--mono)' : undefined }}>
                      Respuesta correcta: {correctText(ex)}
                    </p>
                  )}
                  {ex.explain && <p>{ex.explain}</p>}
                </div>
              </div>
              <button className={`btn ${status === 'bad' ? 'red' : ''}`} onClick={next}>Continuar</button>
            </>
          )}
        </div>
      </div>

      {quit && (
        <Modal onClose={() => setQuit(false)}>
          <div style={{ textAlign: 'center' }}>
            <Aki pose="sad" h={150} />
            <h2>¿Te vas, che?</h2>
            <p className="muted" style={{ fontWeight: 700 }}>Si salís ahora vas a perder el progreso de esta lección.</p>
            <div style={{ display: 'grid', gap: 10 }}>
              <button className="btn block" onClick={() => setQuit(false)}>Seguir aprendiendo</button>
              <button className="btn ghost block" style={{ color: 'var(--rojo)' }} onClick={() => go('aprender')}>Salir igual</button>
            </div>
          </div>
        </Modal>
      )}

      {outOfHearts && (
        <Modal onClose={() => {}}>
          <div style={{ textAlign: 'center' }}>
            <Aki pose="sad" h={160} />
            <h2>¡Te quedaste sin vidas!</h2>
            <p className="muted" style={{ fontWeight: 700 }}>Se recargan solas con el tiempo, o podés recargarlas ya con medialunas.</p>
            <div style={{ display: 'grid', gap: 10 }}>
              <button className="btn gold block" disabled={s.gems < REFILL_COST}
                onClick={() => { setState({ gems: s.gems - REFILL_COST, hearts: MAX_HEARTS }); sfx.coin(); setOutOfHearts(false) }}>
                Recargar vidas · {REFILL_COST} 🥐
              </button>
              <button className="btn white block" onClick={() => go(`practica/${courseId}`)}>Practicar para ganar vidas</button>
              <button className="btn ghost block" onClick={() => go('aprender')}>Salir</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}

function Result({ result, practice }) {
  const [step, setStep] = useState(result.streakExtended ? 'streak' : 'stats')
  const unlocked = ACHIEVEMENTS.filter((a) => result.unlocked?.includes(a.id))

  if (step === 'streak') {
    return (
      <div className="result">
        <Confetti />
        <Aki pose="streak" className="hero" />
        <div className="big-num" style={{ color: '#f08a00' }}><Count to={result.streak} dur={700} /></div>
        <h1 style={{ color: '#f08a00' }}>{result.streak === 1 ? '¡Arrancó tu racha!' : `¡${result.streak} días de racha!`}</h1>
        <p className="muted" style={{ fontWeight: 700, maxWidth: 420 }}>
          {result.streak === 1 ? 'Volvé mañana para que siga creciendo. AKI te espera con el mate listo 🧉' : 'Estás prendido fuego. ¡No la cortes!'}
        </p>
        <div className="check-bar"><div className="inner" style={{ justifyContent: 'flex-end' }}>
          <button className="btn gold" onClick={() => setStep('stats')}>Continuar</button>
        </div></div>
      </div>
    )
  }

  return (
    <div className="result">
      <Confetti />
      <Aki pose="celebrate" className="hero" />
      <h1>{practice ? '¡Práctica completa!' : result.perfect ? '¡Lección perfecta!' : '¡Lección completa!'}</h1>
      <p className="muted" style={{ fontWeight: 700 }}>{result.perfect ? 'Ni un error. Sos un fenómeno.' : 'Cada día un poquito mejor, che.'}</p>
      <div className="result-stats">
        <div className="rstat"><div className="lab">XP total</div><div className="val">⚡ <Count to={result.xp} /></div></div>
        <div className="rstat cel" style={{ animationDelay: '0.1s' }}><div className="lab">Precisión</div><div className="val">🎯 <Count to={result.accuracy} suffix="%" /></div></div>
        <div className="rstat cel" style={{ animationDelay: '0.2s' }}><div className="lab">Tiempo</div><div className="val">⏱️ {fmtTime(result.time)}</div></div>
        <div className="rstat" style={{ animationDelay: '0.3s' }}><div className="lab">Medialunas</div><div className="val">🥐 +<Count to={result.perfect ? 10 : 5} /></div></div>
      </div>
      {unlocked.length > 0 && (
        <div className="card" style={{ borderColor: 'var(--oro)', background: 'var(--oro-soft)' }}>
          <h3>🏅 ¡Logro desbloqueado!</h3>
          {unlocked.map((a) => <div key={a.id} style={{ fontWeight: 800 }}>{a.icon} {a.title} <span className="muted">· +50 🥐</span></div>)}
        </div>
      )}
      <div className="check-bar"><div className="inner" style={{ justifyContent: 'flex-end' }}>
        <button className="btn gold" onClick={() => go('aprender')}>Continuar</button>
      </div></div>
    </div>
  )
}
