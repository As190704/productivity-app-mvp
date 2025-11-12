import { motion } from 'framer-motion'
import { useState } from 'react'

const Focus = () => {
  const [isActive, setIsActive] = useState(false)
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          🎯 Focus Mode
        </h1>
        <p className="text-gray-600 mt-1">Stay focused with Pomodoro technique</p>
      </div>

      {/* Timer Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card max-w-2xl mx-auto"
      >
        <div className="text-center py-12">
          {/* Timer Display */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary-600 mb-4 font-mono">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </div>
            <p className="text-lg text-gray-600">
              {isActive ? 'Focus time - Stay concentrated!' : 'Ready to start?'}
            </p>
          </div>

          {/* Timer Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className="btn btn-primary text-lg px-8 py-3"
            >
              {isActive ? '⏸️ Pause' : '▶️ Start'}
            </button>
            <button
              onClick={() => {
                setIsActive(false)
                setTimeLeft(25 * 60)
              }}
              className="btn btn-secondary text-lg px-8 py-3"
            >
              🔄 Reset
            </button>
          </div>

          {/* Task Selection (Placeholder) */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Working on</p>
            <button className="btn btn-outline">
              Select a task
            </button>
          </div>
        </div>
      </motion.div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card text-center"
        >
          <span className="text-3xl mb-2 block">⏱️</span>
          <p className="text-2xl font-bold text-gray-900">0</p>
          <p className="text-sm text-gray-600">Sessions Today</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card text-center"
        >
          <span className="text-3xl mb-2 block">⏰</span>
          <p className="text-2xl font-bold text-gray-900">0h</p>
          <p className="text-sm text-gray-600">Focus Time</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card text-center"
        >
          <span className="text-3xl mb-2 block">🏆</span>
          <p className="text-2xl font-bold text-gray-900">0</p>
          <p className="text-sm text-gray-600">Completed</p>
        </motion.div>
      </div>

      {/* Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gray-100 rounded-xl p-6 max-w-2xl mx-auto"
      >
        <h4 className="font-semibold text-gray-900 mb-3">🍅 What is Pomodoro Technique?</h4>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Work for 25 minutes with full focus</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Take a 5-minute break</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>After 4 sessions, take a longer 15-30 minute break</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Focus
