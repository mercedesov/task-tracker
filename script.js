const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('tasks');
const todayBtn = document.getElementById('today-btn');
const tomorrowBtn = document.getElementById('tomorrow-btn');
const dateBtn = document.getElementById('date-btn');
const calendarInput = document.getElementById('calendar-input');

let selectedDate = null;

// Add task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText || !selectedDate) {
    alert('Please enter a task and select a date.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `<span>${taskText} (${selectedDate})</span><button>Delete</button>`;
  li.querySelector('button').addEventListener('click', () => li.remove());
  taskList.appendChild(li);

  taskInput.value = '';
  selectedDate = null;
});

// Today Button
todayBtn.addEventListener('click', () => {
  const today = new Date();
  selectedDate = today.toLocaleDateString('en-GB');
  setActiveButton(todayBtn);
});

// Tomorrow Button
tomorrowBtn.addEventListener('click', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  selectedDate = tomorrow.toLocaleDateString('en-GB');
  setActiveButton(tomorrowBtn);
});

// Date Button (Open Calendar)
dateBtn.addEventListener('click', () => {
  calendarInput.style.display = 'block';
  calendarInput.focus();
  setActiveButton(dateBtn);
});

// Calendar Input
calendarInput.addEventListener('change', () => {
  selectedDate = new Date(calendarInput.value).toLocaleDateString('en-GB');
  calendarInput.style.display = 'none';
});

function setActiveButton(activeButton) {
  [todayBtn, tomorrowBtn, dateBtn].forEach((btn) => {
    btn.style.backgroundColor = btn === activeButton ? '#005f99' : '#017ca7';
  });
}
