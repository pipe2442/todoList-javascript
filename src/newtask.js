import {
    projectList
} from './newproject';
import showTaskList from './showtask';
import clearForm from './clearForm';

const newTask = () => {
    class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    
    }
    
    const field1Selector = document.querySelector('#title')
    const field2Selector = document.querySelector('#description')
    const field3Selector = document.querySelector('#dueDate')
    const field4Selector = document.querySelector('#priority')
    
    const createTask = document.querySelector('#createTask')
    
    createTask.addEventListener('click', () => {
        const id2Selector = createTask.getAttribute('id2')
        if (id2Selector != null) {
    
            const field1 = document.querySelector('#title').value
            const field2 = document.querySelector('#description').value
            const field3 = document.querySelector('#dueDate').value
            const field4 = document.querySelector('#priority').value
            
            if (field1.trim() != '' && field2.trim() != ''
            && field3.trim() != '' && field4.trim() != '') {
                const newTask = new Task(field1, field2, field3, field4);
                projectList[id2Selector].todolist.push(newTask)
                clearForm()
    
                showTaskList()
            }
        }
        
    });
}

export default newTask


