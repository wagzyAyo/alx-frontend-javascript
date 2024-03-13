interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Jon';
  lastName: 'snow';
  age: 26;
  location: 'Las vegas';
};

const student2: Student {
  firstName: 'Harry';
  lastName: 'potter';
  age: 19;
  location: 'new york';
};

const studentList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();
