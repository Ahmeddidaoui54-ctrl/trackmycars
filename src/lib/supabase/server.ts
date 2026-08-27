// Client Supabase server-side pour API routes et Server Components
// Utilise la SERVICE_ROLE_KEY pour operations backend (bypass RLS)
// NE JAMAIS exposer cette cle au client

import { createClient } from "@supabase/supabase-js";

// NOTE: types Database seront regeneres via `supabase gen types typescript`
// une fois le schema applique en ligne. Pour l'instant typage permissif.

export function createServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY requis"
    );
  }

  return createClient(url, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

export function createAnonServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY requis"
    );
  }

  return createClient(url, anonKey);
}
