import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eamfxclwtccxgbnecvac.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbWZ4Y2x3dGNjeGdibmVjdmFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0NDE4ODQsImV4cCI6MjAyNTAxNzg4NH0.LVM6CXa4Zhn0_tcaqmrEWbRkqJ3Bs6RKzsrJJjoLN_U";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

