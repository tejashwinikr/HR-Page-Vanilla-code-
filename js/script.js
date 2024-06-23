function acceptMessage() {
  alert('Congrats, it has been accepted!');
}

function rejectMessage() {
  alert('Oops, sorry!');
}

function showAddEmployeeModal() {
  document.getElementById('employeeModal').style.display = 'block';
}

function showAddInterviewModal() {
  document.getElementById('interviewModal').style.display = 'block';
}

function addEmployee() {
  // Logic to add employee
  alert('Employee added successfully!');
  document.getElementById('employeeModal').style.display = 'none';
  clearFields();
}

function addInterview() {
  // Logic to add interview
  alert('Interview added successfully!');
  document.getElementById('interviewModal').style.display = 'none';
  clearFields();
}

function clearFields() {
  document.querySelectorAll('input').forEach((input) => (input.value = ''));
}

document.addEventListener('DOMContentLoaded', function () {
  // Close the modal when clicking outside of it
  window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  };
});
