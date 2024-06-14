var taskData = [
    {
    task: '1',
    date: '2024-06-15',
    category: 'Homework',
},{
    task: '2',
    date: '2024-06-17',
    category: 'Exams',
},{
    task: '3',
    date: '2024-06-19',
    category: 'Projects',
},{
    task: '4',
    date: '2024-06-21',
    category: 'Extracurricular',
},{
    task: '5',
    date: '2024-06-23',
    category: 'Personal',
},{
  task: '6',
  date: '2024-06-22',
  category: 'Personal',
},{
  task: '7',
  date: '2024-06-21',
  category: 'Personal',
},{
  task: '8',
  date: '2024-06-20',
  category: 'Personal',
}
];

const addTaskBtn = () => {
  const taskName = document.getElementById("taskName");
  const dueDate = document.getElementById("dueDate");
  const category = document.getElementById("category");
  if (taskName.value === "" ||dueDate.value === "" ||category.value === "") {
    alert("Please fill all values");
    return;
  }
  const obj = {
    task: taskName.value,
    date: dueDate.value,
    category: category.value,
  };
  
  taskData.push(obj);
  taskName.value = "";
  dueDate.value = "";
  category.value = "Homework";
  filterCategory()
};

const filterCategory = () => {
  var tempValue = document.getElementById('filterCategory');
    const filterItems = taskData.filter(data => 
        data.category === tempValue.value || tempValue.value === "All");
        render(filterItems);
};

const filterTaskBtn = () => {
  const startDate = document.getElementById("startDate");
  const endDate = document.getElementById("endDate");
  var tempValue = document.getElementById('filterCategory');

  if(startDate.value === '' || endDate.value === ''){
    alert('Please select date range')
    return
  }
  const dateRange = taskData.filter (data => 
   data.date >= startDate.value && data.date <= endDate.value && data.category === tempValue.value
);
    render(dateRange)
    startDate.value = ''
    endDate.value = ''
}

const render = (filterData) => {
    taskList.innerHTML = "";
    filterData.forEach(function (data, ind) {
    const task = `<li>
        <span class="id">${data.task}</span>
        <span class="dueDate">${data.date}</span>
        <span class="category">${data.category}</span>
        <div class="buttonDiv">
        <button onclick="editTask(this)">Edit</button>
        <button onclick="removeTask(this)">Remove</button>
        </div>
        </li>`;
        taskList.innerHTML += task;
        });
        }

// const removeTask = (element) => {
//     const address = element.parentElement.parentElement;
// taskData.some(function(data,ind){
//     if(data.task === address.children[0].innerText){
//         console.log('value matched')
//         taskData.splice(ind, 1)
//     }   

// })
    
//         const filterItems = taskData.filter(data => 
//             data.category === element.value || element.value === "All");
//         render(filterItems);
    
//     // render(taskData)
//     // filterCategory
// }

// const editTask = (element) => {
//     const address = element.parentElement.parentElement;
//     const updatedValue = prompt('Enter Updated Value', 'Enter Updated Value')
// taskData.some(function(data,ind){
//     taskData.task = updatedValue;
//     })
//     render(taskData)
// }


render(taskData);

