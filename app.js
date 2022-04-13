//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);

//Functions
function addTodo (event) {
    //Prevent form from submitting and refreshing. 
    event.preventDefault();

    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Creating li
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Creating the mark button
    const completedButton = document.createElement('button');
    //Adds in an icon using innerHTML instead of innerText
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);

    //Creating the trash  button
    const trashButton = document.createElement('button');
    //Adds in an icon using innerHTML instead of innerText
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);
}