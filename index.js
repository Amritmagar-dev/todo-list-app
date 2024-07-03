document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    const taskPriority = document.getElementById('priority').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskInput === '' || taskDescription === '') {
        alert('Please fill in all fields');
        return;
    }

    const taskList = document.getElementById('taskList');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <strong>${taskInput}</strong> - ${taskPriority} <br>
        ${taskDescription} 
        <button class="deleteButton">Delete</button>
    `;

    taskList.appendChild(listItem);

    document.getElementById('taskInput').value = '';
    document.getElementById('priority').value = 'Low';
    document.getElementById('taskDescription').value = '';

    const deleteButtons = document.querySelectorAll('.deleteButton');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });
});
