import React from 'react'
import { FaExclamationTriangle, FaLeaf } from 'react-icons/fa'

export default function Dashboard() {
  return (
    <div className="space-y-6 py-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Farm Dashboard</h1>
      </header>

      <div className="bg-red-100 p-4 rounded-lg">
        <div className="flex items-center space-x-2 text-red-800">
          <FaExclamationTriangle />
          <h2 className="font-semibold">Alert</h2>
        </div>
        <p className="mt-2 text-red-700">Field B shows signs of overgrazing. Consider rotating livestock.</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Farm Health</h2>
        <div className="grid grid-cols-2 gap-4">
          <HealthCard
            icon={<FaLeaf className="text-green-500" />}
            title="Soil Health"
            value="Good"
            trend="↑"
          />
          <HealthCard
            icon={<FaLeaf className="text-green-500" />}
            title="Rainfall"
            value="32mm"
            trend="→"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
        <div className="space-y-2">
          <ActivityItem
            date="Today"
            description="Added grazing record for Field A"
          />
          <ActivityItem
            date="Yesterday"
            description="Uploaded photos of new plantings"
          />
        </div>
      </section>
    </div>
  )
}

function HealthCard({ icon, title, value, trend }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-2">
        {icon}
        <h3 className="font-medium text-gray-800">{title}</h3>
      </div>
      <div className="mt-2 flex items-baseline space-x-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-green-500">{trend}</span>
      </div>
    </div>
  )
}

function ActivityItem({ date, description }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-gray-800">{description}</p>
    </div>
  )
}
