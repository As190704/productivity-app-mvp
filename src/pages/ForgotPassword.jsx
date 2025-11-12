import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { motion } from 'framer-motion'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [localError, setLocalError] = useState('')
  const [success, setSuccess] = useState(false)
  const { resetPassword, loading } = useAuthStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLocalError('')
    setSuccess(false)

    if (!email) {
      setLocalError('Please enter your email address')
      return
    }

    const { error } = await resetPassword(email)
    
    if (error) {
      setLocalError(error)
    } else {
      setSuccess(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            <span className="text-primary-600">🔑</span> Reset Password
          </h1>
          <p className="text-gray-600">Enter your email to receive a reset link</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Success Alert */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg"
            >
              <p className="text-sm text-green-600">
                Password reset email sent! Check your inbox for the reset link.
              </p>
            </motion.div>
          )}

          {/* Error Alert */}
          {localError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg"
            >
              <p className="text-sm text-red-600">{localError}</p>
            </motion.div>
          )}

          {/* Reset Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm font-medium text-primary-600 hover:text-primary-500 flex items-center justify-center space-x-1"
            >
              <span>←</span>
              <span>Back to Sign In</span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ForgotPassword
