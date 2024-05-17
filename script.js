const studentTable = document.getElementById('student-table');
const tbody = studentTable.querySelector('tbody');
const viewDetailsButton = document.getElementById('view-details');
const deleteStudentButton = document.getElementById('delete-student');
const updateStudentButton = document.getElementById('update-student');
const addStudentButton = document.getElementById('add-student');

async function fetchStudents() {
  const response = await fetch('http://127.0.0.1:8000/students'); // TODO: get API URL from Ansible
  const data = await response.json();
  if (Array.isArray(data)) {
    populateTable(data);
  } else {
    console.error('Unexpected data format from backend. Please check API response.');
  }
}


// Function to populate table with student data
function populateTable(students) {
  tbody.innerHTML = ''; // Clear existing data
  students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.id}</td>
                     <td>${student.name}</td>
                     <td>${student.school}</td>`;
    tbody.appendChild(row);
  });
}

fetchStudents();

// Add event listeners for buttons (details, delete, update, add)
// (These functions will need further implementation to handle specific actions)
viewDetailsButton.addEventListener('click', () => {
  console.log('View Details clicked');
});

deleteStudentButton.addEventListener('click', () => {
  console.log('Delete Student clicked');
});

updateStudentButton.addEventListener('click', () => {
  console.log('Update Student clicked');
});

addStudentButton.addEventListener('click', () => {
  console.log('Add Student clicked');
});
