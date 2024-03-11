export default function getStudentIdsSum(listOfStudents) {
  function sum(total, student) {
    return total + student.id;
  }

  const number = listOfStudents.reduce(sum, 0);
  return number;
}
