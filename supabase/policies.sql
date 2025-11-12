-- =============================================
-- Row Level Security (RLS) Policies
-- Week 1: Secure data access per user
-- =============================================

-- Enable RLS on all tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.focus_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.streaks ENABLE ROW LEVEL SECURITY;

-- =============================================
-- USERS TABLE POLICIES
-- =============================================

-- Users can view their own profile
CREATE POLICY "Users can view own profile"
    ON public.users
    FOR SELECT
    USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile"
    ON public.users
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Users can insert their own profile (handled by trigger, but policy needed)
CREATE POLICY "Users can insert own profile"
    ON public.users
    FOR INSERT
    WITH CHECK (auth.uid() = id);

-- =============================================
-- TASKS TABLE POLICIES
-- =============================================

-- Users can view their own tasks
CREATE POLICY "Users can view own tasks"
    ON public.tasks
    FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own tasks
CREATE POLICY "Users can insert own tasks"
    ON public.tasks
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own tasks
CREATE POLICY "Users can update own tasks"
    ON public.tasks
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own tasks
CREATE POLICY "Users can delete own tasks"
    ON public.tasks
    FOR DELETE
    USING (auth.uid() = user_id);

-- =============================================
-- FOCUS_SESSIONS TABLE POLICIES
-- =============================================

-- Users can view their own focus sessions
CREATE POLICY "Users can view own focus sessions"
    ON public.focus_sessions
    FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own focus sessions
CREATE POLICY "Users can insert own focus sessions"
    ON public.focus_sessions
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own focus sessions
CREATE POLICY "Users can update own focus sessions"
    ON public.focus_sessions
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can delete their own focus sessions
CREATE POLICY "Users can delete own focus sessions"
    ON public.focus_sessions
    FOR DELETE
    USING (auth.uid() = user_id);

-- =============================================
-- STREAKS TABLE POLICIES
-- =============================================

-- Users can view their own streak data
CREATE POLICY "Users can view own streaks"
    ON public.streaks
    FOR SELECT
    USING (auth.uid() = user_id);

-- Users can update their own streak data
CREATE POLICY "Users can update own streaks"
    ON public.streaks
    FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

-- Users can insert their own streak data (handled by trigger)
CREATE POLICY "Users can insert own streaks"
    ON public.streaks
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- =============================================
-- VERIFICATION QUERIES
-- Run these to test RLS is working correctly
-- =============================================

-- Test 1: Verify RLS is enabled
-- SELECT tablename, rowsecurity 
-- FROM pg_tables 
-- WHERE schemaname = 'public';

-- Test 2: View all policies
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
-- FROM pg_policies 
-- WHERE schemaname = 'public';

-- Test 3: Test as authenticated user (run in Supabase SQL Editor as user)
-- SELECT * FROM tasks; -- Should only return current user's tasks
