import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from './assets/AppHeader'
import AppMain from './assets/AppMain'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppHeader />
      <AppMain />
    </div>
  )
}

export default App