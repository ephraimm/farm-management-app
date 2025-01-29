import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import DataEntry from './pages/DataEntry'
import ExpertHelp from './pages/ExpertHelp'
import Onboarding from './pages/Onboarding'
import StateVerification from './components/StateVerification'

export default function App() {
  const [showState, setShowState] = useState(false)

  return (
    <div className="min-h-screen">
      <button
        onClick={() => setShowState(true)}
        className="fixed top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 z-50"
      >
        Show State
      </button>

      {showState && <StateVerification onClose={() => setShowState(false)} />}
      
      <Navigation />
      <main className="container mx-auto px-4 pb-20">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/entry" element={<DataEntry />} />
          <Route path="/expert" element={<ExpertHelp />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </main>
    </div>
  )
}
