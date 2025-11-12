import { motion } from 'framer-motion'
import { format } from 'date-fns'

const Today = () => {
  const today = new Date()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Today
          </h1>
          <p className="text-gray-600 mt-1">{format(today, 'EEEE, MMMM d, yyyy')}</p>
        </div>
        <button className="btn btn-primary">
          + Add Task
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <span className="text-2xl">📝</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Tasks Today</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <span className="text-2xl">✅</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">0</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-orange-100 rounded-lg">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold text-gray-900">0 days</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Task List Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card"
      >
        <div className="text-center py-12">
          <span className="text-6xl mb-4 block">🎉</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No tasks for today
          </h3>
          <p className="text-gray-600 mb-6">
            Start adding tasks to boost your productivity!
          </p>
          <button className="btn btn-primary">
            Create Your First Task
          </button>
        </div>
      </motion.div>

      {/* Info Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-primary-50 border border-primary-200 rounded-xl p-6"
      >
        <div className="flex items-start space-x-3">
          <span className="text-2xl">ℹ️</span>
          <div>
            <h4 className="font-semibold text-primary-900 mb-1">
              Week 1 Complete - Authentication Ready!
            </h4>
            <p className="text-sm text-primary-700">
              Task CRUD functionality will be implemented in Week 2. 
              For now, verify that authentication, routing, and RLS policies are working correctly.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Today
