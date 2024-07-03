export default function getListStudentIds(ListStudents) {
  if (!Array.isArray(ListStudents)) {
    return [];
  }
  const listIds = ListStudents.map((student) => student.id);
  return listIds;
}
