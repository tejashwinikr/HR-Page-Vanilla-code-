function acceptMessage() {
  alert('Congrats, it has been accepted!');
}

function rejectMessage() {
  alert('Oops, sorry!');
}

document.addEventListener('DOMContentLoaded', function () {
  // Close the modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  };
});

// Array to store employees
let employees = [];

// Array to store interviews
let interviews = [];

// Function to show add employee modal
function showAddEmployeeModal() {
  document.getElementById('employeeModal').style.display = 'block';
}

// Function to show add interview modal
function showAddInterviewModal() {
  document.getElementById('interviewModal').style.display = 'block';
}

// Function to add a new employee
function addEmployee() {
  // Get input values
  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let position = document.getElementById('position').value;
  let department = document.getElementById('department').value;
  let email = document.getElementById('email').value;
  let salary = document.getElementById('salary').value;

  // Create employee object
  let employee = {
    name: name,
    surname: surname,
    position: position,
    department: department,
    email: email,
    salary: salary
  };

  // Add employee to array
  employees.push(employee);

  // Call function to display employees
  displayEmployees();

  // Logic to add employee
  alert('Employee added successfully!');
  document.getElementById('employeeModal').style.display = 'none';
  clearFields();
}

// Function to add a new interview
function addInterview() {
  // Get input values
  let intDepartment = document.getElementById('int-department').value;
  let intPosition = document.getElementById('int-position').value;

  // Create interview object
  let interview = {
    department: intDepartment,
    position: intPosition
  };

  // Add interview to array
  interviews.push(interview);

  // Call function to display interviews
  displayInterviews();

  // Clear input fields
  document.getElementById('int-department').value = '';
  document.getElementById('int-position').value = '';

  // Close modal
  document.getElementById('interviewModal').style.display = 'none';
}

// Function to display employees
function displayEmployees() {
  let employeeList = document.getElementById('employeeList');
  employeeList.innerHTML = '';

  employees.forEach((employee, index) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <div class="employee-card">
        <div class="emp-image">
          <img class="user-img" src="images/default-avatar.jpg" alt="pic" />
        </div>
        <div class="employment-details">
          <span class="name-format">${employee.name} ${employee.surname}</span><br />
          <span>${employee.position}</span><br />
          <span>${employee.department}</span><br />
          <span>${employee.email}</span><br />
          <span>$${employee.salary}</span>
        </div>
      </div>
    `;
    employeeList.appendChild(li);
  });
}

// Function to display interviews
function displayInterviews() {
  let interviewList = document.getElementById('interviewList');
  interviewList.innerHTML = '';

  interviews.forEach((interview, index) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <div class="list-item">
        <h3>${interview.department}</h3>
        <p>${interview.position}</p>
      </div>
    `;
    interviewList.appendChild(li);
  });
}

// Function to clear input fields
function clearFields() {
  document.getElementById('name').value = '';
  document.getElementById('surname').value = '';
  document.getElementById('position').value = '';
  document.getElementById('department').value = '';
  document.getElementById('email').value = '';
  document.getElementById('salary').value = '';
  document.getElementById('int-department').value = '';
  document.getElementById('int-position').value = '';

  // Close modal
  document.getElementById('employeeModal').style.display = 'none';
}
