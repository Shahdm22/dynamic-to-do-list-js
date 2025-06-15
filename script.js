document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    function addTask(taskText, save = true) {
        taskText = taskText.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = () => {
            taskList.removeChild(li);
            let tasks = getStoredTasks();
            tasks = tasks.filter(task => task !== taskText);
            saveTasks(tasks);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (save) {
            const tasks = getStoredTasks();
            tasks.push(taskText);
            saveTasks(tasks);
        }

        taskInput.value = '';
    }

    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    loadTasks();
});
