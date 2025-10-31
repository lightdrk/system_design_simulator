import { useState } from 'react'
import ObjectComponent from './Components/object'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='w-screen h-screen bg-white flex flex-col justify-center align-center'>
                <ObjectComponent title="REDIS"/>
      </div>
  )
}

export default App
