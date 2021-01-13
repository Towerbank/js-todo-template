const todoList = document.querySelector('.todo-list');

const tasksList = [
  { id: "1", text: "выучить html", completed: true },
  { id: "2", text: "выучить css", completed: true },
  { id: "3", text: "выучить js", completed: false },
  { id: "4", text: "выучить фреймворк", completed: false },
  { id: "5", text: "написать несколько учебных проектов", completed: false },
  { id: "6", text: "пройти собеседование", completed: false },
  { id: "7", text: "получить работу", completed: false }
  ];

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
  
  newDiv.append(newInput);
  newDiv.append(newLabel);
  newDiv.append(newButton);
  newItem.append(newDiv);
  
  todoList.append(newItem);
};
  
function renderTasks() { 
  for (let task of tasksList) {
    createListItem(task);
  }
};

renderTasks(tasksList);

