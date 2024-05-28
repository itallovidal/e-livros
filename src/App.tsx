import { globalStyles } from './styles/theme.ts'
import Home from './pages/home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'
import About from './pages/about.tsx'
import Login from './pages/login.tsx'

function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/:category'} element={<Home />} />
        <Route path={'/about/:id/book?/'} element={<About />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
