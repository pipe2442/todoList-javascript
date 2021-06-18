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
    main.classList.add('container-fluid')

    const footer = document.createElement('footer');
  
    footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');
    footer.innerHTML = `
    <div class="container text-center">
      <a href='#' class='text-muted'>Footer</a>
    </div>`;
  
    contentContainer.append(header);
    contentContainer.append(main);
    contentContainer.append(footer);
    
    /* Create sidebar*/
    const newdivSelector = document.querySelector('main');
    const createDiv = document.createElement('div');
    createDiv.setAttribute('id','sidebar')
    createDiv.classList.add('row','content')
    newdivSelector.append(createDiv);
    const sidebarSelector = document.querySelector('#sidebar');
    const createDiv2 = document.createElement('div');
    createDiv2.classList.add('col-sm-3','sidenav')
    sidebarSelector.append(createDiv2);
    const createDiv3 = document.createElement('div');
    createDiv3.classList.add('col-sm-9','task');
    sidebarSelector.append(createDiv3);

    /* Create content inside sideBar*/
    const sidenavSelector = document.querySelector('.sidenav');
    const createTitle = document.createElement('h4');
    createTitle.innerText = 'Projects';
    sidenavSelector.append(createTitle);

    /* Create form */
    const createForm = document.createElement('form')
    sidenavSelector.append(createForm)
    
    const formSelector = document.querySelector('form')
    const createInputProjectName = document.createElement('input')
    createInputProjectName.setAttribute('type', 'text')
    createInputProjectName.setAttribute('id', 'projectName')
    createInputProjectName.setAttribute('placeholder', 'New Project Name')
    createInputProjectName.setAttribute('size', '15');
    formSelector.append(createInputProjectName)
    const submitProjectButton = document.createElement('input')
    submitProjectButton.setAttribute('type', 'button')
    submitProjectButton.setAttribute('value', 'add')
    submitProjectButton.setAttribute('id', 'add')
    formSelector.appendChild(submitProjectButton)

    /* Create list of projects */
    
    const createUl = document.createElement('ul')
    createUl.classList.add('nav','wi', 'nav-pills','flex-column')
    sidenavSelector.append(createUl)
    
    /* Create Todo list */
    const taskSelector = document.querySelector('.task')
    const createTitle2 = document.createElement('h4');
    createTitle2.innerText = 'Tasks';
    taskSelector.append(createTitle2);

  })();
  
  export default pageLoad;