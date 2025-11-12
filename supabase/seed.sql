-- =============================================
-- Seed Data for Testing
-- Week 1: Dummy users and sample tasks
-- =============================================
-- NOTE: This requires manual user creation via Supabase Auth UI
-- Or programmatically via Admin API
-- The UUIDs below are examples - replace with actual user IDs

-- =============================================
-- SEED TASKS (Use after creating test users)
-- =============================================

-- Example seed for user testing
-- Replace 'USER_UUID_1' with actual user UUID from auth.users

/*
INSERT INTO public.tasks (user_id, title, description, status, priority, due_date) VALUES
    ('USER_UUID_1', 'Complete Week 1 Setup', 'Finish Supabase and React setup', 'in_progress', 'high', NOW() + INTERVAL '2 days'),
    ('USER_UUID_1', 'Review authentication flow', 'Test login, signup, and protected routes', 'todo', 'high', NOW() + INTERVAL '1 day'),
    ('USER_UUID_1', 'Write documentation', 'Document setup process in README', 'todo', 'medium', NOW() + INTERVAL '3 days'),
    ('USER_UUID_1', 'Test RLS policies', 'Verify row-level security is working', 'completed', 'high', NOW() - INTERVAL '1 day');

INSERT INTO public.focus_sessions (user_id, task_id, started_at, ended_at, duration) 
SELECT 
    'USER_UUID_1',
    id,
    NOW() - INTERVAL '2 hours',
    NOW() - INTERVAL '1 hour 30 minutes',
    1800
FROM public.tasks 
WHERE user_id = 'USER_UUID_1' 
LIMIT 1;
*/

-- =============================================
-- SEED SCRIPT INSTRUCTIONS
-- =============================================
-- 1. Create test users via Supabase Dashboard:
--    - Go to Authentication > Users > Add User
--    - Create 2-3 test accounts
-- 2. Copy user UUIDs from the Users table
-- 3. Replace 'USER_UUID_1' in the INSERT statements above
-- 4. Run the uncommented INSERT statements
-- 5. Verify data appears only for the logged-in user

-- =============================================
-- HELPER: Get all users (for finding UUIDs)
-- =============================================
-- SELECT id, email, created_at FROM auth.users;
