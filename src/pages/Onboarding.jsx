import { useState } from 'react'
import { setState, useStore } from '../store'
import { GROUPS } from '../data/courses'
import { go } from '../router'
import { Aki, Bar, CourseIcon } from '../components/ui'

const GOALS = [
  { xp: 10, label: 'Tranqui', desc: '5 min por día' },
  { xp: 30, label: 'Normal', desc: '10 min por día' },
  { xp: 50, label: 'En serio', desc: '15 min por día' },
  { xp: 100, label: 'A full', desc: '30 min por día' },
]

export default function Onboarding() {
  const s = useStore()
  const [step, setStep] = useState(0)
  const [course, setCourse] = useState(s.currentCourse || 'python')
  const [goal, setGoal] = useState(s.dailyGoal || 30)
  const [name, setName] = useState(s.name || '')

  const finish = () => {
    setState({ onboarded: true, currentCourse: course, dailyGoal: goal, name: name.trim() || 'Estudiante' })
    go('aprender')
  }
  const lines = ['¡Hola! Soy AKI 🧉 ¿Qué querés aprender?', '¿Cuánto tiempo le querés dedicar por día?', '¡Último paso! ¿Cómo te llamo?']

  return (
    <div className="onb">
      <div className="lesson-top">
        <button className="x" onClick={() => (step ? setStep(step - 1) : go(''))} aria-label="Volver">←</button>
        <Bar value={step + 1} max={3} />
      </div>
      <div className="onb-body">
        <div className="speech">
          <Aki pose={step === 0 ? 'wave' : step === 1 ? 'think' : 'mate'} />
          <div className="bubble">{lines[step]}</div>
        </div>

        {step === 0 && GROUPS.map((g) => (
          <div key={g.id}>
            <div className="group-title">{g.icon} {g.title}</div>
            <div className="course-grid">
              {g.courses.map((c, i) => (
                <button key={c.id} className={`course-card reveal ${course === c.id ? 'sel' : ''}`} style={{ animationDelay: `${i * 0.03}s` }} onClick={() => setCourse(c.id)}>
                  <span className="big"><CourseIcon course={c} size={40} /></span>{c.title}<span className="desc">{c.desc}</span>
                </button>
              ))}
            </div>
          </div>
        ))}

        {step === 1 && (
          <div className="goal-list">
            {GOALS.map((g) => (
              <button key={g.xp} className={`goal ${goal === g.xp ? 'sel' : ''}`} onClick={() => setGoal(g.xp)}>
                <span>{g.desc}</span><span>{g.label}</span>
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <input className="name-input" autoFocus placeholder="Tu nombre o apodo" value={name} maxLength={24}
            onChange={(e) => setName(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && finish()} />
        )}
      </div>
      <div className="check-bar">
        <div className="inner" style={{ justifyContent: 'flex-end' }}>
          <button className="btn" onClick={() => (step < 2 ? setStep(step + 1) : finish())}>{step < 2 ? 'Continuar' : '¡Vamos!'}</button>
        </div>
      </div>
    </div>
  )
}
