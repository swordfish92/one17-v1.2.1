# Release Sign-off Sheet — Template

RES-001 (invariant 69), Workstream E — "Governance Sign-off." **Blank template
only.** Copy this file, fill in the fields for the specific release, and
file the completed copy in the document register (invariant 45's
DOCUMENT_REGISTER capability) as `RELEASE_SIGNOFF_<version>.md`, referenced
from that release's own `CHECKnn_EVIDENCE.md`. No signature on this
template — a release with an unsigned sheet is not RES-001-compliant
regardless of how green the technical gate is (RES-001 Workstream E).

Sign-off is a **human act**. This template exists so the fields are never
improvised release-to-release; it is never itself evidence of sign-off,
and it is never filled in or signed by whoever assembled the release.

---

## Release identification

| Field | Value |
|---|---|
| Version | |
| Git commit | |
| Bundle checksum (SHA-256) | |
| Build date (UTC) | |
| Tier (see below) | |

## Tier

Select the ONE tier that applies (RES-001 Workstream E):

- [ ] **MAJOR** — new business functionality, schema-significant. Requires the full 11-function governance panel sign-off (list each function/signer below, not just the three roles).
- [ ] **PATCH** — no functional change (release engineering / security hardening / bug fixes only). Requires: Technology, Internal Control, MD_CEO.
- [ ] **EMERGENCY security hotfix** — Technology + MD_CEO sign off to deploy immediately; full panel ratifies post-hoc within 5 working days (record that ratification separately, same document register entry once complete).

## Scope discipline confirmation

- [ ] The evidence pack (`CHECKnn_EVIDENCE.md`) for this release confirms the tier claimed above — e.g. a PATCH-tier release contains no schema change beyond what release engineering itself required, no new business functionality.
- [ ] Any RISK-ACCEPTED item in this release's evidence pack carries an explicit CEO disposition (RES-001: "risk acceptances signed by the CEO, none silent").

## Signatures — PATCH tier

| Role | Name | Signature | Date |
|---|---|---|---|
| Technology | | | |
| Internal Control | | | |
| MD_CEO | | | |

## Signatures — MAJOR tier (full 11-function governance panel)

*(Only complete this section for a MAJOR release. List each of the 11 governance functions this platform's charter names, one row per signer.)*

| Function | Name | Signature | Date |
|---|---|---|---|
| | | | |

## Signatures — EMERGENCY hotfix

| Stage | Role | Name | Signature | Date |
|---|---|---|---|---|
| Immediate deploy authorization | Technology | | | |
| Immediate deploy authorization | MD_CEO | | | |
| Post-hoc ratification (within 5 working days) | Full governance panel | | | |
