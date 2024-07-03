interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student: Student = {
  firstName: 'Anderson',
  lastName: 'John',
  age: 20,
  location: 'Nairobi'
};

const student2: Student = {
  firstName: 'Daniella',
  lastName: 'Adagala',
  age: 19,
  location: 'Kisumu'
};

const studentsList: Student[] = [student, student2];


const table = document.createElement('table');
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(nameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});
document.body.appendChild(table);
