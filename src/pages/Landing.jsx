import { useEffect, useRef } from 'react'
import { go } from '../router'
import { Aki, CourseIcon } from '../components/ui'
import { COURSES, GROUPS, LESSONS_PER_UNIT } from '../data/courses'
import { useStore, toggleTheme } from '../store'
import { Patio } from '../components/Decor'

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
  { pose: 'languages', title: '25 idiomas, con audio y su bandera', text: 'Desde inglés y japonés hasta hebreo, tailandés, ucraniano y quechua. Escuchá la pronunciación, armá frases y escribí en su propio alfabeto. También el español argentino: vos, che y lunfardo.' },
  { pose: 'streak', title: 'Ciencia, números e historia del país', text: 'Matemáticas, física, química, biología, astronomía, economía y la historia argentina. Explicado como te hubiera gustado que te lo cuenten en la escuela.' },
  { pose: 'streak', title: 'Mantené la racha, che', text: 'Sumá XP, cuidá tus vidas, ganá medialunas, abrí cofres, cumplí misiones diarias y subí de liga: del Potrero hasta Campeón del Mundo. Cinco minutos por día alcanzan.' },
  { card: '/img/cards/card-futbol.jpg', title: 'Mazo de cartas AKI', text: 'Cada lección te da figus. Canjealas por figuritas de AKI vestido de futbolista, chef, soldado, skater, astronauta, gaucho y más. Armá tu álbum de 20.' },
]

export default function Landing() {
  const onboarded = useStore((s) => s.onboarded)
  const dark = useStore((s) => s.theme === 'dark')
  const ref = useReveal()
  const cta = onboarded ? 'Seguir aprendiendo' : 'Empezar gratis'
  const start = () => go(onboarded ? 'aprender' : 'empezar')
  const lessons = COURSES.reduce((n, c) => n + c.units.length * LESSONS_PER_UNIT, 0)

  return (
    <div className="landing" ref={ref}>
      <Patio />
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
          <Aki pose="wave" className="floaty" />
          <span className="chip c1">🔥 Racha</span>
          <span className="chip c2">⚡ +10 XP</span>
          <span className="chip c3">🥐 Medialunas</span>
          <span className="chip c2" style={{ top: '72%', right: '8%', animationDelay: '-3s' }}>🧉 Mate listo</span>
        </div>
        <div>
          <span className="badge-pill"><img src="https://flagcdn.com/ar.svg" alt="" /> Hecho en Argentina · 100% gratis</span>
          <h1>Aprendé a <em>programar</em>, <em>idiomas</em> y <em>ciencia</em>. <strong>A la argentina.</strong></h1>
          <p>Caminos largos, un robot con gorra y mate, y lecciones que se sienten vivas. Hecho en un patio criollo, no en una fábrica de apps genéricas.</p>
          <div className="cta">
            <button className="btn gold block pulse" onClick={start}>{cta}</button>
          </div>
          <div className="hero-stats">
            <div><b>{COURSES.length}</b><span>cursos</span></div>
            <div><b>{GROUPS.find((g) => g.id === 'lang').courses.length}</b><span>idiomas</span></div>
            <div><b>+{Math.round(lessons / 100) * 100}</b><span>lecciones</span></div>
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
          {f.card
            ? <img src={f.card} alt="" className="deck-feature-card" />
            : <Aki pose={f.pose} className="floaty" />}
        </section>
      ))}

      <section className="aki-gallery on-scroll">
        <h2>AKI, en todas sus caras</h2>
        <p>No es un búho verde. Es un robot con gorra celeste, Sol de Mayo y mate. Te espera en cada lección.</p>
        <div className="aki-strip">
          {['mascot', 'celebrate', 'code', 'sad', 'languages', 'streak'].map((p) => (
            <Aki key={p} pose={p} h={132} />
          ))}
        </div>
        <div className="aki-stage">
          {[['hero', 'Campeón'], ['victory', 'Golazo'], ['flag', 'Argentina'], ['power', 'A full'], ['patio', 'El mate'], ['teach', 'Profe']].map(([p, label]) => (
            <div className="aki-card" key={p}>
              <Aki pose={p} h={168} idle={false} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

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
