/* eslint-disable import/no-cycle */
import { projectList, projectDomLocal, Project } from './newproject';

const saveLocalstorage = () => {
  localStorage.setItem('ListaDeProyectos', JSON.stringify(projectList));
};

const getLocalstorage = () => {
  if (localStorage.getItem('ListaDeProyectos')) {
    const getTask = JSON.parse(localStorage.getItem('ListaDeProyectos'));
    getTask.forEach((t) => {
      projectList.push(t);
      projectDomLocal(t);
    });
  } else {
    const defaultProject = new Project('Default Project');
    projectList.push(defaultProject);
    projectDomLocal(defaultProject);
  }
};

export { saveLocalstorage, getLocalstorage };