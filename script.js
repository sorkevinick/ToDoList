document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = ''; // Limpar o campo de input após adicionar
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Remover</button>
    `;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.deleteBtn').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}
