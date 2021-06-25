/* eslint-disable import/no-cycle */
import { projectList } from './newproject';
import Task from './newtask';
import clearForm from './clearForm';
import { saveLocalstorage } from './localstorage';

const showTaskList = () => {
  const createTask = document.getElementById('createTask');
  const id2Selector = createTask.getAttribute('id2');
  const task = projectList[id2Selector].todolist;
  let taskindex = 0;
  const list = document.getElementById('taskqueue');
  list.innerHTML = '';
  const newdiv = document.createElement('div');

  task.forEach((task) => {
    let color;
    if (task.priority === 'low') {
      color = 'btn-primary';
    } else if (task.priority === 'medium') {
      color = 'btn-warning';
    } else if (task.priority === 'urgent') {
      color = 'btn-danger';
    } else if (task.priority === 'completed') {
      color = 'btn-success';
    }

    newdiv.innerHTML += `
        <h5 class="btn ${color}" data-bs-toggle="collapse" href="#multiCollapseExample${taskindex}" role="button"
            aria-expanded="false" aria-controls="multiCollapseExample${taskindex}">
            ${task.title}
        </h5>
        <div class="row my-2">
            <div class="collapse multi-collapse" id="multiCollapseExample${taskindex}">
                <div class="card-body text-center">
                    <h5 id="theDescription">Description: ${task.description}</h5>
                    <h5>Due Date: ${task.dueDate}</h5>
                    <button type="button" class="btn btn-warning" id="${taskindex}">Edit</button>
                    <button type="button" class="btn btn-danger" id="${taskindex}">Delete</button>
                    <button type="button" class="btn btn-success" id="${taskindex}">Complete</button>
                </div>
            </div>
        </div>
        `;
    list.append(newdiv);
    const completeBtn = document.querySelectorAll('button.btn-success');
    completeBtn.forEach((t) => {
      t.addEventListener('click', () => {
        projectList[id2Selector].todolist[t.id].priority = 'completed';
        saveLocalstorage();
        showTaskList();
      });
    });

    taskindex += 1;
  });

  const deleteButton = document.querySelectorAll('#taskqueue div div div button.btn-danger');
  deleteButton.forEach((t) => {
    t.addEventListener('click', (e) => {
      projectList[id2Selector].todolist.splice(e.target.id, 1);
      saveLocalstorage();
      showTaskList();
    });
  });

  const field1Selector = document.querySelector('#title');
  const field2Selector = document.querySelector('#description');
  const field3Selector = document.querySelector('#dueDate');
  const field4Selector = document.querySelector('#priority');

  const editButton = document.querySelectorAll('#taskqueue div div div button.btn-warning');
  editButton.forEach((t) => {
    t.addEventListener('click', (e) => {
      const { title } = projectList[id2Selector].todolist[e.target.id];
      const { description } = projectList[id2Selector].todolist[e.target.id];
      const { dueDate } = projectList[id2Selector].todolist[e.target.id];
      const { priority } = projectList[id2Selector].todolist[e.target.id];
      field1Selector.value = title;
      field2Selector.value = description;
      field3Selector.value = dueDate;
      field4Selector.value = priority;
      const taskFormSelector = document.querySelector('#taskForm');
      const newBtn = document.createElement('input');
      newBtn.setAttribute('type', 'button');
      newBtn.setAttribute('value', 'update');
      newBtn.classList.add('btn', 'btn-primary');
      if (!document.querySelector("#taskForm input[value='update']")) {
        newBtn.setAttribute('id', `${e.target.id}`);
        taskFormSelector.appendChild(newBtn);
      } else {
        document.querySelector("#taskForm input[value='update']").setAttribute('id', `${e.target.id}`);
      }

      const updateBtn = document.querySelector("input[value='update']");
      updateBtn.addEventListener('click', (e) => {
        const field1 = document.querySelector('#title').value;
        const field2 = document.querySelector('#description').value;
        const field3 = document.querySelector('#dueDate').value;
        const field4 = document.querySelector('#priority').value;
        if (field1.trim() !== '' && field2.trim() !== ''
                    && field3.trim() !== '' && field4.trim() !== '') {
          const newTask = new Task(field1, field2, field3, field4);
          projectList[id2Selector].todolist.splice(e.target.getAttribute('id'), 1, newTask);
          saveLocalstorage();
          showTaskList();
          clearForm();
          e.target.remove();
        }
      });
    });
  });
};

const wipeShowTask = () => {
  const list = document.getElementById('taskqueue');
  list.innerHTML = '';
};

export default showTaskList;
export { wipeShowTask };