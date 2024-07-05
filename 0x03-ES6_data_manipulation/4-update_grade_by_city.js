export default function updateStudentGradeByCity(ListStudents, city, newGrades) {
  if (!Array.isArray(ListStudents)) {
    return [];
  }

  const updatedCityStudents = ListStudents.filter((student) => student.location === city)
    .map((student) => {
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      student.grade = newGrade ? newGrade.grade : 'N/A';
      return student;
    });

  return updatedCityStudents;
}
