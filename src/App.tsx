import {globalStyles} from "./styles/theme.ts";

import ProfileButton from "./components/profileButton.tsx";
import profilePicture from './assets/profilePicturePlaceholder.jpg'


function App() {
  globalStyles()

  return (
      <ProfileButton profilePicture={profilePicture} name={'George'}/>
  )
}

export default App

