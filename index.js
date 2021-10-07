function toDo (txt) {

    // CONFIGURATION
    const toDoTask = document.createElement('div')
        toDoTask.className = ('todo')

    const checkBox = document.createElement('input')
        checkBox.type = ('checkbox')

    const writeTask = document.createElement('p')
        writeTask.innerHTML = txt
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


        closedTask.addEventListener('click', function() {
            if (!checkBox.checked) {
                confirm("Tâche non accomplie, SUPPRIMER ?")
                toDoTask.remove();
            } else {
                toDoTask.remove();
            }  
        })
}

const tacheAFaire = document.querySelector('input')
const ajouterTask = document.querySelector('input + input')

ajouterTask.addEventListener('click', function () {
    const maTache = tacheAFaire.value;
    if (maTache.length > 4 ) {
        toDo(maTache);
        tacheAFaire.value = "";
        tacheAFaire.focus();
    }
})





