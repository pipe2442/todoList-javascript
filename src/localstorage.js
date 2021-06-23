import {
    projectList
} from './newproject';
import projectDomLocal from './newproject';
const save_localstorage = () => {
    localStorage.setItem('ListaDeProyectos', JSON.stringify(projectList))

}

//save_localstorage()

const get_localstorage = () => {
    
    if (localStorage.getItem('ListaDeProyectos')) {
        let test = JSON.parse(localStorage.getItem('ListaDeProyectos'))

        console.log('si existe')
        test.forEach(t => {
            projectList.push(t)
            console.log('hola mundo')
            projectDomLocal(t)

        });


    }else {
        console.log('no existe')
    }
}

//get_localstorage()

export { save_localstorage, get_localstorage }
