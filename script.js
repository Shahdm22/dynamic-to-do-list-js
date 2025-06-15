// Wait until the DOM content is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements and store them in constants
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the function to add a task
    function addTask() {
        // Get and trim the value from the input field
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Set an onclick handler to remove the task when clicked
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Append the button to the list item, then append the list item to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add click event to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding a task with the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
