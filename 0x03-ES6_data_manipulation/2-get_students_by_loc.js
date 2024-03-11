export default function getStudentsByLocation(listStudents, city) {
  function getCity(student) {
    return student.location === city;
  }
  const newList = listStudents.filter(getCity);
  return newList;
}
