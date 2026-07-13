"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatEmployeeName = formatEmployeeName;
function formatEmployeeName(employee) {
    return [employee.surname, employee.firstName, employee.middleName].filter(Boolean).join(' ');
}
//# sourceMappingURL=employee-name.util.js.map