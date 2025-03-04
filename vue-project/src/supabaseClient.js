import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pbgrtsnznubwycohnljl.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBiZ3J0c256bnVid3ljb2hubGpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3MzE5NzMsImV4cCI6MjA1NjMwNzk3M30.sxiaO9Dmf9yFM52slmYDXeX-XjNDFC-_zErsgxdnCQ8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);