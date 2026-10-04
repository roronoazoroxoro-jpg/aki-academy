import { useSyncExternalStore } from 'react'

const subscribe = (cb) => { window.addEventListener('hashchange', cb); return () => window.removeEventListener('hashchange', cb) }
const getHash = () => window.location.hash.replace(/^#\/?/, '')

export function useRoute() {
  const hash = useSyncExternalStore(subscribe, getHash)
  const [path, ...params] = hash.split('/')
  return { path: path || '', params }
}

export function go(path) {
  window.location.hash = `/${path}`
  window.scrollTo(0, 0)
}
