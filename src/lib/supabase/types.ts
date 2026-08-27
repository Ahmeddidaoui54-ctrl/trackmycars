// Types TypeScript alignes sur le schema SQL Supabase
// A regenerer avec `supabase gen types typescript` une fois les migrations appliquees

export type RideStatus =
  | "pending"
  | "accepted"
  | "in_progress"
  | "completed"
  | "cancelled";

export type PaymentMethod = "card" | "cash";
export type PaymentStatus =
  | "pending"
  | "authorized"
  | "paid"
  | "refunded"
  | "failed";
export type DriverStatus = "pending" | "approved" | "suspended";
export type ServiceCategory =
  | "standard"
  | "prive"
  | "pmr"
  | "business"
  | "événements";

export interface User {
  id: string;
  auth_id: string | null;
  email: string;
  email_verified_at: string | null;
  phone: string | null;
  first_name: string;
  last_name: string;
  locale: string;
  marketing_consent: boolean;
  marketing_consent_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Ride {
  id: string;
  booking_ref: string;
  client_id: string | null;
  driver_id: string | null;
  corridor_id: string | null;
  service_category: ServiceCategory;
  origin_address: string;
  origin_lat: number;
  origin_lng: number;
  dest_address: string;
  dest_lat: number;
  dest_lng: number;
  estimated_price: number;
  final_price: number | null;
  distance_km: number | null;
  duration_min: number | null;
  passengers: number;
  status: RideStatus;
  payment_method: PaymentMethod;
  payment_status: PaymentStatus;
  scheduled_at: string;
  client_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface EmailConfirmation {
  id: string;
  email: string;
  token: string;
  purpose: "booking" | "marketing_optin" | "account";
  ride_id: string | null;
  confirmed_at: string | null;
  expires_at: string;
  created_at: string;
}

export interface Database {
  public: {
    Tables: {
      users: { Row: User; Insert: Partial<User>; Update: Partial<User> };
      rides: { Row: Ride; Insert: Partial<Ride>; Update: Partial<Ride> };
      email_confirmations: {
        Row: EmailConfirmation;
        Insert: Partial<EmailConfirmation>;
        Update: Partial<EmailConfirmation>;
      };
    };
  };
}
