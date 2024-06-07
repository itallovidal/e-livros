import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './home.tsx'
import { About } from './about.tsx'
import Profile from './profile.tsx'
import Login from './login.tsx'
import { Signup } from './signup.tsx'
import NotFoundPage from './NotFoundPage.tsx'
import { GlobalContextProvider } from '../contexts/globalContext.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route path={'/:category'} element={<Home />} />
          <Route path={'/search'} element={<Home />} />
          <Route path={'/:category/about/:id'} element={<About />} />
          <Route path={'/profile'} element={<Profile />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}
