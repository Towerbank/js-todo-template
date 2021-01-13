const todoList = document.querySelector('.todo-list');

const task = {
  id: "1",
  text: "выучить html",
  completed: true
}

// Прошлый код
function createListItem() {

  let newItem = document.createElement('li');
  newItem.classList.add('editing');

  let newDiv = document.createElement('div');

  let newInput = document.createElement('input');	 
  newInput.classList.add('toggle');	    
  newInput.setAttribute('type', 'radio');

  let newLabel = document.createElement('label');
  newLabel.textContent = 'выучить html';

  let newButton = document.createElement('button'); 
  newButton.classList.add('todo-count');	

  newDiv.append(newInput);	
  newDiv.append(newLabel);	
  newDiv.append(newButton);	
  newItem.append(newDiv);	

  todoList.append(newItem);	

};

createListItem();	

let renderTask = function () { 	

}	
