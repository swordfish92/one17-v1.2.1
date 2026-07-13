-- AMD-09 §4d hand-authored follow-up: "Auditor-class roles (SAU, AUDITOR)
-- are structurally read-only — the engine refuses write permissions mapped
-- to them." A CHECK constraint can't reference another table, so this is a
-- trigger — same pattern as journal_entry_line_entity_match — joining
-- role_permission to role and rejecting any level other than VIEW when the
-- role is flagged is_read_only.
CREATE FUNCTION enforce_readonly_role_permission() RETURNS TRIGGER AS $$
DECLARE
  role_is_read_only BOOLEAN;
BEGIN
  SELECT is_read_only INTO role_is_read_only FROM "role" WHERE code = NEW.role_code;
  IF role_is_read_only AND NEW.level <> 'VIEW' THEN
    RAISE EXCEPTION 'role % is structurally read-only (AMD-09 §4d) — cannot hold % permission on %, only VIEW', NEW.role_code, NEW.level, NEW.function_code;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER role_permission_readonly_check
  BEFORE INSERT OR UPDATE ON "role_permission"
  FOR EACH ROW EXECUTE FUNCTION enforce_readonly_role_permission();
