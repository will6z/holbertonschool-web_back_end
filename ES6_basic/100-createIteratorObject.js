export default function createIteratorObject(report) {
    // Gather all employees from each department
    const employees = [];
    for (const department of Object.values(report.allEmployees)) {
        employees.push(...department);
    }
    // Return an iterator for the employees array
    return employees[Symbol.iterator]();
}
