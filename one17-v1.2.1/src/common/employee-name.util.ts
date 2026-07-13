// CEO ruling 4-Jul (invariant 29a): names are stored SURNAME/FIRST_NAME/
// MIDDLE_NAME, never a single full_name field. This is the one shared
// display-formatting point — never re-concatenate ad hoc at each call site.
export function formatEmployeeName(employee: { surname: string; firstName: string; middleName?: string | null }): string {
  return [employee.surname, employee.firstName, employee.middleName].filter(Boolean).join(' ');
}
