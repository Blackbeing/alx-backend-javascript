export default function* createIteratorObject(report) {
  for (const allEmp in report) {
    if (allEmp) {
      const departments = report[allEmp];
      for (const dep in departments) {
        if (dep) {
          const employees = departments[dep];
          yield* employees;
        }
      }
    }
  }
}
