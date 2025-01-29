import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import DataEntry from './pages/DataEntry'
import ExpertHelp from './pages/ExpertHelp'
import Onboarding from './pages/Onboarding'

export default function App() {
  return (
    <div className="min-h-screen">
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
