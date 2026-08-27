// Client Supabase cote navigateur
// Utilise la ANON_KEY (publique, respecte RLS)

"use client";

import { createBrowserClient } from "@supabase/ssr";

let client: ReturnType<typeof createBrowserClient> | null = null;

export function getBrowserClient() {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase env vars manquantes");
  }

  client = createBrowserClient(url, anonKey);
  return client;
}
