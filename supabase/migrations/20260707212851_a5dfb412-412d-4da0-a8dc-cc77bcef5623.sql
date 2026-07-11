
-- Revoke execute permissions to lock down functions
DO $$ BEGIN
  BEGIN
    REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
  EXCEPTION WHEN undefined_function THEN NULL; END;
  BEGIN
    REVOKE EXECUTE ON FUNCTION public.is_head_of(UUID, public.department) FROM PUBLIC, anon;
  EXCEPTION WHEN undefined_function THEN NULL; END;
  BEGIN
    REVOKE EXECUTE ON FUNCTION public.user_department(UUID) FROM PUBLIC, anon;
  EXCEPTION WHEN undefined_function THEN NULL; END;
  BEGIN
    REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon;
  EXCEPTION WHEN undefined_function THEN NULL; END;
  BEGIN
    REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
  EXCEPTION WHEN undefined_function THEN NULL; END;
END $$;
