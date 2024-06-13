const taskData = [];
// const filterCategory = document.getElementById('filterCategory');
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const filterTaskBtn = document.getElementById("filterTaskBtn");
const taskList = document.getElementById("taskList");

const addTaskBtn = (element) => {
  const taskName = document.getElementById("taskName");
  const dueDate = document.getElementById("dueDate");
  const category = document.getElementById("category");
  console.log("abc");
  if (taskName.value === "" || dueDate.value === "" || category.value === "") {
    alert("Please fill all values");
    return alert;
  }

  const obj = {
    task: taskName.value,
    date: dueDate.value,
    category: category.value,
  };
  taskData.push(obj);
  console.log("push ho raha hai");
  // render(taskData)

  taskName.value = "";
  dueDate.value = "";
  category.value = "Homework";
};
const render = (filterData) => {
    taskList.innerHTML = "";
    console.log("filter All chal raha hai");
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
        
        
const filterCategory = (ele) => {
  const filterItems = taskData.filter = ((data) => ele.value === data.category);
  render(filterItems);
};
