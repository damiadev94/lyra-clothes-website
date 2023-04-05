import { useState } from 'react'
import MainLayout from './layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MainLayout>
        <div>App</div>
      </MainLayout>
    </div>
  )
}

export default App
