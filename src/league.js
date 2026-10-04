import { weekId } from './store'

export const TIERS = [
  { name: 'Potrero', icon: '🥾', min: 0 },
  { name: 'Barrio', icon: '🏘️', min: 200 },
  { name: 'Ascenso', icon: '⚽', min: 600 },
  { name: 'Primera', icon: '🏟️', min: 1500 },
  { name: 'Selección', icon: '🌟', min: 3000 },
  { name: 'Campeón del Mundo', icon: '🏆', min: 6000 },
]
export const tierFor = (xp) => [...TIERS].reverse().find((t) => xp >= t.min)

const NAMES = ['Lucía', 'Mateo', 'Valentina', 'Thiago', 'Sofía', 'Benjamín', 'Martina', 'Juan Cruz', 'Camila', 'Santino', 'Abril', 'Bautista', 'Delfina', 'Facundo', 'Milagros', 'Tomás', 'Agustina', 'Lautaro', 'Julieta', 'Nahuel']
const CITIES = ['CABA', 'Córdoba', 'Rosario', 'Mendoza', 'La Plata', 'Salta', 'Tucumán', 'Mar del Plata', 'Neuquén', 'Bariloche', 'Corrientes', 'Ushuaia']
const COLORS = ['#74ACDF', '#F6B40E', '#5B9BD5', '#E5484D', '#2FA86B', '#8B5CF6', '#F08A00', '#1F5F99']

function rng(seed) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) h = Math.imul(h ^ seed.charCodeAt(i), 16777619)
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function leagueTable(myName, myXp) {
  const wk = weekId()
  const r = rng(wk)
  const day = (new Date().getDay() || 7)
  const hour = new Date().getHours()
  const progress = (day - 1 + hour / 24) / 7
  const bots = NAMES.slice().sort(() => r() - 0.5).slice(0, 14).map((n, i) => {
    const pace = 40 + r() * 420
    return {
      name: n, city: CITIES[Math.floor(r() * CITIES.length)], color: COLORS[i % COLORS.length],
      xp: Math.round(pace * progress * (0.7 + r() * 0.6)),
    }
  })
  const rows = [...bots, { name: myName || 'Vos', city: 'Vos', color: '#1F5F99', xp: myXp, me: true }]
  return rows.sort((a, b) => b.xp - a.xp)
}
