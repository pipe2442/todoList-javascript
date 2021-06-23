import {
    projectList
} from "./newproject";
import Task from "./newtask";
import clearForm from "./clearForm";

const showTaskList = () => {
    const id2Selector = createTask.getAttribute('id2')
    const task = projectList[id2Selector].todolist
    let taskindex = 0
    const list = document.getElementById('taskqueue')
    list.innerHTML = "";
    const newdiv = document.createElement('div')

    task.forEach(function (task) {
        newdiv.innerHTML += `
        <h5 class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${taskindex}" role="button"
            aria-expanded="false" aria-controls="multiCollapseExample${taskindex}">
            ${task.title}
        </h5>
    <div class="row my-2">
        <div class="collapse multi-collapse card " id="multiCollapseExample${taskindex}">
            <div class="card-body">
            <h5>Description: ${task.description}</h5>
            <h5>Due Date: ${task.dueDate}</h5>
            <h5>Priority: ${task.priority}</h5>
            <button type="button" class="btn btn-warning" id="${taskindex}">Edit</button>
            <button type="button" class="btn btn-danger" id="${taskindex}">Delete</button>
            </div>
        </div>
    </div>
    `
        list.append(newdiv)

        taskindex++
    });

    let deleteButton = document.querySelectorAll('#taskqueue div div div button.btn-danger')
    deleteButton.forEach(function (t) {
        t.addEventListener('click', (e) => {
            projectList[id2Selector].todolist.splice(e.target.id, 1);
            showTaskList()
        });

    })

    const field1Selector = document.querySelector('#title')
    const field2Selector = document.querySelector('#description')
    const field3Selector = document.querySelector('#dueDate')
    const field4Selector = document.querySelector('#priority')

    let editButton = document.querySelectorAll('#taskqueue div div div button.btn-warning')
    editButton.forEach(function (t) {
        t.addEventListener('click', (e) => {
            let title = projectList[id2Selector].todolist[e.target.id].title
            let description = projectList[id2Selector].todolist[e.target.id].description
            let dueDate = projectList[id2Selector].todolist[e.target.id].dueDate
            let priority = projectList[id2Selector].todolist[e.target.id].priority
            field1Selector.value = title;
            field2Selector.value = description;
            field3Selector.value = dueDate;
            field4Selector.value = priority;
            const taskFormSelector = document.querySelector('#taskForm')
            const newBtn = document.createElement('input')
            newBtn.setAttribute('type', 'button')
            newBtn.setAttribute('value', 'Update')
            if (!document.querySelector("#taskForm input[value='Update']")) {
                newBtn.setAttribute('id', `${e.target.id}`)
                taskFormSelector.append(newBtn)
            } else {
                document.querySelector("#taskForm input[value='Update']").setAttribute('id', `${e.target.id}`)
            }
            
            const updateBtn = document.querySelector("input[value='Update']")
            updateBtn.addEventListener('click', (e) => {
                
                const field1 = document.querySelector('#title').value
                const field2 = document.querySelector('#description').value
                const field3 = document.querySelector('#dueDate').value
                const field4 = document.querySelector('#priority').value
                if (field1.trim() != '' && field2.trim() != ''
                && field3.trim() != '' && field4.trim() != '') {
                    const newTask = new Task(field1, field2, field3, field4);
                    projectList[id2Selector].todolist.splice(e.target.getAttribute('id'), 1, newTask);
                    showTaskList()
                    clearForm()
                    e.target.remove()
                }
                
            });
        });
    })

}

const wipeShowTask = () => {
    const list = document.getElementById('taskqueue')
    list.innerHTML = "";
}

export default showTaskList;
export {wipeShowTask}