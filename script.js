var taskData = [
  {
      task: 'Attend Math Lecture',
      date: '2024-06-15',
      category: 'Homework',
  },{
      task: 'Study for History Exam',
      date: '2024-06-17',
      category: 'Exams',
  },{
      task: 'Work on Science Project',
      date: '2024-06-19',
      category: 'Projects',
  },{
      task: 'Practice Football',
      date: '2024-06-21',
      category: 'Extracurricular',
  },{
      task: 'Read a Book',
      date: '2024-06-23',
      category: 'Personal',
  },{
      task: 'Go for a Run',
      date: '2024-06-22',
      category: 'Personal',
  },{
      task: 'Attend Music Class',
      date: '2024-06-21',
      category: 'Personal',
  },{
      task: 'Write in Journal',
      date: '2024-06-20',
      category: 'Personal',
  },{
      task: 'Complete Math Assignment',
      date: '2024-06-16',
      category: 'Personal',
  },{
      task: 'Prepare for Science Presentation',
      date: '2024-06-18',
      category: 'Projects',
  },{
      task: 'Research for History Paper',
      date: '2024-06-20',
      category: 'Homework',
  },{
      task: 'Attend Physics Lab',
      date: '2024-06-15',
      category: 'Projects',
  },{
      task: 'Read for English Literature',
      date: '2024-06-17',
      category: 'Homework',
  },{
      task: 'Practice for Soccer Match',
      date: '2024-06-19',
      category: 'Extracurricular',
  },{
      task: 'Study for Biology Test',
      date: '2024-06-21',
      category: 'Exams',
  },{
      task: 'Attend Photography Workshop',
      date: '2024-06-22',
      category: 'Personal',
  },{
      task: 'Write Poetry',
      date: '2024-06-21',
      category: 'Personal',
  },{
      task: 'Create Art Project',
      date: '2024-06-20',
      category: 'Projects',
  },{
      task: 'Plan for Vacation',
      date: '2024-06-16',
      category: 'Personal',
  },{
      task: 'Practice Guitar',
      date: '2024-06-18',
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
        <span class="id${ind + 1}">${ind + 1}</span>
        <span class="task">${data.task}</span>
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

const removeTask = (element) => {
    const address = element.parentElement.parentElement;
  taskData.some(function(data,ind){
    if(data.task === address.children[1].innerText && data.category === address.children[3].innerText){
        taskData.splice(ind, 1)
    }   
});
render(taskData)
}

const editTask = (element) => {
    const address = element.parentElement.parentElement.children;
    document.getElementById("taskName").value = address[1].innerText;
    document.getElementById("dueDate").value = address[2].innerText;
    document.getElementById("category").value = address[3].innerText;
    taskData.some(function(data,ind){
      if(data.task === address[1].innerText && data.category === address[3].innerText){
        taskData.splice(ind, 1);
      }
  })
}


document.getElementById('nameDown').addEventListener('click', ()  => {
  taskData.sort((a, b) => (a.task > b.task ? 1 : -1));
  render(taskData)
});

document.getElementById('nameUp').addEventListener('click', () => {
  taskData.sort((a, b) => (a.task > b.task ? -1 : 1));
  render(taskData)
});

document.getElementById('dateDown').addEventListener('click', ()  => {
  taskData.sort((a, b) => (a.date > b.date ? 1 : -1));
  render(taskData)
});

document.getElementById('dateUp').addEventListener('click', () => {
  taskData.sort((a, b) => (a.date > b.date ? -1 : 1));
  render(taskData)
});

document.getElementById('categoryDown').addEventListener('click', ()  => {
  taskData.sort((a, b) => (a.category > b.category ? 1 : -1));
  render(taskData)
});

document.getElementById('categoryUp').addEventListener('click', () => {
  taskData.sort((a, b) => (a.category > b.category ? -1 : 1));
  render(taskData)
});


render(taskData);