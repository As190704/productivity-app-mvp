import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import LoadingSpinner from './LoadingSpinner'

const ProtectedRoute = () => {
  const { user, loading } = useAuthStore()

  if (loading) {
    return <LoadingSpinner fullScreen />
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoute
