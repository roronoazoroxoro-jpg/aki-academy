import { useEffect, useRef, useState } from 'react'
import { Aki, Code } from './ui'
import { shuffle } from '../data/courses'
import { speak, canSpeak, sfx } from '../fx'

/* ---------- preparation & checking ---------- */
export function prepare(ex) {
  if (ex.type === 'choice') return { ...ex, order: shuffle(ex.options.map((_, i) => i)) }
  if (ex.type === 'build') {
    const tiles = shuffle([...ex.answer, ...(ex.extra || [])].map((text, id) => ({ id, text })))
    return { ...ex, tiles }
  }
  if (ex.type === 'order') {
    let tiles = shuffle(ex.lines.map((text, id) => ({ id, text })))
    if (tiles.every((t, i) => t.id === i)) tiles = [...tiles.slice(1), tiles[0]]
    return { ...ex, tiles }
  }
  if (ex.type === 'match') {
    const left = shuffle(ex.pairs.map((p, i) => ({ id: i, text: p[0] })))
    const right = shuffle(ex.pairs.map((p, i) => ({ id: i, text: p[1] })))
    return { ...ex, left, right }
  }
  return ex
}

const strip = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const norm = (s) => String(s).toLowerCase().replace(/[¿?¡!.,。、]/g, '').replace(/\s+/g, ' ').trim()
const squash = (s) => String(s).replace(/\s+/g, '').toLowerCase()

export function isCorrect(ex, answer) {
  if (answer == null) return false
  switch (ex.type) {
    case 'choice': return answer === ex.answer
    case 'build': {
      const got = answer.map((id) => ex.tiles.find((t) => t.id === id).text)
      if (ex.mono) return squash(got.join('')) === squash(ex.answer.join(''))
      return norm(got.join(' ')) === norm(ex.answer.join(' '))
    }
    case 'order': return answer.length === ex.lines.length && answer.every((id, i) => ex.tiles.find((t) => t.id === id).text === ex.lines[i])
    case 'type': {
      const a = norm(answer)
      return ex.answers.some((x) => {
        const n = norm(x)
        return a === n || strip(a) === strip(n) || (ex.code !== undefined && squash(a) === squash(n))
      })
    }
    case 'match': return answer === true
    default: return false
  }
}

export function correctText(ex) {
  switch (ex.type) {
    case 'choice': return ex.options[ex.answer]
    case 'build': return ex.answer.join(' ')
    case 'order': return ex.lines.join('\n')
    case 'type': return ex.answers[0]
    default: return ''
  }
}

export function canCheck(ex, answer) {
  if (ex.type === 'choice') return answer != null
  if (ex.type === 'build' || ex.type === 'order') return answer?.length > 0
  if (ex.type === 'type') return !!answer?.trim()
  if (ex.type === 'match') return answer === true
  return false
}

/* ---------- shared pieces ---------- */
function SpeakBtn({ text, lang, slow }) {
  if (!canSpeak() || !text) return null
  return <button className="speak-btn" onClick={() => speak(text, lang, slow ? 0.6 : 0.95)} title="Escuchar">{slow ? '🐢' : '🔊'}</button>
}

function Prompt({ ex }) {
  const pose = ex.courseId && ex.lang ? 'languages' : 'code'
  return (
    <>
      <div className="ex-tag">{labelFor(ex)}</div>
      <h1 className="ex-title">{ex.prompt}</h1>
      {ex.listen && <Listen text={ex.listen} lang={ex.lang} />}
      {ex.sentence && (
        <div className="speech">
          <Aki pose={pose} />
          <div className="bubble">
            {ex.speak && <SpeakBtn text={ex.speak} lang={ex.lang} />}
            {ex.sentence}
            {ex.sentenceHint && <span className="hint">{ex.sentenceHint}</span>}
          </div>
        </div>
      )}
      {ex.code !== undefined && ex.code && <Code>{ex.code}</Code>}
    </>
  )
}

function labelFor(ex) {
  if (ex.listen) return '🎧 Escuchá'
  if (ex.type === 'build') return ex.mono ? '🧩 Armá el código' : '🧩 Traducí'
  if (ex.type === 'order') return '📋 Ordená las líneas'
  if (ex.type === 'match') return '🔗 Uní los pares'
  if (ex.type === 'type') return '⌨️ Escribí'
  return ex.code ? '💻 Leé el código' : '❓ Elegí la respuesta'
}

function Listen({ text, lang }) {
  const [show, setShow] = useState(false)
  useEffect(() => { const t = setTimeout(() => speak(text, lang), 350); return () => clearTimeout(t) }, [text, lang])
  return (
    <>
      <div className="listen-big">
        <button onClick={() => speak(text, lang)} title="Escuchar">🔊</button>
        <button className="slow" onClick={() => speak(text, lang, 0.55)} title="Escuchar lento">🐢</button>
      </div>
      {(!canSpeak() || show) ? (
        <p className="muted" style={{ textAlign: 'center', fontWeight: 700 }}>“{text}”</p>
      ) : (
        <p style={{ textAlign: 'center' }}><button className="btn ghost sm" onClick={() => setShow(true)}>¿No podés escuchar ahora? Ver frase</button></p>
      )}
    </>
  )
}

/* ---------- exercise types ---------- */
function Choice({ ex, answer, setAnswer, status }) {
  useEffect(() => {
    const onKey = (e) => {
      if (status !== 'idle') return
      const n = Number(e.key)
      if (n >= 1 && n <= ex.order.length) { setAnswer(ex.order[n - 1]); sfx.tap() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [ex, status, setAnswer])

  const mono = !!ex.code || ex.options.some((o) => /[(){}<>=;_]/.test(o))
  const short = ex.options.every((o) => o.length <= 14)
  return (
    <div className={`options ${short ? 'grid2' : ''}`}>
      {ex.order.map((idx, i) => {
        const cls = status === 'idle'
          ? (answer === idx ? 'sel' : '')
          : idx === ex.answer ? 'ok' : answer === idx ? 'bad' : 'dim'
        return (
          <button key={idx} className={`option ${cls} ${mono ? 'mono' : ''}`} disabled={status !== 'idle'}
            onClick={() => { setAnswer(idx); sfx.tap(); if (ex.speakOptions && ex.lang) speak(ex.options[idx], ex.lang) }}>
            <span className="k">{i + 1}</span>
            <span>{ex.options[idx]}{ex.hints?.[idx] && <span className="sub">{ex.hints[idx]}</span>}</span>
          </button>
        )
      })}
    </div>
  )
}

function Build({ ex, answer, setAnswer, status, lines = false }) {
  const picked = answer || []
  const used = new Set(picked)
  const add = (id) => { if (status === 'idle') { setAnswer([...picked, id]); sfx.tap() } }
  const remove = (id) => { if (status === 'idle') setAnswer(picked.filter((x) => x !== id)) }
  const byId = (id) => ex.tiles.find((t) => t.id === id)
  const tileCls = `tile ${lines ? 'line' : ''} ${ex.mono && !lines ? 'mono' : ''}`
  return (
    <>
      <div className={`answer-line ${lines ? 'lines' : ''}`}>
        {picked.map((id) => <button key={id} className={tileCls} onClick={() => remove(id)}>{byId(id).text}</button>)}
      </div>
      <div className={`bank ${lines ? 'lines' : ''}`}>
        {ex.tiles.map((t) => (
          <button key={t.id} className={`${tileCls} ${used.has(t.id) ? 'used' : ''}`} onClick={() => add(t.id)}>{t.text}</button>
        ))}
      </div>
      {ex.answerHint && status !== 'idle' && <p className="muted small" style={{ textAlign: 'center', fontWeight: 700 }}>{ex.answerHint}</p>}
    </>
  )
}

function Match({ ex, setAnswer, status }) {
  const [selL, setSelL] = useState(null)
  const [selR, setSelR] = useState(null)
  const [matched, setMatched] = useState([])
  const [wrong, setWrong] = useState(null)

  useEffect(() => {
    if (selL == null || selR == null) return
    if (selL === selR) {
      sfx.correct()
      const next = [...matched, selL]
      setMatched(next)
      if (next.length === ex.pairs.length) setAnswer(true)
    } else {
      sfx.wrong()
      setWrong([selL, selR])
      setTimeout(() => setWrong(null), 450)
    }
    setSelL(null); setSelR(null)
  }, [selL, selR]) // eslint-disable-line react-hooks/exhaustive-deps

  const cls = (side, id) => {
    if (matched.includes(id)) return 'option ok dim'
    if (wrong && ((side === 'l' && wrong[0] === id) || (side === 'r' && wrong[1] === id))) return 'option bad shake'
    if ((side === 'l' ? selL : selR) === id) return 'option sel'
    return 'option'
  }
  return (
    <div className="match-grid">
      <div className="col">
        {ex.left.map((t) => (
          <button key={t.id} className={cls('l', t.id)} disabled={matched.includes(t.id) || status !== 'idle'}
            onClick={() => { setSelL(t.id); if (ex.speakLeft && ex.lang) speak(t.text, ex.lang) }}>{t.text}</button>
        ))}
      </div>
      <div className="col">
        {ex.right.map((t) => (
          <button key={t.id} className={cls('r', t.id)} disabled={matched.includes(t.id) || status !== 'idle'}
            onClick={() => setSelR(t.id)}>{t.text}</button>
        ))}
      </div>
    </div>
  )
}

function TypeIn({ ex, answer, setAnswer, status, onSubmit }) {
  const ref = useRef()
  useEffect(() => { ref.current?.focus() }, [ex])
  const mono = ex.code !== undefined
  return (
    <textarea ref={ref} className={`type-input ${mono ? 'mono' : ''}`} value={answer || ''} disabled={status !== 'idle'}
      placeholder={ex.placeholder || (mono ? 'Escribí lo que va en el espacio ___' : 'Escribí tu respuesta')}
      onChange={(e) => setAnswer(e.target.value)} spellCheck={false} autoCapitalize="off" autoComplete="off"
      onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSubmit() } }} />
  )
}

export function Exercise(props) {
  const { ex } = props
  return (
    <div>
      <Prompt ex={ex} />
      {ex.type === 'choice' && <Choice {...props} />}
      {ex.type === 'build' && <Build {...props} />}
      {ex.type === 'order' && <Build {...props} lines />}
      {ex.type === 'match' && <Match {...props} />}
      {ex.type === 'type' && <TypeIn {...props} />}
    </div>
  )
}
