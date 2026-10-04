import { useEffect, useRef } from 'react'
import { go } from '../router'
import { Aki, CourseIcon } from '../components/ui'
import { COURSES, GROUPS } from '../data/courses'
import { useStore, toggleTheme } from '../store'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.on-scroll')
    if (!els?.length) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('shown'); io.unobserve(e.target) } })
    }, { threshold: 0.15 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return ref
}

const FEATURES = [
  { pose: 'code', title: 'Programá de verdad, desde el navegador', text: 'Python, JavaScript, TypeScript, webs, apps con React, SQL, Git, Inteligencia Artificial, ciberseguridad y robótica. Con un Laboratorio donde ejecutás Python real y armás páginas en vivo, sin instalar nada.' },
  { pose: 'languages', title: '14 idiomas, con audio y escritura real', text: 'Inglés, italiano, portugués, francés, alemán, japonés, chino, coreano, ruso, árabe, hindi, griego, latín y quechua. Escuchá la pronunciación, armá frases y escribí en su propio alfabeto.' },
  { pose: 'mascot', title: 'Ciencia y matemáticas que se entienden', text: 'Matemáticas desde las fracciones hasta la probabilidad, física, química y biología. Explicado como te hubiera gustado que te lo expliquen en la escuela.' },
  { pose: 'streak', title: 'Mantené la racha, che', text: 'Sumá XP, cuidá tus vidas, ganá medialunas, abrí cofres, cumplí misiones diarias y subí de liga: del Potrero hasta Campeón del Mundo. Cinco minutos por día alcanzan.' },
]

export default function Landing() {
  const onboarded = useStore((s) => s.onboarded)
  const dark = useStore((s) => s.theme === 'dark')
  const ref = useReveal()
  const cta = onboarded ? 'Seguir aprendiendo' : 'Empezar gratis'
  const start = () => go(onboarded ? 'aprender' : 'empezar')

  return (
    <div className="landing" ref={ref}>
      <div className="aurora"><i /><i /><i /></div>

      <nav className="land-nav">
        <a className="logo" href="#/" style={{ paddingBottom: 0 }}>
          <img src="/img/aki-icon.jpg" alt="AKI" />
          <b>AKI<span>-Academy</span></b>
        </a>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button className="theme-btn" onClick={toggleTheme} title="Cambiar tema">{dark ? '☀️' : '🌙'}</button>
          <button className="btn white sm" onClick={start}>{onboarded ? 'Mis cursos' : 'Empezar'}</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-art">
          <span className="halo" />
          <Aki pose="mascot" className="floaty" />
          <span className="chip c1">🔥 Racha</span>
          <span className="chip c2">⚡ +10 XP</span>
          <span className="chip c3">🥐 Medialunas</span>
        </div>
        <div>
          <span className="badge-pill"><img src="https://flagcdn.com/ar.svg" alt="" /> Hecho en Argentina · 100% gratis</span>
          <h1>Aprendé a <em>programar</em>, <em>idiomas</em> y <em>ciencia</em>. <strong>A la argentina.</strong></h1>
          <p>Lecciones cortitas, rachas, ligas y un robot que toma mate y te acompaña desde cero hasta nivel avanzado.</p>
          <div className="cta">
            <button className="btn gold block pulse" onClick={start}>{cta}</button>
          </div>
          <div className="hero-stats">
            <div><b>{COURSES.length}</b><span>cursos</span></div>
            <div><b>14</b><span>idiomas</span></div>
            <div><b>+1.500</b><span>ejercicios</span></div>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="marquee">
          <div className="marquee-track">
            {[...COURSES, ...COURSES].map((c, i) => (
              <span key={i}><CourseIcon course={c} size={20} /> {c.title}</span>
            ))}
          </div>
        </div>
      </div>

      {FEATURES.map((f, i) => (
        <section key={f.title} className={`feature on-scroll ${i % 2 ? 'rev' : ''}`}>
          <div>
            <h2>{f.title}</h2>
            <p>{f.text}</p>
            <button className="btn white sm" onClick={start}>Probar ahora</button>
          </div>
          <Aki pose={f.pose} className="floaty" />
        </section>
      ))}

      <section className="catalog on-scroll">
        <h2>Todo lo que podés aprender</h2>
        {GROUPS.map((g) => (
          <div key={g.id} className="cat-group">
            <h3>{g.icon} {g.title}</h3>
            <div className="cat-chips">
              {g.courses.map((c) => (
                <button key={c.id} className="cat-chip" onClick={start}>
                  <CourseIcon course={c} size={22} /> {c.title}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="final-cta on-scroll">
        <Aki pose="celebrate" h={190} />
        <h2>¿Arrancamos? El mate ya está listo 🧉</h2>
        <button className="btn gold" onClick={start}>{cta}</button>
      </section>

      <footer className="footer">
        <div className="flag-strip" style={{ maxWidth: 220, margin: '0 auto 14px' }} />
        AKI-Academy · Hecho con 💙🤍💙 en Argentina · 2026
      </footer>
    </div>
  )
}
