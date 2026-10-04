import { getState } from './store'

let ctx
function tone(freqs, { dur = 0.12, type = 'sine', gap = 0.09, vol = 0.12 } = {}) {
  if (!getState().sound) return
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)()
    freqs.forEach((f, i) => {
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = type
      o.frequency.value = f
      const t0 = ctx.currentTime + i * gap
      g.gain.setValueAtTime(0, t0)
      g.gain.linearRampToValueAtTime(vol, t0 + 0.01)
      g.gain.exponentialRampToValueAtTime(0.001, t0 + dur)
      o.connect(g).connect(ctx.destination)
      o.start(t0)
      o.stop(t0 + dur + 0.02)
    })
  } catch { /* audio not available */ }
}

export const sfx = {
  correct: () => tone([660, 880], { type: 'triangle' }),
  wrong: () => tone([220, 180], { type: 'sawtooth', vol: 0.06, dur: 0.18 }),
  tap: () => tone([520], { dur: 0.05, vol: 0.05 }),
  finish: () => tone([523, 659, 784, 1047], { type: 'triangle', gap: 0.12, dur: 0.25 }),
  coin: () => tone([988, 1319], { type: 'square', vol: 0.05, gap: 0.07 }),
}

let voices = []
const loadVoices = () => { voices = window.speechSynthesis?.getVoices() || [] }
if (typeof window !== 'undefined' && window.speechSynthesis) {
  loadVoices()
  window.speechSynthesis.onvoiceschanged = loadVoices
}

export const canSpeak = () => typeof window !== 'undefined' && 'speechSynthesis' in window

export function speak(text, lang = 'es-AR', rate = 0.95) {
  if (!canSpeak() || !text) return
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  u.rate = rate
  const base = lang.split('-')[0]
  const v = voices.find((x) => x.lang === lang) || voices.find((x) => x.lang?.startsWith(base))
  if (v) u.voice = v
  window.speechSynthesis.speak(u)
}
