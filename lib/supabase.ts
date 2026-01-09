import { createClient } from '@supabase/supabase-js';

// Hardcoded for now to ensure it works, user can move to .env.local later
const supabaseUrl = 'https://napbycrdqwhuerleqgxm.supabase.co';
const supabaseAnonKey = 'sb_publishable_khC9WSp5BdrcseJcIb3F5g_jw2Ii9rI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
