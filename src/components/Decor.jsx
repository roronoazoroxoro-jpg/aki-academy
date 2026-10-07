export function Patio() {
  return (
    <div className="patio" aria-hidden="true">
      <div className="sol-mayo">
        <i /><i /><i /><i /><i /><i /><i /><i />
        <b />
      </div>
      <div className="yerba-rain">
        {Array.from({ length: 14 }, (_, i) => <span key={i} style={{ '--i': i }} />)}
      </div>
      <div className="steam-field">
        <i /><i /><i />
      </div>
    </div>
  )
}

export function MateGlow() {
  return (
    <div className="mate-glow" aria-hidden="true">
      <span className="steam-puff" /><span className="steam-puff d2" /><span className="steam-puff d3" />
    </div>
  )
}

export function XpBurst({ text = '+10 XP' }) {
  return <div className="xp-burst">{text}</div>
}
