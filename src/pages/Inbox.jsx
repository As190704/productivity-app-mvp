import { motion } from 'framer-motion'

const Inbox = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            📥 Inbox
          </h1>
          <p className="text-gray-600 mt-1">All your uncategorized tasks</p>
        </div>
        <button className="btn btn-primary">
          + Add Task
        </button>
      </div>

      {/* Empty State */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
      >
        <div className="text-center py-16">
          <span className="text-6xl mb-4 block">📥</span>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Your inbox is empty
          </h3>
          <p className="text-gray-600 mb-6">
            Tasks you create will appear here until you organize them.
          </p>
          <button className="btn btn-primary">
            Add Your First Task
          </button>
        </div>
      </motion.div>

      {/* Feature Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6"
        >
          <span className="text-3xl mb-3 block">📅</span>
          <h4 className="font-semibold text-gray-900 mb-2">Schedule Tasks</h4>
          <p className="text-sm text-gray-700">
            Set due dates and organize your tasks by priority.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6"
        >
          <span className="text-3xl mb-3 block">🏷️</span>
          <h4 className="font-semibold text-gray-900 mb-2">Organize with Tags</h4>
          <p className="text-sm text-gray-700">
            Coming soon: Tag and categorize your tasks for better organization.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Inbox
