
DO $$ BEGIN
  BEGIN
    ALTER TABLE public.applications REPLICA IDENTITY FULL;
  EXCEPTION WHEN undefined_table THEN NULL; END;
  BEGIN
    ALTER TABLE public.notifications REPLICA IDENTITY FULL;
  EXCEPTION WHEN undefined_table THEN NULL; END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.applications;
  EXCEPTION WHEN duplicate_object THEN NULL; END;
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
  EXCEPTION WHEN duplicate_object THEN NULL; END;
END $$;
