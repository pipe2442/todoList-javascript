import showTaskList from './showtask';

class Project {
  constructor(name) {
    this.name = name
    this.todolist = [];
  }
}

let projectList = []

const addButton = document.querySelector('#add');
const getProjectName = document.querySelector('#projectName')

addButton.addEventListener('click', () => {

  if (getProjectName.value.length > 0) {
    const newProjects = new Project(getProjectName.value);
    projectList.push(newProjects)
    const index = projectList.length - 1
    const ulSelector = document.querySelector('.wi')
    const createLi = document.createElement('li')
    createLi.classList.add('nav-item', 'my-1')
    const createAnchorTag = document.createElement('a')
    createAnchorTag.setAttribute('href', '#')
    createAnchorTag.classList.add('nav-link')
    createAnchorTag.innerText = newProjects.name;
    createAnchorTag.setAttribute('id', index)
    ulSelector.append(createLi)
    const liSelector = document.querySelector('.sidenav ul li:last-child')
    liSelector.appendChild(createAnchorTag)
    getProjectName.value = "";

    const projectSelector = document.getElementById(`${index}`)
    const createTask = document.getElementById('createTask')
    const list = document.getElementById('taskqueue')

    projectSelector.addEventListener('click', () => {
      createTask.setAttribute('id2', `${index}`)
      list.setAttribute('id2', `${index}`)
      showTaskList()
    });
    
  }

});

export {projectList};