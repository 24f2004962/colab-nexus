-- This is already dropped in migration 5, but let's ensure it's idempotent
DO $$ BEGIN
  DROP POLICY IF EXISTS profiles_select_directory_fields ON public.profiles;
EXCEPTION WHEN undefined_object THEN NULL; END;
$$;
