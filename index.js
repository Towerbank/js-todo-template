const todoList = document.querySelector('.todo-list');

const task = {
  id: "1",
  text: "выучить html",
  completed: true
  };

function createListItem(task) {

  const newItem = document.createElement('li');
  newItem.classList.add('editing');
  newItem.setAttribute('id', task.id)
  
  const newDiv = document.createElement('div');

  const newInput = document.createElement('input');
  newInput.classList.add('toggle');
  newInput.setAttribute('type', 'checkbox');
  newInput.checked = task.completed;
  
  const newLabel = document.createElement('label');
  newLabel.innerHTML = task.text;
  
  const newButton = document.createElement('button');
  newButton.classList.add('destroy');
  
  newDiv.appendChild(newInput);
  newDiv.appendChild(newLabel);
  newDiv.appendChild(newButton);
  newItem.appendChild(newDiv);
  
  todoList.appendChild(newItem);
};
  
function renderTask() { 
  createListItem(task)
};

renderTask(task)