import { useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { categories } from '../utils/schemas.ts'
import { AppContext } from '../contexts/globalContext.tsx'

export function usePageParams() {
  const { navigateTo } = useContext(AppContext)

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

  useEffect(() => {
    if (!path) {
      console.log('sem categoria informada.')
      navigateTo('/architecture?offset=1')
      return
    }

    if (!categories.includes(path)) {
      console.log('categoria informada errada.')
      navigateTo('/architecture?offset=1')
    }
  }, [path, offset])

  return {
    path,
    offset,
    title,
  }
}
