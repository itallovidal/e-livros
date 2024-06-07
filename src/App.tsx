import { globalStyles } from './styles/theme.ts'
import { AppRoutes } from './pages/appRoutes.tsx'

function App() {
  globalStyles()

  return <AppRoutes />
}
export default App
