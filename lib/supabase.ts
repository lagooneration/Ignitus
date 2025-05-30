import { createClient } from "@supabase/supabase-js";

export const createSupabaseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
            auth: {
                persistSession: false
            }
        }
    );
}

// Use this function for admin operations that require service role privileges
export const createAdminSupabaseClient = () => {
    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!, {
            auth: {
                persistSession: false
            }
        }
    );
}