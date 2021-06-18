const render = document.getElementById('content');
const formulario = document.getElementById('task');
render.innerHTML +=
'<input type="text" id="task">'
+'<button id="miboton">New Project</button>'
const list = []

const mostrar = () => {

    function Project(name) {
        this.name = name
        this.id = Math.floor(Math.random() * 100)
        this.todoList = []
    }

    list.push(new Project(task.value))
    // console.log(list)
    document.getElementById('task').value = ''

    function addProject() {
        const addList = () => {
            list[index].todoList.push(todo.value)
            console.log(list[index].todoList)
            document.getElementById('todo').value = ''
        }
        let index = list.length - 1;
        let h1 = document.createElement('h1');
        let div = document.createElement('div');
        h1.textContent = `Proyect ${list[index].name}`;
        div.innerHTML = '<input type="text" id="todo">'
        +'<button id="addTodos">New Todo</button>'
        render.appendChild(h1);
        render.appendChild(div);


    }
    addProject()

    function addTodo() {
        function Todo(title) {
            this.title = title
        }
        const todoSelector = document.getElementById('todo').value
        const newTodo = new Todo(todoSelector)

        
        list[0].todoList.push(newTodo) 
        console.log(list)

    }
    document.getElementById('addTodos').onclick = addTodo
}

document.getElementById('miboton').onclick = mostrar ;

