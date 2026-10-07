import { Component, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

// Transparent cutouts built from the renders by scripts/cutout.py.
export const IMG = {
  mascot: '/img/aki-mascot.webp',
  celebrate: '/img/aki-celebrate.webp',
  code: '/img/aki-code.webp',
  sad: '/img/aki-sad.webp',
  languages: '/img/aki-languages.webp',
  streak: '/img/aki-streak.webp',
  wave: '/img/aki-mascot.webp',
  think: '/img/aki-code.webp',
  mate: '/img/aki-streak.webp',
  shop: '/img/aki-shop.jpg',
  cheer: '/img/aki-celebrate.webp',
  teach: '/img/aki-teach.jpg',
  hero: '/img/aki-hero.jpg',
  oops: '/img/aki-oops.jpg',
  victory: '/img/aki-victory.jpg',
  flag: '/img/aki-flag.jpg',
  power: '/img/aki-power.jpg',
  patio: '/img/aki-patio.jpg',
  avatar: '/img/aki-mascot.webp',
  icon: '/img/aki-icon.jpg',
}

const FALLBACK = IMG.mascot

export function Aki({ pose = 'mascot', className = '', h, style, alt = 'AKI, el robot que toma mate', idle = true }) {
  const size = { height: h || 120, width: 'auto', maxHeight: h || 120, objectFit: 'contain', ...style }
  return (
    <img
      src={IMG[pose] || FALLBACK}
      alt={alt}
      className={`mascot ${idle ? 'aki-idle' : ''} ${className}`}
      style={size}
      draggable={false}
    />
  )
}

// Windows doesn't render flag emojis, so language courses use flag images instead.
export function CourseIcon({ course, size = 32 }) {
  if (course.flag) {
    return <img src={`https://flagcdn.com/${course.flag}.svg`} alt={course.title} width={size * 1.3} height={size}
      style={{ width: size * 1.3, height: size, objectFit: 'cover', borderRadius: 6, border: '2px solid var(--gris)', display: 'inline-block', verticalAlign: 'middle' }} />
  }
  return <span style={{ fontSize: size, lineHeight: 1 }}>{course.icon}</span>
}

export function Modal({ children, onClose }) {
  return createPortal(
    <div className="overlay" onClick={onClose} role="presentation">
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog">
        {children}
      </div>
    </div>,
    document.body,
  )
}

export function Code({ children }) {
  const parts = String(children).split('___')
  return (
    <pre className="code">
      {parts.map((p, i) => (
        <span key={i}>{p}{i < parts.length - 1 && <span className="blank">___</span>}</span>
      ))}
    </pre>
  )
}

export function Bar({ value, max = 100, cel = false, style }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return <div className={`bar ${cel ? 'cel' : ''}`} style={style}><i style={{ width: `${pct}%` }} /></div>
}

export function Count({ to, dur = 900, suffix = '' }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    let raf
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur)
      setN(Math.round(to * (1 - (1 - p) ** 3)))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, dur])
  return <>{n}{suffix}</>
}

export function Ring({ value, max = 100, size = 74, label, sub }) {
  const pct = Math.max(0, Math.min(1, value / max))
  const r = size / 2 - 6
  const circ = 2 * Math.PI * r
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} className="ring-bg" strokeWidth="8" fill="none" />
        <circle cx={size / 2} cy={size / 2} r={r} className="ring-fg" strokeWidth="8" fill="none"
          strokeDasharray={circ} strokeDashoffset={circ * (1 - pct)} strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      </svg>
      <div className="ring-txt"><b>{label}</b>{sub && <span>{sub}</span>}</div>
    </div>
  )
}

export function Sparks({ count = 10 }) {
  const bits = useMemo(() => Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2
    const d = 34 + Math.random() * 22
    return { dx: `${Math.cos(a) * d}px`, dy: `${Math.sin(a) * d}px`, delay: Math.random() * 0.08 }
  }), [count])
  return (
    <span className="sparks">
      {bits.map((b, i) => <i key={i} style={{ '--dx': b.dx, '--dy': b.dy, animationDelay: `${b.delay}s` }} />)}
    </span>
  )
}

export function Confetti({ count = 80 }) {
  const pieces = useMemo(() => Array.from({ length: count }, (_, i) => ({
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    dur: 2.2 + Math.random() * 1.8,
    color: ['#74ACDF', '#F6B40E', '#ffffff', '#5B9BD5', '#FFD45C'][i % 5],
    rot: Math.random() * 360,
  })), [count])
  return (
    <div className="confetti">
      {pieces.map((p, i) => (
        <i key={i} style={{ left: `${p.left}%`, background: p.color, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`, transform: `rotate(${p.rot}deg)`, border: p.color === '#ffffff' ? '1px solid #dbe6f2' : 'none' }} />
      ))}
    </div>
  )
}

export class Boundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (!this.state.error) return this.props.children
    return (
      <div className="result">
        <Aki pose="sad" className="hero" />
        <h1 style={{ color: 'var(--celeste-3)' }}>Uh, algo se rompió</h1>
        <p className="muted" style={{ fontWeight: 700, maxWidth: 440 }}>
          AKI se mandó un moco. Tu progreso está guardado, así que podés volver tranquilo.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <button className="btn" onClick={() => { window.location.hash = '#/aprender'; window.location.reload() }}>Volver al inicio</button>
          <button className="btn white" onClick={() => window.location.reload()}>Recargar</button>
        </div>
        <details className="small muted" style={{ marginTop: 18, maxWidth: 520 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 700 }}>Detalle técnico</summary>
          <pre style={{ textAlign: 'left', whiteSpace: 'pre-wrap', fontSize: 12 }}>{String(this.state.error?.stack || this.state.error)}</pre>
        </details>
      </div>
    )
  }
}

export const fmtTime = (ms) => {
  const m = Math.floor(ms / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${m}:${String(s).padStart(2, '0')}`
}
