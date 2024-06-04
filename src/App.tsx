import { globalStyles } from './styles/theme.ts'
import { AppRoutes } from './pages/appRoutes.tsx'
import { GlobalContextProvider } from './contexts/globalContext.tsx'

function App() {
  globalStyles()

  return (
    <GlobalContextProvider>
      <AppRoutes />
    </GlobalContextProvider>
  )
}
export default App
