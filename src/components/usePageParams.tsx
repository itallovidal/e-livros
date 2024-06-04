import { useLocation } from 'react-router-dom'

export function usePageParams() {
  const params = useLocation()

  let path = params.pathname.slice(1).toLowerCase()
  if (path.includes('%20')) {
    path = path.replace('%20', '_')
  }

  if (path.includes(' ')) {
    path = path.replace(' ', '_')
  }

  const offset = params.search.slice(8)
  const query = new URLSearchParams(params.search)
  const title = query.get('title')

  return {
    path,
    offset,
    title,
  }
}
