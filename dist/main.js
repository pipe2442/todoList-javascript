/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clearForm.js":
/*!**************************!*\
  !*** ./src/clearForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst field1Selector = document.querySelector('#title');\nconst field2Selector = document.querySelector('#description');\nconst field3Selector = document.querySelector('#dueDate');\nconst field4Selector = document.querySelector('#priority');\n\nconst clearForm = () => {\n  field1Selector.value = '';\n  field2Selector.value = '';\n  field3Selector.value = '';\n  field4Selector.value = 'low';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearForm);\n\n//# sourceURL=webpack://todoJavascript/./src/clearForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtask */ \"./src/newtask.js\");\n/* eslint-disable no-unused-vars */\n\n\n\n\n\n//# sourceURL=webpack://todoJavascript/./src/index.js?");

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveLocalstorage\": () => (/* binding */ saveLocalstorage),\n/* harmony export */   \"getLocalstorage\": () => (/* binding */ getLocalstorage)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* eslint-disable import/no-cycle */\n\n\nconst saveLocalstorage = () => {\n  localStorage.setItem('ListaDeProyectos', JSON.stringify(_newproject__WEBPACK_IMPORTED_MODULE_0__.projectList));\n};\n\nconst getLocalstorage = () => {\n  if (localStorage.getItem('ListaDeProyectos')) {\n    const getTask = JSON.parse(localStorage.getItem('ListaDeProyectos'));\n    getTask.forEach((t) => {\n      _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList.push(t);\n      (0,_newproject__WEBPACK_IMPORTED_MODULE_0__.projectDomLocal)(t);\n    });\n  } else {\n    const defaultProject = new _newproject__WEBPACK_IMPORTED_MODULE_0__.Project('Default Project');\n    _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList.push(defaultProject);\n    (0,_newproject__WEBPACK_IMPORTED_MODULE_0__.projectDomLocal)(defaultProject);\n  }\n};\n\n\n\n//# sourceURL=webpack://todoJavascript/./src/localstorage.js?");

/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"projectDomLocal\": () => (/* binding */ projectDomLocal),\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _showtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showtask */ \"./src/showtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.todolist = [];\n  }\n}\n\nconst projectList = [];\n\nconst addButton = document.querySelector('#add');\nconst getProjectName = document.querySelector('#projectName');\n\nconst projectDom = () => {\n  if (getProjectName.value.trim() !== '') {\n    const newProjects = new Project(getProjectName.value);\n    projectList.push(newProjects);\n\n    (0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.saveLocalstorage)();\n\n    const index = projectList.length - 1;\n    const ulSelector = document.querySelector('.wi');\n    const createLi = document.createElement('li');\n    createLi.classList.add('nav-item', 'my-1');\n    const createAnchorTag = document.createElement('a');\n    createAnchorTag.setAttribute('href', '#');\n    createAnchorTag.classList.add('nav-link');\n    createAnchorTag.innerText = newProjects.name;\n\n    createAnchorTag.setAttribute('id', index);\n    ulSelector.append(createLi);\n    const liSelector = document.querySelector('.sidenav ul li:last-child');\n    liSelector.appendChild(createAnchorTag);\n    getProjectName.value = '';\n\n    const projectSelector = document.getElementById(`${index}`);\n    const createTask = document.getElementById('createTask');\n    const list = document.getElementById('taskqueue');\n    createTask.setAttribute('id2', `${index}`);\n\n    const activeSelector = document.querySelectorAll('.sidenav ul li a.active');\n    activeSelector.forEach((t) => {\n      if (t.classList.contains('active')) {\n        t.classList.remove('active');\n      }\n    });\n\n    const lastaSelector = document.querySelector('.sidenav ul li:last-child a:last-child');\n    lastaSelector.classList.toggle('active');\n    (0,_clearForm__WEBPACK_IMPORTED_MODULE_1__.default)();\n    (0,_showtask__WEBPACK_IMPORTED_MODULE_0__.wipeShowTask)();\n\n    /* Al clickear un proyecto ocurre */\n    projectSelector.addEventListener('click', () => {\n      createTask.setAttribute('id2', `${index}`);\n      list.setAttribute('id2', `${index}`);\n\n      const activeSelector = document.querySelectorAll('.sidenav ul li a.active');\n      activeSelector.forEach((t) => {\n        if (t.classList.contains('active')) {\n          t.classList.remove('active');\n        }\n      });\n\n      lastaSelector.classList.add('active');\n\n      (0,_showtask__WEBPACK_IMPORTED_MODULE_0__.default)();\n    });\n  }\n};\n\naddButton.addEventListener('click', () => {\n  projectDom();\n});\n\nconst projectDomLocal = (t) => {\n  const newProjects = t;\n\n  const index = projectList.length - 1;\n  const ulSelector = document.querySelector('.wi');\n  const createLi = document.createElement('li');\n  createLi.classList.add('nav-item', 'my-1');\n  const createAnchorTag = document.createElement('a');\n  createAnchorTag.setAttribute('href', '#');\n  createAnchorTag.classList.add('nav-link');\n  createAnchorTag.innerText = newProjects.name;\n\n  createAnchorTag.setAttribute('id', index);\n  ulSelector.append(createLi);\n  const liSelector = document.querySelector('.sidenav ul li:last-child');\n  liSelector.appendChild(createAnchorTag);\n  getProjectName.value = '';\n\n  const projectSelector = document.getElementById(`${index}`);\n  const createTask = document.getElementById('createTask');\n  const list = document.getElementById('taskqueue');\n  createTask.setAttribute('id2', `${index}`);\n\n  projectSelector.addEventListener('click', (e) => {\n    createTask.setAttribute('id2', `${index}`);\n    list.setAttribute('id2', `${index}`);\n    const activeSelector = document.querySelectorAll('.sidenav ul li a');\n    activeSelector.forEach((t) => {\n      if (t.classList.contains('active')) {\n        t.classList.remove('active');\n      }\n      e.target.classList.add('active');\n    });\n    (0,_showtask__WEBPACK_IMPORTED_MODULE_0__.default)();\n  });\n};\n\n(0,_localstorage__WEBPACK_IMPORTED_MODULE_2__.getLocalstorage)();\n\n\n\n//# sourceURL=webpack://todoJavascript/./src/newproject.js?");

/***/ }),

/***/ "./src/newtask.js":
/*!************************!*\
  !*** ./src/newtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* harmony import */ var _showtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showtask */ \"./src/showtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\nclass Task {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\nconst createTask = document.querySelector('#createTask');\n\ncreateTask.addEventListener('click', () => {\n  const id2Selector = createTask.getAttribute('id2');\n  if (id2Selector != null) {\n    const field1 = document.querySelector('#title').value;\n    const field2 = document.querySelector('#description').value;\n    const field3 = document.querySelector('#dueDate').value;\n    const field4 = document.querySelector('#priority').value;\n\n    if (field1.trim() !== '' && field2.trim() !== ''\n            && field3.trim() !== '' && field4.trim() !== '') {\n      const newTask = new Task(field1, field2, field3, field4);\n      _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.push(newTask);\n      (0,_localstorage__WEBPACK_IMPORTED_MODULE_1__.saveLocalstorage)();\n      (0,_clearForm__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n      (0,_showtask__WEBPACK_IMPORTED_MODULE_2__.default)();\n    }\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todoJavascript/./src/newtask.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = (() => {\n  const contentContainer = document.querySelector('body');\n  const header = document.createElement('header');\n  header.innerHTML = `\n  <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav mx-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">To-Do List</a>\n        </li>\n      </ul>\n      </div>\n  </div>\n  </nav>\n  `;\n  const main = document.createElement('main');\n  main.setAttribute('id', 'content');\n  main.classList.add('container-fluid');\n\n  const footer = document.createElement('footer');\n\n  footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');\n  footer.innerHTML = `\n  <div class=\"container text-center\">\n    <p class='text-muted'>For more content like this check on my Github profile: \n      <a class='text-decoration-none' href='https://github.com/carloso0114'> Carlos Ospina</a>\n    </p>\n  </div>`;\n\n  contentContainer.append(header);\n  contentContainer.append(main);\n  contentContainer.append(footer);\n\n  /* Create sidebar */\n  const newdivSelector = document.querySelector('main');\n  const createDiv = document.createElement('div');\n  createDiv.setAttribute('id', 'sidebar');\n  createDiv.classList.add('row', 'content');\n  newdivSelector.append(createDiv);\n  const sidebarSelector = document.querySelector('#sidebar');\n  const createDiv2 = document.createElement('div');\n  createDiv2.classList.add('col-sm-4', 'sidenav');\n  sidebarSelector.append(createDiv2);\n  const createDiv3 = document.createElement('div');\n  createDiv3.classList.add('col-sm-4', 'task');\n  sidebarSelector.append(createDiv3);\n\n  /* Create content inside sideBar */\n  const sidenavSelector = document.querySelector('.sidenav');\n  const createTitle = document.createElement('h4');\n  createTitle.classList.add('text-center');\n  createTitle.innerText = 'Projects';\n  sidenavSelector.append(createTitle);\n\n  /* Create form */\n  const createForm = document.createElement('form');\n  sidenavSelector.append(createForm);\n\n  const formSelector = document.querySelector('form');\n  const createInputProjectName = document.createElement('input');\n  const submitProjectButton = document.createElement('input');\n  submitProjectButton.setAttribute('type', 'button');\n  submitProjectButton.setAttribute('value', 'Create');\n  submitProjectButton.setAttribute('id', 'add');\n  submitProjectButton.classList.add('mx-1');\n  createInputProjectName.setAttribute('type', 'text');\n  createInputProjectName.setAttribute('id', 'projectName');\n  createInputProjectName.setAttribute('placeholder', 'New Project Name');\n  createInputProjectName.setAttribute('size', '15');\n  createInputProjectName.classList.add('my-1');\n  formSelector.append(createInputProjectName);\n\n  formSelector.appendChild(submitProjectButton);\n  /* Create list of projects */\n\n  const createUl = document.createElement('ul');\n  createUl.classList.add('nav', 'wi', 'nav-pills', 'flex-column');\n  sidenavSelector.append(createUl);\n\n  /* Create tasks */\n  const taskSelector = document.querySelector('.task');\n  const createTitle2 = document.createElement('h4');\n  createTitle2.innerText = 'Tasks';\n  createTitle2.classList.add('text-center');\n  taskSelector.append(createTitle2);\n  const taskForm = document.createElement('div');\n  taskForm.innerHTML = `<form id=\"taskForm\">\n    <label for=\"title\">Title:</label><br>\n    <input type=\"text\" id=\"title\"><br>\n    <label for=\"description\">Description:</label><br>\n    <input type=\"text\" id=\"description\"><br>\n    <label for=\"dueDate\">Due Date:</label><br>\n    <input type=\"date\" id=\"dueDate\"><br>\n  \n    <label for=\"priority\">Priority:</label><br>\n    <select name=\"priority\" id=\"priority\">\n      <option value=\"low\">low</option>\n      <option value=\"medium\">medium</option>\n      <option value=\"urgent\">urgent</option>\n    </select><br>\n  \n    <button type=\"button\" class=\"btn btn-primary mt-2\" id=\"createTask\" >Add task</button>\n    </br>\n    </br>\n  </form> \n  `;\n  taskSelector.append(taskForm);\n\n  /* Create tasks lists */\n  const createDiv4 = document.createElement('div');\n  createDiv4.classList.add('col-sm-4');\n  createDiv4.setAttribute('id', 'finalTasklist');\n  sidebarSelector.append(createDiv4);\n  createDiv4.innerHTML = `\n  <h4 class=\"text-center\">Task List</h4>\n  <div id=\"taskqueue\"></div>`;\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://todoJavascript/./src/pageload.js?");

/***/ }),

/***/ "./src/showtask.js":
/*!*************************!*\
  !*** ./src/showtask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"wipeShowTask\": () => (/* binding */ wipeShowTask)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newtask */ \"./src/newtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n/* harmony import */ var _localstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localstorage */ \"./src/localstorage.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\n\nconst showTaskList = () => {\n  const createTask = document.getElementById('createTask');\n  const id2Selector = createTask.getAttribute('id2');\n  const task = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist;\n  let taskindex = 0;\n  const list = document.getElementById('taskqueue');\n  list.innerHTML = '';\n  const newdiv = document.createElement('div');\n\n  task.forEach((task) => {\n    let color;\n    if (task.priority === 'low') {\n      color = 'btn-primary';\n    } else if (task.priority === 'medium') {\n      color = 'btn-warning';\n    } else if (task.priority === 'urgent') {\n      color = 'btn-danger';\n    } else if (task.priority === 'completed') {\n      color = 'btn-success';\n    }\n\n    newdiv.innerHTML += `\n        <h5 class=\"btn ${color}\" data-bs-toggle=\"collapse\" href=\"#multiCollapseExample${taskindex}\" role=\"button\"\n            aria-expanded=\"false\" aria-controls=\"multiCollapseExample${taskindex}\">\n            ${task.title}\n        </h5>\n        <div class=\"row my-2\">\n            <div class=\"collapse multi-collapse\" id=\"multiCollapseExample${taskindex}\">\n                <div class=\"card-body text-center\">\n                    <h5 id=\"theDescription\">Description: ${task.description}</h5>\n                    <h5>Due Date: ${task.dueDate}</h5>\n                    <button type=\"button\" class=\"btn btn-warning\" id=\"${taskindex}\">Edit</button>\n                    <button type=\"button\" class=\"btn btn-danger\" id=\"${taskindex}\">Delete</button>\n                    <button type=\"button\" class=\"btn btn-success\" id=\"${taskindex}\">Complete</button>\n                </div>\n            </div>\n        </div>\n        `;\n    list.append(newdiv);\n    const completeBtn = document.querySelectorAll('button.btn-success');\n    completeBtn.forEach((t) => {\n      t.addEventListener('click', () => {\n        _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[t.id].priority = 'completed';\n        (0,_localstorage__WEBPACK_IMPORTED_MODULE_3__.saveLocalstorage)();\n        showTaskList();\n      });\n    });\n\n    taskindex += 1;\n  });\n\n  const deleteButton = document.querySelectorAll('#taskqueue div div div button.btn-danger');\n  deleteButton.forEach((t) => {\n    t.addEventListener('click', (e) => {\n      _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.splice(e.target.id, 1);\n      (0,_localstorage__WEBPACK_IMPORTED_MODULE_3__.saveLocalstorage)();\n      showTaskList();\n    });\n  });\n\n  const field1Selector = document.querySelector('#title');\n  const field2Selector = document.querySelector('#description');\n  const field3Selector = document.querySelector('#dueDate');\n  const field4Selector = document.querySelector('#priority');\n\n  const editButton = document.querySelectorAll('#taskqueue div div div button.btn-warning');\n  editButton.forEach((t) => {\n    t.addEventListener('click', (e) => {\n      const { title } = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id];\n      const { description } = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id];\n      const { dueDate } = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id];\n      const { priority } = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id];\n      field1Selector.value = title;\n      field2Selector.value = description;\n      field3Selector.value = dueDate;\n      field4Selector.value = priority;\n      const taskFormSelector = document.querySelector('#taskForm');\n      const newBtn = document.createElement('input');\n      newBtn.setAttribute('type', 'button');\n      newBtn.setAttribute('value', 'update');\n      newBtn.classList.add('btn', 'btn-primary');\n      if (!document.querySelector(\"#taskForm input[value='update']\")) {\n        newBtn.setAttribute('id', `${e.target.id}`);\n        taskFormSelector.appendChild(newBtn);\n      } else {\n        document.querySelector(\"#taskForm input[value='update']\").setAttribute('id', `${e.target.id}`);\n      }\n\n      const updateBtn = document.querySelector(\"input[value='update']\");\n      updateBtn.addEventListener('click', (e) => {\n        const field1 = document.querySelector('#title').value;\n        const field2 = document.querySelector('#description').value;\n        const field3 = document.querySelector('#dueDate').value;\n        const field4 = document.querySelector('#priority').value;\n        if (field1.trim() !== '' && field2.trim() !== ''\n                    && field3.trim() !== '' && field4.trim() !== '') {\n          const newTask = new _newtask__WEBPACK_IMPORTED_MODULE_1__.default(field1, field2, field3, field4);\n          _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.splice(e.target.getAttribute('id'), 1, newTask);\n          (0,_localstorage__WEBPACK_IMPORTED_MODULE_3__.saveLocalstorage)();\n          showTaskList();\n          (0,_clearForm__WEBPACK_IMPORTED_MODULE_2__.default)();\n          e.target.remove();\n        }\n      });\n    });\n  });\n};\n\nconst wipeShowTask = () => {\n  const list = document.getElementById('taskqueue');\n  list.innerHTML = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTaskList);\n\n\n//# sourceURL=webpack://todoJavascript/./src/showtask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;