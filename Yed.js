let todo = "";


const body = document.querySelector('body')
const todoList = document.querySelector("#TodoList");



document.querySelector("#whatever").addEventListener("submit", function(event) {
    event.preventDefault();
    todo = todoList.value;
    let template =
`
    <h1>Add a Todo</h1>
    <form id="whatever">
    <label>Add Todo</label>
    <input id="TodoList"type="text">
    <button type="submit">submit</button>
    </form>
    <header> <h1>Things I need to do</h1></header>
    <ol>
    <h2>  ${todo} <button> Complete Todo</button><button> Delete Todo</button></h2>
    </ol>
`
body.innerHTML = template;

    
})

const compButton = document.querySelector('#com');
const delButton = document.querySelector('#del');

compButton.addEventListener('click', responseToClick)

function responseToClick() {
    const htag = document.createElement('h3');
    htag.textContent = todo.text-decoration-line; line-through;
    body.appendChild(htag);
}


delButton.addEventListener('click', responseToClick)

function responseToClick() {
    const htag = document.createElement('h3');
    htag.textContent = todo.text-decoration-line; line-through;
    body.appendChild(htag);
}