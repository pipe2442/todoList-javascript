/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const render = document.getElementById('content');\r\nconst formulario = document.getElementById('task');\r\nrender.innerHTML +=\r\n'<input type=\"text\" id=\"task\">'\r\n+'<button id=\"miboton\">New Project</button>'\r\nconst list = []\r\n\r\nconst mostrar = () => {\r\n\r\n    function Project(name) {\r\n        this.name = name\r\n        this.id = Math.floor(Math.random() * 100)\r\n        this.todoList = []\r\n    }\r\n\r\n    list.push(new Project(task.value))\r\n    // console.log(list)\r\n    document.getElementById('task').value = ''\r\n\r\n    function addProject() {\r\n        const addList = () => {\r\n            list[index].todoList.push(todo.value)\r\n            console.log(list[index].todoList)\r\n            document.getElementById('todo').value = ''\r\n        }\r\n        let index = list.length - 1;\r\n        let h1 = document.createElement('h1');\r\n        let div = document.createElement('div');\r\n        h1.textContent = `Proyect ${list[index].name}`;\r\n        div.innerHTML = '<input type=\"text\" id=\"todo\">'\r\n        +'<button id=\"addTodos\">New Todo</button>'\r\n        render.appendChild(h1);\r\n        render.appendChild(div);\r\n\r\n\r\n    }\r\n    addProject()\r\n\r\n    function addTodo() {\r\n        function Todo(title) {\r\n            this.title = title\r\n        }\r\n        const todoSelector = document.getElementById('todo').value\r\n        const newTodo = new Todo(todoSelector)\r\n\r\n        \r\n        list[0].todoList.push(newTodo) \r\n        console.log(list)\r\n\r\n    }\r\n    document.getElementById('addTodos').onclick = addTodo\r\n}\r\n\r\ndocument.getElementById('miboton').onclick = mostrar ;\r\n\r\n\n\n//# sourceURL=webpack://todoJavascript/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;