import { projectList } from "./newproject";



const showTaskList = () => {
    const id2Selector = createTask.getAttribute('id2')
    const array = projectList[id2Selector].todolist
    const list = document.getElementById('taskqueue')
    list.innerHTML = "";
    array.forEach(function(array) {
        list.innerHTML += `
        <h5>${array.title}</h5>
        <h5>${array.description}</h5>
        <h5>${array.dueDate}</h5>
        <h5>${array.priority}</h5>
        `
        finalTasklist.append(list)
    });

}

export default showTaskList;

