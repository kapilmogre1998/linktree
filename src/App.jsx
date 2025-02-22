import { useState } from 'react'
import './App.css'
import LayoutComponent from './TellUsAboutYourself/TellUsAboutYourself'
import Layout from './AddLinks/AddLinks'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Homepage/HomePage'
import LoginPage from './LoginPage/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    // <>
    //  {/* <LayoutComponent /> */}
    //  {/* <Layout /> */}
    // </>
  )
}

export default App
