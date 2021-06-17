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
    console.log(list)
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
        +'<button id="addTodo" onclick="addList">New Todo</button>'
        render.appendChild(h1);
        render.appendChild(div);
    }

    addProject()
    
}



document.getElementById('miboton').onclick = mostrar ;