import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const navigate = useNavigate()

  const steps = [
    {
      title: "Welcome to Farm Manager",
      description: "Track your farm's health, get expert advice, and improve your yields",
      action: "Get Started"
    },
    {
      title: "Log Your Activities",
      description: "Keep track of grazing, planting, and maintenance with easy data entry",
      action: "Next"
    },
    {
      title: "Get Expert Help",
      description: "Connect with agricultural experts and access farming resources",
      action: "Start Using App"
    }
  ]

  const handleNext = () => {
    if (step === steps.length - 1) {
      navigate('/')
    } else {
      setStep(step + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full px-4">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {steps[step].title}
          </h1>
          <p className="text-gray-600">
            {steps[step].description}
          </p>
          <div className="flex justify-center space-x-2">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i === step ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-full btn btn-primary"
          >
            {steps[step].action}
          </button>
        </div>
      </div>
    </div>
  )
}
