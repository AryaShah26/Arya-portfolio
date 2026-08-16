/*
# Create portfolio contact messages

1. New Tables
- `contact_messages` stores messages submitted through Arya Shah's public portfolio contact form.
- `id` is the generated unique identifier.
- `name` stores the visitor's name.
- `email` stores the visitor's reply address.
- `message` stores the visitor's message.
- `created_at` records submission time.

2. Security
- Row level security is enabled.
- Anonymous and authenticated visitors may create a message after database-side length checks.
- Messages cannot be read, changed, or removed through the public client.

3. Important Notes
- This is a single-tenant portfolio without a sign-in screen.
- The portfolio only needs public INSERT access; the remaining policies intentionally deny public access.
*/

CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 4000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can submit contact messages" ON public.contact_messages;
CREATE POLICY "Public can submit contact messages"
  ON public.contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (char_length(name) BETWEEN 1 AND 120 AND char_length(email) BETWEEN 3 AND 254 AND char_length(message) BETWEEN 1 AND 4000);

DROP POLICY IF EXISTS "Public cannot read contact messages" ON public.contact_messages;
CREATE POLICY "Public cannot read contact messages"
  ON public.contact_messages FOR SELECT
  TO anon, authenticated
  USING (false);

DROP POLICY IF EXISTS "Public cannot update contact messages" ON public.contact_messages;
CREATE POLICY "Public cannot update contact messages"
  ON public.contact_messages FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

DROP POLICY IF EXISTS "Public cannot delete contact messages" ON public.contact_messages;
CREATE POLICY "Public cannot delete contact messages"
  ON public.contact_messages FOR DELETE
  TO anon, authenticated
  USING (false);