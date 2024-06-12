var taskButton = document.getElementById('addTaskBtn')


taskButton.addEventListener('click', function() {
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const category = document.getElementById('category').value;

    if (taskName === '' || dueDate === '' || category === '') {
        alert('Please fill in all fields');
        return;
    }

    const taskList = document.getElementById('taskList');
    // const li = document.createElement('li');
    taskList.innerHTML = '';
    var list = 
    `<li><span>${taskName} - ${dueDate}</span>
    <span class="category">${category}</span>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="removeTask(this)">Remove</button></li>`;
    taskList.innerHTML += list;

    taskName.value = '';
    dueDate.value = '';
    category.value = 'Homework';
});

function removeTask(button) {
    button.parentElement.remove();
}
function editTask(button) {
    console.log(button.parentElement.children)
    // var temp = prompt('Enter New Value', )
    // button.parentElement.replace('');
}

document.getElementById('filterCategory').addEventListener('change', function() {
    const category = this.value;
    const tasks = document.querySelectorAll('#taskList li');

    tasks.forEach(task => {
        const taskCategory = task.querySelector('.category').textContent;
        if (category === 'All' || taskCategory === category) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});
