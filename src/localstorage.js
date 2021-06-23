import {
    projectList, projectDomLocal
} from './newproject';
const save_localstorage = () => {
    localStorage.setItem('ListaDeProyectos', JSON.stringify(projectList))
}

const get_localstorage = () => {
    
    if (localStorage.getItem('ListaDeProyectos')) {
        let test = JSON.parse(localStorage.getItem('ListaDeProyectos')) 
        test.forEach(t => {
            projectList.push(t)
            projectDomLocal(t)
        });
    }
}

export { save_localstorage, get_localstorage }