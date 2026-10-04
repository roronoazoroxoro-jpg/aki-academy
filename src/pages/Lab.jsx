import { useEffect, useRef, useState } from 'react'
import { useStore, setState, addXp, checkAchievements } from '../store'
import { Aki, Modal, Confetti } from '../components/ui'
import { PY_EXAMPLES, PY_CHALLENGES, WEB_TEMPLATES, JS_EXAMPLE } from '../data/lab'
import { sfx } from '../fx'

const PYODIDE_URL = 'https://cdn.jsdelivr.net/pyodide/v0.27.2/full/'
let pyPromise
function loadPython() {
  if (!pyPromise) {
    pyPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = `${PYODIDE_URL}pyodide.js`
      s.onload = async () => {
        try { resolve(await window.loadPyodide({ indexURL: PYODIDE_URL })) } catch (e) { reject(e) }
      }
      s.onerror = () => { pyPromise = null; reject(new Error('No se pudo descargar Python. Revisá tu conexión.')) }
      document.head.appendChild(s)
    })
  }
  return pyPromise
}

async function runPython(code, test) {
  const py = await loadPython()
  const out = []
  py.setStdout({ batched: (t) => out.push({ t }) })
  py.setStderr({ batched: (t) => out.push({ t, err: true }) })
  py.setStdin({ stdin: () => window.prompt('Tu programa te pide un dato (input):') ?? '' })
  const ns = py.globals.get('dict')()
  let ok = true
  try {
    await py.runPythonAsync(code, { globals: ns })
    if (test) await py.runPythonAsync(test, { globals: ns })
  } catch (e) {
    ok = false
    const lines = String(e.message).trim().split('\n')
    const start = lines.findIndex((l) => l.includes('File "<exec>"'))
    out.push({ t: (start >= 0 ? lines.slice(start) : lines.slice(-3)).join('\n'), err: true })
  } finally {
    ns.destroy()
  }
  return { out, ok }
}

function Editor({ value, onChange, onRun, small }) {
  const onKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const el = e.target
      const { selectionStart: a, selectionEnd: b } = el
      const next = value.slice(0, a) + '    ' + value.slice(b)
      onChange(next)
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = a + 4 })
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey) && onRun) { e.preventDefault(); onRun() }
  }
  return <textarea className={`editor ${small ? 'sm' : ''}`} value={value} spellCheck={false} onChange={(e) => onChange(e.target.value)} onKeyDown={onKeyDown} />
}

function Console({ lines, placeholder }) {
  return (
    <pre className="console">
      {lines.length === 0 && <span style={{ opacity: 0.5 }}>{placeholder}</span>}
      {lines.map((l, i) => <div key={i} className={l.err ? 'err' : ''}>{l.t}</div>)}
    </pre>
  )
}

/* ---------- Python ---------- */
function PythonTab() {
  const [code, setCode] = useState(PY_EXAMPLES[0].code)
  const [out, setOut] = useState([])
  const [busy, setBusy] = useState(false)
  const run = async () => {
    setBusy(true)
    setOut([{ t: pyPromise ? '▶ Ejecutando…' : '⏳ Cargando Python por primera vez (unos segundos)…' }])
    try {
      const r = await runPython(code)
      setOut(r.out.length ? r.out : [{ t: '(el programa no mostró nada — usá print())' }])
      setState((s) => ({ labRuns: s.labRuns + 1 }))
      checkAchievements()
    } catch (e) {
      setOut([{ t: e.message, err: true }])
    }
    setBusy(false)
  }
  return (
    <>
      <div className="lab-toolbar">
        {PY_EXAMPLES.map((ex) => <button key={ex.name} className="btn white sm" onClick={() => { setCode(ex.code); setOut([]) }}>{ex.name}</button>)}
      </div>
      <div className="lab-grid">
        <div>
          <div className="ed-label">main.py</div>
          <Editor value={code} onChange={setCode} onRun={run} />
          <div className="lab-toolbar">
            <button className="btn gold" onClick={run} disabled={busy}>{busy ? 'Ejecutando…' : '▶ Ejecutar'}</button>
            <span className="small muted" style={{ fontWeight: 700 }}>Ctrl + Enter · Python 3.12 real en tu navegador</span>
          </div>
        </div>
        <div>
          <div className="ed-label">Salida</div>
          <Console lines={out} placeholder="Acá aparece lo que imprima tu programa." />
        </div>
      </div>
    </>
  )
}

/* ---------- Challenges ---------- */
function ChallengesTab() {
  const s = useStore()
  const [sel, setSel] = useState(PY_CHALLENGES[0])
  const [codes, setCodes] = useState({})
  const [out, setOut] = useState([])
  const [busy, setBusy] = useState(false)
  const [won, setWon] = useState(false)
  const code = codes[sel.id] ?? sel.starter

  const run = async (withTests) => {
    setBusy(true)
    setOut([{ t: pyPromise ? '▶ Ejecutando…' : '⏳ Cargando Python por primera vez…' }])
    try {
      const r = await runPython(code, withTests ? sel.test : null)
      const lines = [...r.out]
      setState((st) => ({ labRuns: st.labRuns + 1 }))
      if (withTests) {
        if (r.ok) {
          lines.push({ t: '✅ ¡Todas las pruebas pasaron! Sos un crack.' })
          sfx.finish()
          if (!s.labSolved.includes(sel.id)) {
            setState((st) => ({ labSolved: [...st.labSolved, sel.id] }))
            addXp(15, 30)
            setWon(true)
          }
        } else {
          lines.push({ t: '❌ Alguna prueba falló. Revisá el error y probá de nuevo.', err: true })
          sfx.wrong()
        }
      }
      setOut(lines)
      checkAchievements()
    } catch (e) {
      setOut([{ t: e.message, err: true }])
    }
    setBusy(false)
  }

  return (
    <div className="lab-grid" style={{ gridTemplateColumns: 'minmax(220px, 300px) 1fr' }}>
      <div style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
        {PY_CHALLENGES.map((c) => (
          <button key={c.id} className={`challenge ${sel.id === c.id ? 'sel' : ''} ${s.labSolved.includes(c.id) ? 'solved' : ''}`}
            onClick={() => { setSel(c); setOut([]) }}>
            <span style={{ fontSize: 22 }}>{s.labSolved.includes(c.id) ? '⭐' : '🧩'}</span>
            <span><div>{c.title}</div><div className="small muted">{c.level}</div></span>
          </button>
        ))}
      </div>
      <div>
        <div className="card" style={{ marginBottom: 12 }}>
          <h3>{sel.title} <span className="small muted">· {sel.level} · +15 XP +30 🥐</span></h3>
          <p style={{ margin: 0, fontWeight: 600 }}>{sel.desc}</p>
        </div>
        <Editor value={code} onChange={(v) => setCodes({ ...codes, [sel.id]: v })} onRun={() => run(true)} small />
        <div className="lab-toolbar">
          <button className="btn white" onClick={() => run(false)} disabled={busy}>▶ Probar</button>
          <button className="btn gold" onClick={() => run(true)} disabled={busy}>✔ Entregar</button>
          <button className="btn ghost sm" onClick={() => setCodes({ ...codes, [sel.id]: sel.starter })}>Reiniciar</button>
        </div>
        <Console lines={out} placeholder="Probá tu código o entregalo para que AKI lo corrija." />
      </div>
      {won && (
        <Modal onClose={() => setWon(false)}>
          <Confetti />
          <div style={{ textAlign: 'center' }}>
            <Aki pose="celebrate" h={170} />
            <h2>¡Desafío resuelto!</h2>
            <p style={{ fontSize: 22, fontWeight: 900, color: 'var(--oro-2)' }}>+15 XP · +30 🥐</p>
            <button className="btn gold block" onClick={() => setWon(false)}>¡Vamos!</button>
          </div>
        </Modal>
      )}
    </div>
  )
}

/* ---------- Web ---------- */
function WebTab() {
  const [tpl, setTpl] = useState(WEB_TEMPLATES[0])
  const [html, setHtml] = useState(tpl.html)
  const [css, setCss] = useState(tpl.css)
  const [js, setJs] = useState(tpl.js)
  const [doc, setDoc] = useState('')
  useEffect(() => {
    const t = setTimeout(() => {
      setDoc(`<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${html}<script>${js.replace(/<\/script/gi, '<\\/script')}<\/script></body></html>`)
    }, 350)
    return () => clearTimeout(t)
  }, [html, css, js])
  const load = (t) => { setTpl(t); setHtml(t.html); setCss(t.css); setJs(t.js); setState((s) => ({ labRuns: s.labRuns + 1 })); checkAchievements() }
  const download = () => {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([doc], { type: 'text/html' }))
    a.download = 'mi-web.html'
    a.click()
  }
  return (
    <>
      <div className="lab-toolbar">
        {WEB_TEMPLATES.map((t) => <button key={t.name} className={`btn sm ${tpl.name === t.name ? '' : 'white'}`} onClick={() => load(t)}>{t.name}</button>)}
        <button className="btn gold sm" onClick={download}>⬇ Descargar mi web</button>
      </div>
      <div className="lab-grid">
        <div>
          <div className="ed-label">HTML</div><Editor value={html} onChange={setHtml} small />
          <div className="ed-label">CSS</div><Editor value={css} onChange={setCss} small />
          <div className="ed-label">JavaScript</div><Editor value={js} onChange={setJs} small />
        </div>
        <div>
          <div className="ed-label">Vista previa en vivo</div>
          <iframe className="preview" title="Vista previa" sandbox="allow-scripts allow-modals" srcDoc={doc} style={{ height: 'calc(100% - 30px)' }} />
        </div>
      </div>
    </>
  )
}

/* ---------- JavaScript ---------- */
const JS_SANDBOX = `<script>
const fmt = (a) => a.map((x) => { if (typeof x === 'string') return x; try { return JSON.stringify(x) } catch { return String(x) } }).join(' ');
const send = (t, a) => parent.postMessage({ aki: 1, t, msg: fmt(a) }, '*');
console.log = (...a) => send('log', a); console.info = console.log; console.warn = console.log;
console.error = (...a) => send('err', a);
window.onerror = (m) => { send('err', [m]); };
window.addEventListener('message', async (e) => {
  try { await (0, eval)('(async () => {' + e.data + '\\n})()'); } catch (err) { send('err', [err.name + ': ' + err.message]); }
  send('done', []);
});
<\/script>`

function JsTab() {
  const [code, setCode] = useState(JS_EXAMPLE)
  const [out, setOut] = useState([])
  const frame = useRef(null)
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data?.aki || e.source !== frame.current?.contentWindow) return
      if (e.data.t === 'done') return
      setOut((o) => [...o, { t: e.data.msg, err: e.data.t === 'err' }])
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])
  const run = () => {
    setOut([])
    frame.current?.remove()
    const f = document.createElement('iframe')
    f.sandbox = 'allow-scripts'
    f.style.display = 'none'
    f.srcdoc = JS_SANDBOX
    f.onload = () => f.contentWindow.postMessage(code, '*')
    document.body.appendChild(f)
    frame.current = f
    setState((s) => ({ labRuns: s.labRuns + 1 }))
    checkAchievements()
  }
  useEffect(() => () => frame.current?.remove(), [])
  return (
    <div className="lab-grid">
      <div>
        <div className="ed-label">script.js</div>
        <Editor value={code} onChange={setCode} onRun={run} />
        <div className="lab-toolbar">
          <button className="btn gold" onClick={run}>▶ Ejecutar</button>
          <span className="small muted" style={{ fontWeight: 700 }}>Ctrl + Enter · soporta await</span>
        </div>
      </div>
      <div>
        <div className="ed-label">Consola</div>
        <Console lines={out} placeholder="Usá console.log() para ver resultados acá." />
      </div>
    </div>
  )
}

const TABS = [
  { id: 'py', label: '🐍 Python', C: PythonTab },
  { id: 'ch', label: '🧩 Desafíos', C: ChallengesTab },
  { id: 'web', label: '🌐 Web en vivo', C: WebTab },
  { id: 'js', label: '⚡ JavaScript', C: JsTab },
]

export default function Lab() {
  const [tab, setTab] = useState('py')
  const T = TABS.find((t) => t.id === tab).C
  return (
    <>
      <div className="page-head">
        <Aki pose="code" />
        <div>
          <h1>Laboratorio</h1>
          <p>Programá de verdad: Python real, desafíos con corrección automática y webs en vivo. Sin instalar nada.</p>
        </div>
      </div>
      <div className="lab-tabs">
        {TABS.map((t) => <button key={t.id} className={`btn sm ${tab === t.id ? '' : 'white'}`} onClick={() => setTab(t.id)}>{t.label}</button>)}
      </div>
      <T />
    </>
  )
}
