import { useState } from 'react'
import Layout from './AddLinks/AddLink'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Homepage/HomePage'
import LoginPage from './LoginPage/LoginPage'
import SignupPage from './SignupPage/SignupPage'
import OnboardingPage from './OnBoardPage/OnBoardPage'
import AddLink from './AddLinks/AddLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/on-board' element={<OnboardingPage />} />
        <Route path='/add-link' element={<AddLink />} />
      </Routes>
    </BrowserRouter>
    // <>
    //  {/* <LayoutComponent /> */}
    //  {/* <Layout /> */}
    // </>
  )
}

export default App
