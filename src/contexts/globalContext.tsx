import { createContext, ReactNode, useEffect, useState } from 'react'
import { IUser } from '../@types/api'
import { useNavigate } from 'react-router-dom'

interface IAppContext {
  user: null | IUser
  loginUser: (data: IUser) => void
  logOutUser: () => void
  navigateTo: (route: string) => void
}

interface IGlobalContextProps {
  children: ReactNode
}

export const AppContext = createContext({} as IAppContext)

export function GlobalContextProvider({ children }: IGlobalContextProps) {
  const [user, setUser] = useState<null | IUser>(null)
  const navigation = useNavigate()

  function navigateTo(route: string) {
    navigation(route)
  }

  useEffect(() => {
    const dataLocalUser = localStorage.getItem('user')
    if (dataLocalUser != null) {
      const LocalUser = JSON.parse(dataLocalUser)
      loginUser(LocalUser)
    }
  }, [])
  function loginUser(data: IUser) {
    setUser(data)
  }
  function logOutUser() {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AppContext.Provider value={{ user, loginUser, logOutUser, navigateTo }}>
      {children}
    </AppContext.Provider>
  )
}
