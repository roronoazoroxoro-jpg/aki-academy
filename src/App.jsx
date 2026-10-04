import { useEffect } from 'react'
import { useRoute, go } from './router'
import { useStore, refreshDaily } from './store'
import { getCourse } from './data/courses'
import { Layout } from './components/Layout'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Learn from './pages/Learn'
import Lesson from './pages/Lesson'
import Lab from './pages/Lab'
import { Courses, League, Quests, Shop, Profile } from './pages/Pages'

const PAGES = { aprender: Learn, cursos: Courses, lab: Lab, liga: League, misiones: Quests, tienda: Shop, perfil: Profile }

export default function App() {
  const { path, params } = useRoute()
  const onboarded = useStore((s) => s.onboarded)

  useEffect(() => {
    refreshDaily()
    const t = setInterval(refreshDaily, 30000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (!onboarded && PAGES[path]) go('empezar')
  }, [onboarded, path])

  if (path === '') return <Landing />
  if (path === 'empezar') return <Onboarding />

  if (path === 'leccion') {
    const [courseId, u, l] = params
    const course = getCourse(courseId)
    const uu = Math.min(Number(u) || 0, course.units.length - 1)
    return <Lesson key={`${course.id}-${uu}-${l}`} courseId={course.id} u={uu} l={Math.min(Number(l) || 0, 2)} />
  }
  if (path === 'practica') {
    return <Lesson key={`p-${params[0]}`} courseId={getCourse(params[0]).id} practice />
  }

  const Page = PAGES[path] || Learn
  return <Layout active={PAGES[path] ? path : 'aprender'}><Page /></Layout>
}
