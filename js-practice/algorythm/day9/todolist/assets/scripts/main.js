let input = document.getElementById('adding-task-input');

let addTaskButton = document.getElementById('adding-task-button');

let tasks = document.getElementById('tasks');

let tasksAmountQuantity = document.getElementById('tasks-amount-quantity');

let clearAllButton = document.getElementById('clear-all-button');
addTaskButton.addEventListener('click', function () {
    let task = document.createElement('div');
    task.setAttribute('class', 'task');
    task.innerText = input.value;

    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteButton.setAttribute('class', 'delete-task');

    deleteButton.setAttribute('id','delete-task');

    deleteButton.addEventListener('click',function(){
      let allowToDelete = confirm('Are you sure to delete?');
      if(allowToDelete){
        this.closest('.task').remove();
        tasksAmountQuantity.innerText = Number(tasksAmountQuantity.innerText) - 1;
      }
      
    });

    task.appendChild(deleteButton);

    tasks.appendChild(task);

    input.value = "";

    tasksAmountQuantity.innerText = Number(tasksAmountQuantity.innerText) + 1;

    if(Number(tasksAmountQuantity.innerText) > 0){
        document.getElementById('tasks-amount').style.display = 'block';
        document.getElementById('no-todo-item').style.display = 'none';
    }
});

clearAllButton.addEventListener('click',function(){
    tasks.innerHTML = "";
    tasksAmountQuantity.innerText = 0;
    if(tasksAmountQuantity.innerText == 0){
        document.getElementById('tasks-amount').style.display = 'none';
        document.getElementById('no-todo-item').style.display = 'block';
        alert('No ToDo item');
      }
    
});
