setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


/* ******************************** Calculator *************************************  */

const display = document.getElementById("display");

function appendToDisplay(input){
  display.value += input; 
}

function clearDisplay(){
  display.value = "";
}

function Calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value = "Error";
  }
}

/*  ******************************* To-do List *************************************  */

const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');
const viewAllButton = document.getElementById('view-all-btn');
const clearAllButton = document.getElementById('clear-all-btn');

let tasks = []; // Array to store tasks

// Function to retrieve tasks from local storage (if available)
function getTasksFromStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    try {
      tasks = JSON.parse(storedTasks);
    } catch (error) {
      console.error('Error parsing stored tasks:', error);
      // Handle parsing errors gracefully (e.g., display a message or initialize tasks with defaults)
    }
  }
  displayTasks(); // Display retrieved tasks
}

// Function to store tasks in local storage
function storeTasksToStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask(task) {
  if (task) { // Validate that a task is entered
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Optional functionality to mark tasks complete (add CSS class)
    // listItem.classList.add('completed'); // Example for marking complete

    // Functionality to delete task:
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
      tasks = tasks.filter(t => t !== task); // Remove task from storage
      storeTasksToStorage();
    });
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    tasks.push(task); // Add task to storage
    storeTasksToStorage();
    newTaskInput.value = ''; // Clear input field after adding task
  } else {
    // Handle an empty task entry (e.g., display an error message or disable the Add button)
    console.warn('Please enter a task!');
  }
}

function displayTasks() {
  taskList.innerHTML = ''; // Clear existing list items
  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // (Optional) Add functionality to filter or display completed tasks differently
    // ...

    taskList.appendChild(listItem);
  });
}

function viewAllTasks() {
  // You could implement additional functionalities like filtering completed tasks
  displayTasks(); // Already displays all tasks
}

// Event listeners and initial setup
getTasksFromStorage(); // Retrieve tasks on page load

addTaskButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim(); // Trim leading/trailing whitespace
  addTask(newTask);
});

viewAllButton.addEventListener('click', viewAllTasks); // Use the existing displayTasks function

clearAllButton.addEventListener('click', function() {
  taskList.innerHTML = ''; // Remove all list items
  tasks = []; // Clear task storage
  storeTasksToStorage();
});


/* ********************************************* Quotes **************************************** */

