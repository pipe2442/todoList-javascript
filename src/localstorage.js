import {
    projectList, projectDomLocal
} from './newproject';
const save_localstorage = () => {
    localStorage.setItem('ListaDeProyectos', JSON.stringify(projectList))

}

const get_localstorage = () => {
    
    if (localStorage.getItem('ListaDeProyectos')) {
        let test = JSON.parse(localStorage.getItem('ListaDeProyectos')) 
        console.log('si existe')
        test.forEach(t => {
            projectList.push(t)
            projectDomLocal(t)
        console.log(t)
        });


    }else {
        console.log('no existe')
    }
}

export { save_localstorage, get_localstorage }