import {
    projectList
} from './newproject';
class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}
const taskForm = document.createElement('div')
const taskSelector = document.querySelector('.task');
taskForm.innerHTML = `<form id="taskForm">
  <label for="title">Title:</label><br>
  <input type="text" id="title"><br>
  <label for="description">Description:</label><br>
  <input type="text" id="description"><br>
  <label for="dueDate">Due Date:</label><br>
  <input type="text" id="dueDate"><br>
  <label for="priority">Priority:</label><br>
  <input type="text" id="priority"><br><br>
  <button type="button" class="btn btn-primary" id="createTask" >Add task</button>
</form> 
`
taskSelector.append(taskForm)
const createTask = document.querySelector('#createTask')
createTask.addEventListener('click', () => {
    const id2Selector = createTask.getAttribute('id2')
    if (id2Selector != null) {
        const field1Selector = document.querySelector('#title')
        const field2Selector = document.querySelector('#description')
        const field3Selector = document.querySelector('#dueDate')
        const field4Selector = document.querySelector('#priority')
        const field1 = document.querySelector('#title').value
        const field2 = document.querySelector('#description').value
        const field3 = document.querySelector('#dueDate').value
        const field4 = document.querySelector('#priority').value
        const newTask = new Task(field1, field2, field3, field4);
        projectList[id2Selector].todolist.push(newTask)
        field1Selector.value = "";
        field2Selector.value = "";
        field3Selector.value = "";
        field4Selector.value = "";
        console.log(projectList)
    }
});

export default Task