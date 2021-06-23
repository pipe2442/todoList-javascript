import {
    projectList
} from './newproject';
const save_localstorage = () => {
    class Project {
        constructor(name) {
          this.name = name
          this.todolist = [];
        }
      }
      class Task {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }
    // addProject()
    projectList.push(new Project('Carro'))
    projectList[0].todolist.push(new Task('Comprar llantas','Todo Terreno','SIN FECHA','low'))

    // projectArray.push(new Project('Motos'))
    localStorage.setItem('ListaDeProyectos', JSON.stringify(projectList))
}
    save_localstorage()

const get_localstorage = () => {
    if (localStorage.getItem('ListaDeProyectos')) {
        let test = JSON.parse(localStorage.getItem('ListaDeProyectos'))
        // let test = localStorage.getItem('ListaDeProyectos')
        // console.log(test)
        // const ulwiSelector = document.querySelector('ul.wi')
        // ulwiSelector.append(JSON.stringify(test))
    }
}
    get_localstorage()


