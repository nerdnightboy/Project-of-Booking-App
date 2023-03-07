export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IndexPage from './pages/IndexPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
    
  )
}

