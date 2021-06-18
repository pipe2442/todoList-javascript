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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtask */ \"./src/newtask.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://todoJavascript/./src/index.js?");

/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name\r\n    this.todolist = [];\r\n  }\r\n}\r\n\r\nconst projectList = []\r\n\r\nconst addButton = document.querySelector('#add');\r\nconst getProjectName = document.querySelector('#projectName')\r\n\r\naddButton.addEventListener('click', () => {\r\n  if (getProjectName.value.length > 0) {\r\n    let newProjects = new Project(getProjectName.value);\r\n    projectList.push(newProjects)\r\n    const index = projectList.length - 1\r\n    const ulSelector = document.querySelector('.wi')\r\n    const createLi = document.createElement('li')\r\n    createLi.classList.add('nav-item', 'my-1')\r\n    const createAnchorTag = document.createElement('a')\r\n    createAnchorTag.setAttribute('href', '#')\r\n    createAnchorTag.classList.add('nav-link')\r\n    createAnchorTag.innerText = newProjects.name;\r\n    createAnchorTag.setAttribute('id', index)\r\n    ulSelector.append(createLi)\r\n    const liSelector = document.querySelector('.sidenav ul li:last-child')\r\n    liSelector.appendChild(createAnchorTag)\r\n    getProjectName.value = \"\";\r\n    console.log(projectList)\r\n\r\n    const projectSelector = document.getElementById(`${index}`)\r\n    const taskForm = document.createElement('div')\r\n    projectSelector.addEventListener('click', () => {\r\n      console.log(index)\r\n      const taskSelector = document.querySelector('.task');\r\n      taskForm.innerHTML = `<form id=\"taskForm\">\r\n      <label for=\"fname\">Title:</label><br>\r\n      <input type=\"text\" id=\"title\" name=\"fname\"><br>\r\n      <label for=\"lname\">Description:</label><br>\r\n      <input type=\"text\" id=\"description\" name=\"lname\"><br>\r\n      <label for=\"lname\">Due Date:</label><br>\r\n      <input type=\"text\" id=\"dueDate\" name=\"lname\"><br>\r\n      <label for=\"lname\">Priority:</label><br>\r\n      <input type=\"text\" id=\"priority\" name=\"lname\"><br><br>\r\n    </form> \r\n    `\r\n    \r\n      taskSelector.append(taskForm)\r\n    });\r\n\r\n\r\n\r\n  }\r\n\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todoJavascript/./src/newproject.js?");

/***/ }),

/***/ "./src/newtask.js":
/*!************************!*\
  !*** ./src/newtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, description, dueDate, priority) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n    }\r\n    \r\n  }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todoJavascript/./src/newtask.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n    const contentContainer = document.querySelector('body');\r\n    const header = document.createElement('header');\r\n    header.innerHTML = `\r\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">To-Do List</a>\r\n          </li>\r\n        </ul>\r\n        </div>\r\n    </div>\r\n    </nav>\r\n    `;\r\n    const main = document.createElement('main');\r\n    main.setAttribute('id', 'content');\r\n    main.classList.add('container-fluid')\r\n\r\n    const footer = document.createElement('footer');\r\n  \r\n    footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');\r\n    footer.innerHTML = `\r\n    <div class=\"container text-center\">\r\n      <a href='#' class='text-muted'>Footer</a>\r\n    </div>`;\r\n  \r\n    contentContainer.append(header);\r\n    contentContainer.append(main);\r\n    contentContainer.append(footer);\r\n    \r\n    /* Create sidebar*/\r\n    const newdivSelector = document.querySelector('main');\r\n    const createDiv = document.createElement('div');\r\n    createDiv.setAttribute('id','sidebar')\r\n    createDiv.classList.add('row','content')\r\n    newdivSelector.append(createDiv);\r\n    const sidebarSelector = document.querySelector('#sidebar');\r\n    const createDiv2 = document.createElement('div');\r\n    createDiv2.classList.add('col-sm-3','sidenav')\r\n    sidebarSelector.append(createDiv2);\r\n    const createDiv3 = document.createElement('div');\r\n    createDiv3.classList.add('col-sm-9','task');\r\n    sidebarSelector.append(createDiv3);\r\n\r\n    /* Create content inside sideBar*/\r\n    const sidenavSelector = document.querySelector('.sidenav');\r\n    const createTitle = document.createElement('h4');\r\n    createTitle.innerText = 'Projects';\r\n    sidenavSelector.append(createTitle);\r\n\r\n    /* Create form */\r\n    const createForm = document.createElement('form')\r\n    sidenavSelector.append(createForm)\r\n    \r\n    const formSelector = document.querySelector('form')\r\n    const createInputProjectName = document.createElement('input')\r\n    createInputProjectName.setAttribute('type', 'text')\r\n    createInputProjectName.setAttribute('id', 'projectName')\r\n    createInputProjectName.setAttribute('placeholder', 'New Project Name')\r\n    createInputProjectName.setAttribute('size', '15');\r\n    formSelector.append(createInputProjectName)\r\n    const submitProjectButton = document.createElement('input')\r\n    submitProjectButton.setAttribute('type', 'button')\r\n    submitProjectButton.setAttribute('value', 'add')\r\n    submitProjectButton.setAttribute('id', 'add')\r\n    formSelector.appendChild(submitProjectButton)\r\n\r\n    /* Create list of projects */\r\n    \r\n    const createUl = document.createElement('ul')\r\n    createUl.classList.add('nav','wi', 'nav-pills','flex-column')\r\n    sidenavSelector.append(createUl)\r\n    \r\n    /* Create Todo list */\r\n    const taskSelector = document.querySelector('.task')\r\n    const createTitle2 = document.createElement('h4');\r\n    createTitle2.innerText = 'Tasks';\r\n    taskSelector.append(createTitle2);\r\n\r\n  })();\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://todoJavascript/./src/pageload.js?");

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