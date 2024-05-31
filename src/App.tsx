import { globalStyles } from './styles/theme.ts'
import Home from './pages/home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'
import About from './pages/about.tsx'
import Login from './pages/login.tsx'
import { Signup } from './pages/signup.tsx'
import Profile from './pages/profile.tsx'

function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/:category'} element={<Home />} />
        <Route path={'/:category/about/:id/'} element={<About />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/signup'} element={<Signup />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
