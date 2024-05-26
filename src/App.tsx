import {globalStyles} from "./styles/theme.ts";
import Home from "./pages/home.tsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage.tsx";

function App() {
  globalStyles()

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/:category'} element={<Home/>}/>
        <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
