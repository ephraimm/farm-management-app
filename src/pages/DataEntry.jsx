import React, { useState } from 'react'
import { FaCamera, FaMapMarkerAlt } from 'react-icons/fa'

export default function DataEntry() {
  const [formData, setFormData] = useState({
    activity: '',
    notes: '',
    location: '',
    photos: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Log Farm Activity</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Activity Type
          </label>
          <select
            className="input"
            value={formData.activity}
            onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
          >
            <option value="">Select activity...</option>
            <option value="grazing">Grazing</option>
            <option value="planting">Planting</option>
            <option value="harvest">Harvest</option>
            <option value="maintenance">Maintenance</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Notes
          </label>
          <textarea
            className="input"
            rows="3"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Add any additional details..."
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="flex-1 btn bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <FaCamera className="inline mr-2" />
            Add Photo
          </button>
          <button
            type="button"
            className="flex-1 btn bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            <FaMapMarkerAlt className="inline mr-2" />
            Add Location
          </button>
        </div>

        <button type="submit" className="w-full btn btn-primary">
          Save Entry
        </button>
      </form>
    </div>
  )
}
