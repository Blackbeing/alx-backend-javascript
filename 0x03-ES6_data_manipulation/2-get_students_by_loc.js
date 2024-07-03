export default function getStudentsByLocation(ListStudents, city) {
  if (!Array.isArray(ListStudents)) {
    return [];
  }
  const listStudents = ListStudents.filter((student) => student.location === city);
  return listStudents;
}
