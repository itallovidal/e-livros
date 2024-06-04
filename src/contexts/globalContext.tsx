import { createContext, ReactNode, useState } from 'react'
import { IUser } from '../@types/api'

interface IAppContext {
  user: null | IUser
  loginUser: (data: IUser) => void
}

interface IGlobalContextProps {
  children: ReactNode
}

export const AppContext = createContext({} as IAppContext)

export function GlobalContextProvider({ children }: IGlobalContextProps) {
  const [user, setUser] = useState<null | IUser>(null)

  function loginUser(data: IUser) {
    setUser(data)
  }

  return (
    <AppContext.Provider value={{ user, loginUser }}>
      {children}
    </AppContext.Provider>
  )
}
