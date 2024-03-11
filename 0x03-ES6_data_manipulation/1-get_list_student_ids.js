export default function getListStudentIds(itemIds) {
  if (!Array.isArray(itemIds)) {
    return [];
  }

  const studentId = itemIds.map((item) => item.id);
  return studentId;
}
