import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wnatgicqupkotyzxbqaw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduYXRnaWNxdXBrb3R5enhicWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgxNDI4OTYsImV4cCI6MTk5MzcxODg5Nn0.KObBKMvujQ9arW8kmDui0Wcud3LkRvrjDaG3six5aSo'

export const supabase = createClient(supabaseUrl, supabaseKey)