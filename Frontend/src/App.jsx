import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Appearance from './Components/Appearance/Appearance'
import AddLink from './Components/AddLinks/AddLink'
import OnboardingPage from './Components/OnBoardPage/OnBoardPage'
import SignupPage from './Components/SignupPage/SignupPage'
import LoginPage from './Components/LoginPage/LoginPage'
import HomePage from './Components/Homepage/HomePage'
import Analytics from './Components/Analytics/Analytics'
import Settings from './Components/Settings/Settings'
import Share from './Components/Share/Share'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/share-profile/:id" element={<Share />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path='/appearance' element={<Appearance />} />
        <Route path='/add-link' element={<AddLink />} />
        <Route path='/on-board' element={<OnboardingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1 className="not-found" >404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
