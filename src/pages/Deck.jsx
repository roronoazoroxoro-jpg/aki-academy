import { useState } from 'react'
import { useStore, redeemCard, setShine } from '../store'
import { CARDS, SETS, RARITY, hasCard, ownedCount, setOwned } from '../data/cards'
import { Aki, Bar, Modal, Confetti } from '../components/ui'
import { go } from '../router'
import { sfx } from '../fx'

function FiguFace({ card, owned }) {
  if (card.img) {
    return <img src={card.img} alt={owned ? card.name : `Carta bloqueada ${card.n}`} className="figu-art" />
  }
  return (
    <div className={`figu-classic r-${card.rarity}`}>
      <div className="figu-classic-top">{card.name}</div>
      <Aki pose={card.pose} h={150} idle={false} />
      <div className="figu-classic-bot">{RARITY[card.rarity].label} · {String(card.n).padStart(2, '0')}/20</div>
    </div>
  )
}

export default function Deck() {
  const s = useStore()
  const [tab, setTab] = useState('todas')
  const [pick, setPick] = useState(null)
  const [won, setWon] = useState(null)
  const deck = s.deck || { owned: {}, shine: null }
  const pts = s.cardPts || 0
  const have = ownedCount(deck)
  const list = tab === 'todas' ? CARDS : tab === 'mazo' ? CARDS.filter((c) => hasCard(deck, c.id)) : CARDS.filter((c) => c.set === tab)

  const buy = (card) => {
    const res = redeemCard(card.id)
    if (!res.ok) {
      sfx.wrong()
      return
    }
    sfx.coin()
    setPick(null)
    setWon(card)
  }

  return (
    <>
      <div className="page-head">
        <Aki pose="flag" h={96} idle={false} />
        <div>
          <h1>Mazo de cartas</h1>
          <p>Cada lección te da figus. Canjealas por cartas de AKI y armá tu álbum de 20.</p>
        </div>
      </div>

      <div className="deck-hud">
        <div className="deck-stat">
          <b>🃏 {pts}</b>
          <span>figus para canjear</span>
        </div>
        <div className="deck-stat">
          <b>{have} / 20</b>
          <span>cartas en tu mazo</span>
          <Bar value={have} max={20} cel style={{ height: 10, marginTop: 8 }} />
        </div>
        <div className="deck-stat">
          <b>{setOwned(deck, 'disfraz')} / 10</b>
          <span>disfraces</span>
        </div>
      </div>

      <div className="deck-tabs">
        <button className={`btn sm ${tab === 'todas' ? '' : 'white'}`} onClick={() => setTab('todas')}>Álbum</button>
        <button className={`btn sm ${tab === 'disfraz' ? '' : 'white'}`} onClick={() => setTab('disfraz')}>Disfraces</button>
        <button className={`btn sm ${tab === 'clasico' ? '' : 'white'}`} onClick={() => setTab('clasico')}>Clásicas</button>
        <button className={`btn sm ${tab === 'mazo' ? '' : 'white'}`} onClick={() => setTab('mazo')}>Tu mazo</button>
      </div>

      {tab !== 'mazo' && SETS.filter((set) => tab === 'todas' || tab === set.id).map((set) => (
        <section key={set.id} className="deck-set">
          <div className="group-title">{set.title}</div>
          <p className="muted small" style={{ fontWeight: 700, margin: '-6px 0 12px' }}>{set.sub}</p>
          <div className="figu-grid">
            {CARDS.filter((c) => c.set === set.id).map((c) => (
              <Figu key={c.id} card={c} owned={hasCard(deck, c.id)} shine={deck.shine === c.id} onOpen={() => setPick(c)} />
            ))}
          </div>
        </section>
      ))}

      {tab === 'mazo' && (
        <section className="deck-set">
          {list.length === 0 && <p className="muted" style={{ fontWeight: 700 }}>Todavía no canjeaste ninguna. ¡Hacé una lección y volvé con figus!</p>}
          <div className="figu-grid">
            {list.map((c) => (
              <Figu key={c.id} card={c} owned shine={deck.shine === c.id} onOpen={() => setPick(c)} />
            ))}
          </div>
        </section>
      )}

      <p className="muted small" style={{ fontWeight: 700, textAlign: 'center', marginTop: 18 }}>
        Una lección suma 12 figus · perfecta suma 20. Las de leyenda salen caras, che.
      </p>

      {pick && (
        <Modal onClose={() => setPick(null)}>
          <div className="figu-modal">
            <div className={`figu-preview ${hasCard(deck, pick.id) ? '' : 'locked'}`}>
              <FiguFace card={pick} owned={hasCard(deck, pick.id)} />
            </div>
            <div>
              <div className="ex-tag" style={{ color: RARITY[pick.rarity].color }}>{RARITY[pick.rarity].label} · {String(pick.n).padStart(2, '0')}/20</div>
              <h2 style={{ margin: '6px 0 8px' }}>{pick.name}</h2>
              <p className="muted" style={{ fontWeight: 700 }}>{pick.desc}</p>
              {hasCard(deck, pick.id) ? (
                <div style={{ display: 'grid', gap: 10 }}>
                  <button className="btn gold block" onClick={() => { setShine(pick.id); sfx.correct(); setPick(null) }}>
                    {deck.shine === pick.id ? '✔ Es tu carta activa' : 'Poner en el perfil'}
                  </button>
                  <button className="btn white block" onClick={() => setPick(null)}>Cerrar</button>
                </div>
              ) : pick.free ? (
                <button className="btn gold block" onClick={() => buy(pick)}>Tomar carta gratis</button>
              ) : (
                <div style={{ display: 'grid', gap: 10 }}>
                  <button className="btn gold block" disabled={pts < pick.cost} onClick={() => buy(pick)}>
                    Canjear · 🃏 {pick.cost}
                  </button>
                  {pts < pick.cost && (
                    <button className="btn white block" onClick={() => { setPick(null); go('aprender') }}>
                      Te faltan {pick.cost - pts} figus · ir a aprender
                    </button>
                  )}
                  {pts >= pick.cost && <button className="btn white block" onClick={() => setPick(null)}>Ahora no</button>}
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}

      {won && (
        <Modal onClose={() => setWon(null)}>
          <Confetti count={46} />
          <div style={{ textAlign: 'center' }}>
            <div className="figu-preview won">
              <FiguFace card={won} owned />
            </div>
            <h2>¡Nueva figu!</h2>
            <p className="muted" style={{ fontWeight: 700 }}>{won.name} ya está en tu mazo.</p>
            <button className="btn gold block" onClick={() => setWon(null)}>¡Joya!</button>
          </div>
        </Modal>
      )}
    </>
  )
}

function Figu({ card, owned, shine, onOpen }) {
  return (
    <button type="button" className={`figu ${owned ? 'on' : 'off'} r-${card.rarity} ${shine ? 'shine' : ''}`} onClick={onOpen} aria-label={owned ? card.name : `Bloqueada: ${card.name}`}>
      <span className="figu-num">{String(card.n).padStart(2, '0')}</span>
      <div className="figu-face">
        <FiguFace card={card} owned={owned} />
        {!owned && <span className="figu-lock">🔒</span>}
      </div>
      <span className="figu-name">{owned ? card.name : '???'}</span>
      <span className="figu-meta">{owned ? (shine ? 'Activa ★' : RARITY[card.rarity].label) : card.free ? 'Gratis' : `🃏 ${card.cost}`}</span>
    </button>
  )
}
