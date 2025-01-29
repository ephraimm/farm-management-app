import React from 'react'
import { FaUser, FaVideo, FaBook } from 'react-icons/fa'

export default function ExpertHelp() {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Expert Help</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Ask an Expert</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Question
              </label>
              <textarea
                className="input"
                rows="4"
                placeholder="Describe your farming challenge..."
              />
            </div>
            <button type="submit" className="w-full btn btn-primary">
              Submit Question
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Resources</h2>
          <div className="space-y-4">
            <ResourceCard
              icon={<FaVideo />}
              title="Video Tutorials"
              description="Watch expert farming tips and techniques"
            />
            <ResourceCard
              icon={<FaBook />}
              title="Knowledge Base"
              description="Browse farming guides and best practices"
            />
            <ResourceCard
              icon={<FaUser />}
              title="Local Experts"
              description="Connect with agricultural experts in your area"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function ResourceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center space-x-3">
        <div className="text-green-600 text-xl">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  )
}
