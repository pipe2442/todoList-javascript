import { projectList } from "./newproject";


const showTaskList = () => {

    const test = projectList[0].todolist.length
    //console.log(test)

    const list = document.getElementById('taskqueue')
    list.innerHTML = `<h3> esto es el array ${

        test.forEach(console.log('hello'))}
    
    }</h3>`
    finalTasklist.append(list)
}

export default showTaskList;