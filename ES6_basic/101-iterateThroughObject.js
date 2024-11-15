export default function iterateThroughObject(reportWithIterator) {
    // Convert the iterator to an array
    const employees = [...reportWithIterator];
    // Join all employee names with " | " separator
    return employees.join(' | ');
}
