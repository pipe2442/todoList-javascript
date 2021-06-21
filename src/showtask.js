import {
    projectList
} from "./newproject";

const showTaskList = () => {
    const id2Selector = createTask.getAttribute('id2')
    const task = projectList[id2Selector].todolist
    let taskindex = 0
    const list = document.getElementById('taskqueue')
    list.innerHTML = "";

    task.forEach(function (task) {
        const newdiv = document.createElement('div')
        newdiv.innerHTML += `
        <h5 class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample${taskindex}" role="button"
            aria-expanded="false" aria-controls="multiCollapseExample${taskindex}">
            ${task.title}
        </h5>
    <div class="row">
        <div class="collapse multi-collapse" id="multiCollapseExample${taskindex}">
            <div>
            <h5>Description: ${task.description}</h5>
            <h5>Due Date: ${task.dueDate}</h5>
            <h5>Priority: ${task.priority}</h5>
            <button type="button" class="btn btn-danger" id="${taskindex}">Delete</button>
            </div>
        </div>
    </div>
    `  
        list.append(newdiv)
        finalTasklist.append(list)
        let deletebuttonfinal = document.querySelectorAll('#taskqueue div div div button')
        deletebuttonfinal.forEach(function (t) {
            t.addEventListener('click', (e) => { 
                projectList[id2Selector].todolist.splice(e.target.id, 1);
                newdiv.remove()
            });            
        })
        
        taskindex++
        
    });

}



const wipeShowTask = () => {
    const list = document.getElementById('taskqueue')
    list.innerHTML = "";
}

export default showTaskList;
export {wipeShowTask}