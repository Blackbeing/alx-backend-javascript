export default function getStudentIdsSum(ListStudents) {
  if (!Array.isArray(ListStudents)) {
    return 0;
  }
  return ListStudents.reduce((total, student) => total + student.id, 0);
}
