import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NotificationButton from './components/NotificationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Olá Mundo</h1>
      <NotificationButton />
      <NotificationButton />
    </>

  )
}

export default App
