-- Invariant 37(c)(iv): Board Papers flow reuses the stakeholder-reporting
-- module (invariant 24) with a new BOARD audience class -- no parallel
-- module, additive enum value only.

-- AlterEnum
ALTER TYPE "stakeholder_audience_class" ADD VALUE 'BOARD';
