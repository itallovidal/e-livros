import { createContext, ReactNode, useEffect, useState } from 'react'
import { IUser } from '../@types/api'

interface IAppContext {
  user: null | IUser
  loginUser: (data: IUser) => void
  logOutUser: () => void
}

interface IGlobalContextProps {
  children: ReactNode
}

export const AppContext = createContext({} as IAppContext)

export function GlobalContextProvider({ children }: IGlobalContextProps) {
  const [user, setUser] = useState<null | IUser>(null)
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
    <AppContext.Provider value={{ user, loginUser, logOutUser }}>
      {children}
    </AppContext.Provider>
  )
}
