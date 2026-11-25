/*
# Create inquiries table

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, required, up to 120 characters)
  - `email` (text, required, up to 254 characters)
  - `artwork` (text, optional, up to 200 characters)
  - `message` (text, required, up to 5000 characters)
  - `created_at` (timestamp, defaults to now)

2. Security
- Enable RLS on `inquiries`.
- Visitors (anon and signed-in roles) can only INSERT new inquiries. Nobody on the public site can read, edit, or delete submitted inquiries.
- Reading inquiries is done from the Supabase dashboard by the site owner.

3. Notes
- The site has no sign-in, so the public key used by the browser must be able to submit the contact form.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  artwork text CHECK (artwork IS NULL OR char_length(artwork) <= 200),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 5000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries" ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
