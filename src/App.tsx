import {globalStyles} from "./styles/theme.ts";
import Home from "./pages/home.tsx"

function App() {
  globalStyles()

  return (
      <Home/>
  )
}

export default App

