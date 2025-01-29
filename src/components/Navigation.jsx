import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaPlus, FaQuestion } from 'react-icons/fa'

export default function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-2">
          <NavLink to="/" active={location.pathname === '/'}>
            <FaHome className="text-2xl" />
            <span className="text-xs">Home</span>
          </NavLink>
          <NavLink to="/entry" active={location.pathname === '/entry'}>
            <FaPlus className="text-2xl" />
            <span className="text-xs">Log Data</span>
          </NavLink>
          <NavLink to="/expert" active={location.pathname === '/expert'}>
            <FaQuestion className="text-2xl" />
            <span className="text-xs">Expert</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center p-2 rounded-lg ${
        active ? 'text-green-600' : 'text-gray-600'
      }`}
    >
      {children}
    </Link>
  )
}
