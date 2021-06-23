import showTaskList from './showtask';
import wipeShowTask from './showtask';
import clearForm from './clearForm';
import {
  save_localstorage, get_localstorage
} from './localstorage';

class Project {
  constructor(name) {
    this.name = name
    this.todolist = [];
  }
}

let projectList = []

const addButton = document.querySelector('#add');
const getProjectName = document.querySelector('#projectName')

const projectDom = () => {
  if (getProjectName.value.trim() != '') {
    const newProjects = new Project(getProjectName.value);
    projectList.push(newProjects)
    
    save_localstorage()

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
    createTask.setAttribute('id2', `${index}`)
    
    let activeSelector = document.querySelectorAll(".sidenav ul li a.active");
    activeSelector.forEach(function (t) {
      if (t.classList.contains('active')){
      t.classList.remove('active')
      }
    })

    const lastaSelector = document.querySelector('.sidenav ul li:last-child a:last-child')
    lastaSelector.classList.toggle('active')
    clearForm()
    wipeShowTask()
  
    /* Al clickear un proyecto ocurre */ 
    projectSelector.addEventListener('click', () => {
      createTask.setAttribute('id2', `${index}`)
      list.setAttribute('id2', `${index}`)

      var activeSelector = document.querySelectorAll(".sidenav ul li a.active");
      activeSelector.forEach(function (t) {
        if (t.classList.contains('active')){
        t.classList.remove('active')
        }
      })

      lastaSelector.classList.add('active')
      
      showTaskList()
      
    });   
  }
}

addButton.addEventListener('click', () => {
  projectDom()
});

const projectDomLocal = (t) => {
  const newProjects = t;

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
  createTask.setAttribute('id2', `${index}`)

  projectSelector.addEventListener('click', (e) => {
    createTask.setAttribute('id2', `${index}`)
    list.setAttribute('id2', `${index}`)
    var activeSelector = document.querySelectorAll(".sidenav ul li a");
    activeSelector.forEach(function (t) {
      if (t.classList.contains('active')){
        t.classList.remove('active')
      }
    e.target.classList.add('active')
    })
    showTaskList()
    
  })
}

get_localstorage() 

export {projectList, projectDomLocal};