const TODOS_KEY = "todos"
const todosStorage = localStorage.getItem(TODOS_KEY);
let todos = [];

class Todo {
    constructor (txt) {
        this.txt = txt;
        this.done = false;
    }
}

if ("localStorage" in window && todosStorage && todosStorage.length) {
    todos = JSON.parse(todosStorage);
    for (let todo of todos) {
        createTodo(todo);
    }
}

function createTodo (todo) {

    // CONFIGURATION
    const toDoTask = document.createElement('div');
        toDoTask.className = ('todo');

    const checkBox = document.createElement('input');
        checkBox.type = ('checkbox');
        checkBox.checked = todo.done;

    const writeTask = document.createElement('p')
        writeTask.innerText = todo.txt
        writeTask.className = ('a-faire')

    const closedTask = document.createElement('button')
        closedTask.innerHTML = "&times"
        closedTask.className = ('fait')

    // IMBRICATION
    toDoTask.appendChild(checkBox);
    toDoTask.appendChild(writeTask);
    toDoTask.appendChild(closedTask);

    // INJECTION DANS LE DOM
    document
        .querySelector('.todos')
        .appendChild(toDoTask);


        closedTask.addEventListener('click', () => updateTodos(todo, toDoTask));

        checkBox.addEventListener('change', updateTodoState.bind({},todo));
}

function updateTodoState(todo) {
    todo.done = !todo.done;
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function updateTodos(todo, el) {
    if (todo.done || confirm("Veux-tu vraiment supprimer la tâche ?"))  {
        todos.splice(todos.indexOf(todo), 1);
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        el.remove();
    }
}


const tacheAFaire = document.getElementById("tache")
const ajouterTask = document.getElementById("ajouterButton")

ajouterTask.addEventListener('click', function () {
    const maTache = tacheAFaire.value;
    if (maTache.length >= 4 ) {
        const todo = new Todo(maTache);
        createTodo(todo);
        todos.push(todo);
        localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
        tacheAFaire.value = "";
        tacheAFaire.focus();
    }
})

document.getElementById("tache")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("ajouterButton").click();
    }
});




