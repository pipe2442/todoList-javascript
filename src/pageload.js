const pageLoad = (() => {
  const contentContainer = document.querySelector('body');
  const header = document.createElement('header');
  header.innerHTML = `
  <nav class="navbar navbar-expand navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id="home-link">To-Do List</a>
        </li>
      </ul>
      </div>
  </div>
  </nav>
  `;
  const main = document.createElement('main');
  main.setAttribute('id', 'content');
  main.classList.add('container-fluid');

  const footer = document.createElement('footer');

  footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');
  footer.innerHTML = `
  <div class="container text-center">
    <p class='text-muted'>For more content like this check on my Github profile: 
      <a class='text-decoration-none' href='https://github.com/carloso0114'> Carlos Ospina</a>
    </p>
  </div>`;

  contentContainer.append(header);
  contentContainer.append(main);
  contentContainer.append(footer);

  /* Create sidebar */
  const newdivSelector = document.querySelector('main');
  const createDiv = document.createElement('div');
  createDiv.setAttribute('id', 'sidebar');
  createDiv.classList.add('row', 'content');
  newdivSelector.append(createDiv);
  const sidebarSelector = document.querySelector('#sidebar');
  const createDiv2 = document.createElement('div');
  createDiv2.classList.add('col-sm-4', 'sidenav');
  sidebarSelector.append(createDiv2);
  const createDiv3 = document.createElement('div');
  createDiv3.classList.add('col-sm-4', 'task');
  sidebarSelector.append(createDiv3);

  /* Create content inside sideBar */
  const sidenavSelector = document.querySelector('.sidenav');
  const createTitle = document.createElement('h4');
  createTitle.classList.add('text-center');
  createTitle.innerText = 'Projects';
  sidenavSelector.append(createTitle);

  /* Create form */
  const createForm = document.createElement('form');
  sidenavSelector.append(createForm);

  const formSelector = document.querySelector('form');
  const createInputProjectName = document.createElement('input');
  const submitProjectButton = document.createElement('input');
  submitProjectButton.setAttribute('type', 'button');
  submitProjectButton.setAttribute('value', 'Create');
  submitProjectButton.setAttribute('id', 'add');
  submitProjectButton.classList.add('mx-1');
  createInputProjectName.setAttribute('type', 'text');
  createInputProjectName.setAttribute('id', 'projectName');
  createInputProjectName.setAttribute('placeholder', 'New Project Name');
  createInputProjectName.setAttribute('size', '15');
  createInputProjectName.classList.add('my-1');
  formSelector.append(createInputProjectName);

  formSelector.appendChild(submitProjectButton);
  /* Create list of projects */

  const createUl = document.createElement('ul');
  createUl.classList.add('nav', 'wi', 'nav-pills', 'flex-column');
  sidenavSelector.append(createUl);

  /* Create tasks */
  const taskSelector = document.querySelector('.task');
  const createTitle2 = document.createElement('h4');
  createTitle2.innerText = 'Tasks';
  createTitle2.classList.add('text-center');
  taskSelector.append(createTitle2);
  const taskForm = document.createElement('div');
  taskForm.innerHTML = `<form id="taskForm">
    <label for="title">Title:</label><br>
    <input type="text" id="title"><br>
    <label for="description">Description:</label><br>
    <input type="text" id="description"><br>
    <label for="dueDate">Due Date:</label><br>
    <input type="date" id="dueDate"><br>
  
    <label for="priority">Priority:</label><br>
    <select name="priority" id="priority">
      <option value="low">low</option>
      <option value="medium">medium</option>
      <option value="urgent">urgent</option>
    </select><br>
  
    <button type="button" class="btn btn-primary mt-2" id="createTask" >Add task</button>
    </br>
    </br>
  </form> 
  `;
  taskSelector.append(taskForm);

  /* Create tasks lists */
  const createDiv4 = document.createElement('div');
  createDiv4.classList.add('col-sm-4');
  createDiv4.setAttribute('id', 'finalTasklist');
  sidebarSelector.append(createDiv4);
  createDiv4.innerHTML = `
  <h4 class="text-center">Task List</h4>
  <div id="taskqueue"></div>`;
})();

export default pageLoad;