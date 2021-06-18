class Project {
  constructor(name) {
    this.name = name
    this.todolist = [];
  }
}

const projectList = []

const addButton = document.querySelector('#add');
const getProjectName = document.querySelector('#projectName')

addButton.addEventListener('click', () => {
  if (getProjectName.value.length > 0) {
    let newProjects = new Project(getProjectName.value);
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
    console.log(projectList)

    const projectSelector = document.getElementById(`${index}`)
    const taskForm = document.createElement('div')
    projectSelector.addEventListener('click', () => {
      console.log(index)
      const taskSelector = document.querySelector('.task');
      taskForm.innerHTML = `<form id="taskForm">
      <label for="fname">Title:</label><br>
      <input type="text" id="title" name="fname"><br>
      <label for="lname">Description:</label><br>
      <input type="text" id="description" name="lname"><br>
      <label for="lname">Due Date:</label><br>
      <input type="text" id="dueDate" name="lname"><br>
      <label for="lname">Priority:</label><br>
      <input type="text" id="priority" name="lname"><br><br>
    </form> 
    `
    
      taskSelector.append(taskForm)
    });



  }

});

export default Project;