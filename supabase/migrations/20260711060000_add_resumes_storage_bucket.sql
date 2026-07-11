-- Private storage bucket for applicant resumes, replacing the Lovable-connector
-- Google Drive upload (connector-gateway.lovable.dev), which only works inside
-- Lovable Cloud. All access goes through the service-role server function, so
-- no public bucket policies are needed.
DO $$ BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('resumes', 'resumes', false)
  ON CONFLICT (id) DO NOTHING;
EXCEPTION WHEN OTHERS THEN NULL; END;
$$;
