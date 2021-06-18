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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtask */ \"./src/newtask.js\");\n/* harmony import */ var _showtask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showtask */ \"./src/showtask.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://todoJavascript/./src/index.js?");

/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _showtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showtask */ \"./src/showtask.js\");\n\n\nclass Project {\n  constructor(name) {\n    this.name = name\n    this.todolist = [];\n  }\n}\n\nlet projectList = []\n\nconst addButton = document.querySelector('#add');\nconst getProjectName = document.querySelector('#projectName')\n\naddButton.addEventListener('click', () => {\n    \n  if (getProjectName.value.trim() != '') {\n    const newProjects = new Project(getProjectName.value);\n    projectList.push(newProjects)\n    const index = projectList.length - 1\n    const ulSelector = document.querySelector('.wi')\n    const createLi = document.createElement('li')\n    createLi.classList.add('nav-item', 'my-1')\n    const createAnchorTag = document.createElement('a')\n    createAnchorTag.setAttribute('href', '#')\n    createAnchorTag.classList.add('nav-link')\n    createAnchorTag.innerText = newProjects.name;\n    createAnchorTag.setAttribute('id', index)\n    ulSelector.append(createLi)\n    const liSelector = document.querySelector('.sidenav ul li:last-child')\n    liSelector.appendChild(createAnchorTag)\n    getProjectName.value = \"\";\n\n    const projectSelector = document.getElementById(`${index}`)\n    const createTask = document.getElementById('createTask')\n    const list = document.getElementById('taskqueue')\n\n    projectSelector.addEventListener('click', () => {\n      createTask.setAttribute('id2', `${index}`)\n      list.setAttribute('id2', `${index}`)\n      ;(0,_showtask__WEBPACK_IMPORTED_MODULE_0__.default)()\n    });   \n  }\n\n});\n\n\n\n//# sourceURL=webpack://todoJavascript/./src/newproject.js?");

/***/ }),

/***/ "./src/newtask.js":
/*!************************!*\
  !*** ./src/newtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n\nclass Task {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n\n}\n\nconst field1Selector = document.querySelector('#title')\nconst field2Selector = document.querySelector('#description')\nconst field3Selector = document.querySelector('#dueDate')\nconst field4Selector = document.querySelector('#priority')\n\nconst createTask = document.querySelector('#createTask')\ncreateTask.addEventListener('click', () => {\n    const id2Selector = createTask.getAttribute('id2')\n    if (id2Selector != null) {\n\n        const field1 = document.querySelector('#title').value\n        const field2 = document.querySelector('#description').value\n        const field3 = document.querySelector('#dueDate').value\n        const field4 = document.querySelector('#priority').value\n        \n        if (field1.trim() != '' && field2.trim() != ''\n        && field3.trim() != '' && field4.trim() != '') {\n            const newTask = new Task(field1, field2, field3, field4);\n            _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.push(newTask)\n            field1Selector.value = \"\";\n            field2Selector.value = \"\";\n            field3Selector.value = \"\";\n            field4Selector.value = \"\";\n        }\n    }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todoJavascript/./src/newtask.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = (() => {\n    const contentContainer = document.querySelector('body');\n    const header = document.createElement('header');\n    header.innerHTML = `\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\n    <div class=\"container-fluid\">\n      <div class=\"collapse navbar-collapse\">\n        <ul class=\"navbar-nav mx-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">To-Do List</a>\n          </li>\n        </ul>\n        </div>\n    </div>\n    </nav>\n    `;\n    const main = document.createElement('main');\n    main.setAttribute('id', 'content');\n    main.classList.add('container-fluid')\n\n    const footer = document.createElement('footer');\n  \n    footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');\n    footer.innerHTML = `\n    <div class=\"container text-center\">\n      <a href='#' class='text-muted'>Footer</a>\n    </div>`;\n  \n    contentContainer.append(header);\n    contentContainer.append(main);\n    contentContainer.append(footer);\n    \n    /* Create sidebar*/\n    const newdivSelector = document.querySelector('main');\n    const createDiv = document.createElement('div');\n    createDiv.setAttribute('id','sidebar')\n    createDiv.classList.add('row','content')\n    newdivSelector.append(createDiv);\n    const sidebarSelector = document.querySelector('#sidebar');\n    const createDiv2 = document.createElement('div');\n    createDiv2.classList.add('col-sm-4','sidenav')\n    sidebarSelector.append(createDiv2);\n    const createDiv3 = document.createElement('div');\n    createDiv3.classList.add('col-sm-4','task');\n    sidebarSelector.append(createDiv3);\n\n    /* Create content inside sideBar*/\n    const sidenavSelector = document.querySelector('.sidenav');\n    const createTitle = document.createElement('h4');\n    createTitle.innerText = 'Projects';\n    sidenavSelector.append(createTitle);\n\n    /* Create form */\n    const createForm = document.createElement('form')\n    sidenavSelector.append(createForm)\n    \n    const formSelector = document.querySelector('form')\n    const createInputProjectName = document.createElement('input')\n    const submitProjectButton = document.createElement('input')\n    submitProjectButton.setAttribute('type', 'button')\n    submitProjectButton.setAttribute('value', 'Create')\n    createInputProjectName.setAttribute('type', 'text')\n    createInputProjectName.setAttribute('id', 'projectName')\n    createInputProjectName.setAttribute('placeholder', 'New Project Name')\n    createInputProjectName.setAttribute('size', '15');\n    createInputProjectName.classList.add('my-1')\n    formSelector.append(createInputProjectName)\n    submitProjectButton.setAttribute('id', 'add')\n\n    formSelector.appendChild(submitProjectButton)\n    /* Create list of projects */\n    \n    const createUl = document.createElement('ul')\n    createUl.classList.add('nav','wi', 'nav-pills','flex-column')\n    sidenavSelector.append(createUl)\n    \n    /* Create tasks */\n    const taskSelector = document.querySelector('.task')\n    const createTitle2 = document.createElement('h4');\n    createTitle2.innerText = 'Tasks';\n    taskSelector.append(createTitle2);\n    const taskForm = document.createElement('div')\n    taskForm.innerHTML = `<form id=\"taskForm\">\n      <label for=\"title\">Title:</label><br>\n      <input type=\"text\" id=\"title\"><br>\n      <label for=\"description\">Description:</label><br>\n      <input type=\"text\" id=\"description\"><br>\n      <label for=\"dueDate\">Due Date:</label><br>\n      <input type=\"date\" id=\"dueDate\"><br>\n    \n      <label for=\"priority\">Priority:</label><br>\n      <select name=\"priority\" id=\"priority\">\n        <option value=\"low\">low</option>\n        <option value=\"medium\">medium</option>\n        <option value=\"urgent\">urgent</option>\n      </select><br>\n    \n      <button type=\"button\" class=\"btn btn-primary mt-2\" id=\"createTask\" >Add task</button>\n    </form> \n    `\n    taskSelector.append(taskForm)\n\n    /* Create tasks lists */\n    const createDiv4 = document.createElement('div');\n    createDiv4.classList.add('col-sm-4');\n    createDiv4.setAttribute('id', 'finalTasklist')\n    sidebarSelector.append(createDiv4);\n    createDiv4.innerHTML = `\n    <h4>Task List</h4>\n    <div id=\"taskqueue\"></div>`\n\n  })();\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://todoJavascript/./src/pageload.js?");

/***/ }),

/***/ "./src/showtask.js":
/*!*************************!*\
  !*** ./src/showtask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n\n\nconst showTaskList = () => {\n    const id2Selector = createTask.getAttribute('id2')\n    const array = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist\n    const list = document.getElementById('taskqueue')\n    list.innerHTML = \"\";\n    array.forEach(function(array) {\n        list.innerHTML += `\n        <h5>Title: ${array.title}</h5>\n        <h5>Description: ${array.description}</h5>\n        <h5>Due Date: ${array.dueDate}</h5>\n        <h5>Priority: ${array.priority}</h5>\n        `\n        finalTasklist.append(list)\n    });\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTaskList);\n\n\n\n//# sourceURL=webpack://todoJavascript/./src/showtask.js?");

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