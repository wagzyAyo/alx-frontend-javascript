export default function getListStudentIds(itemIds) {
    if (Array.isArray(itemIds)){
        const studentId = itemIds.map(item=> item.id);
        return studentId;
    }
    else{
        return []
    }
}