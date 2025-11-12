import { create } from 'zustand'
import { supabase } from '../utils/supabaseClient'

export const useAuthStore = create((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  error: null,

  // Initialize auth state from Supabase session
  initialize: async () => {
    try {
      set({ loading: true, error: null })
      
      // Get current session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession()
      
      if (sessionError) throw sessionError

      if (session?.user) {
        await get().setUser(session.user)
      }

      // Listen for auth changes
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (session?.user) {
          await get().setUser(session.user)
        } else {
          set({ user: null, profile: null })
        }
      })

      set({ loading: false })
    } catch (error) {
      console.error('Auth initialization error:', error)
      set({ error: error.message, loading: false })
    }
  },

  // Set user and fetch profile
  setUser: async (user) => {
    set({ user })
    
    if (user) {
      try {
        const { data: profile, error } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .single()

        if (error && error.code !== 'PGRST116') { // Ignore "not found" error
          console.error('Profile fetch error:', error)
        } else if (profile) {
          set({ profile })
        }
      } catch (error) {
        console.error('Profile fetch error:', error)
      }
    }
  },

  // Sign up with email/password
  signUp: async (email, password, name) => {
    try {
      set({ loading: true, error: null })
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      })

      if (error) throw error

      set({ loading: false })
      return { data, error: null }
    } catch (error) {
      set({ error: error.message, loading: false })
      return { data: null, error: error.message }
    }
  },

  // Sign in with email/password
  signIn: async (email, password) => {
    try {
      set({ loading: true, error: null })
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      set({ loading: false })
      return { data, error: null }
    } catch (error) {
      set({ error: error.message, loading: false })
      return { data: null, error: error.message }
    }
  },

  // Sign in with Google OAuth
  signInWithGoogle: async () => {
    try {
      set({ loading: true, error: null })
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/today`,
        },
      })

      if (error) throw error

      // Note: OAuth redirects, so loading state remains true
      return { data, error: null }
    } catch (error) {
      set({ error: error.message, loading: false })
      return { data: null, error: error.message }
    }
  },

  // Sign out
  signOut: async () => {
    try {
      set({ loading: true, error: null })
      
      const { error } = await supabase.auth.signOut()
      
      if (error) throw error

      set({ user: null, profile: null, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      set({ loading: true, error: null })
      
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (error) throw error

      set({ loading: false })
      return { data, error: null }
    } catch (error) {
      set({ error: error.message, loading: false })
      return { data: null, error: error.message }
    }
  },

  // Clear error
  clearError: () => set({ error: null }),
}))
