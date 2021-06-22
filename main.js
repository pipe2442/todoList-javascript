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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst field1Selector = document.querySelector('#title')\r\nconst field2Selector = document.querySelector('#description')\r\nconst field3Selector = document.querySelector('#dueDate')\r\nconst field4Selector = document.querySelector('#priority')\r\n\r\nconst clearForm = () => {\r\n    field1Selector.value = '';\r\n    field2Selector.value = '';\r\n    field3Selector.value = '';\r\n    field4Selector.value = 'low';\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearForm);\n\n//# sourceURL=webpack://todoJavascript/./src/clearForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newtask */ \"./src/newtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoJavascript/./src/index.js?");

/***/ }),

/***/ "./src/newproject.js":
/*!***************************!*\
  !*** ./src/newproject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectList\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _showtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showtask */ \"./src/showtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n\r\n\r\n\r\n\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.name = name\r\n    this.todolist = [];\r\n  }\r\n}\r\n\r\nlet projectList = []\r\n\r\nconst addButton = document.querySelector('#add');\r\nconst getProjectName = document.querySelector('#projectName')\r\n\r\naddButton.addEventListener('click', () => {\r\n  /* Agregar proyecto */ \r\n  if (getProjectName.value.trim() != '') {\r\n    const newProjects = new Project(getProjectName.value);\r\n    projectList.push(newProjects)\r\n    const index = projectList.length - 1\r\n    const ulSelector = document.querySelector('.wi')\r\n    const createLi = document.createElement('li')\r\n    createLi.classList.add('nav-item', 'my-1')\r\n    const createAnchorTag = document.createElement('a')\r\n    createAnchorTag.setAttribute('href', '#')\r\n    createAnchorTag.classList.add('nav-link')\r\n    createAnchorTag.innerText = newProjects.name;\r\n    createAnchorTag.setAttribute('id', index)\r\n    ulSelector.append(createLi)\r\n    const liSelector = document.querySelector('.sidenav ul li:last-child')\r\n    liSelector.appendChild(createAnchorTag)\r\n    getProjectName.value = \"\";\r\n    \r\n    const projectSelector = document.getElementById(`${index}`)\r\n    const createTask = document.getElementById('createTask')\r\n    const list = document.getElementById('taskqueue')\r\n    createTask.setAttribute('id2', `${index}`)\r\n    \r\n    let activeSelector = document.querySelectorAll(\".sidenav ul li a.active\");\r\n    activeSelector.forEach(function (t) {\r\n      if (t.classList.contains('active')){\r\n      t.classList.remove('active')\r\n      }\r\n    })\r\n\r\n    const lastaSelector = document.querySelector('.sidenav ul li:last-child a:last-child')\r\n    lastaSelector.classList.toggle('active')\r\n    ;(0,_clearForm__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    ;(0,_showtask__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n  \r\n    /* Al clickear un proyecto ocurre */ \r\n    projectSelector.addEventListener('click', () => {\r\n      createTask.setAttribute('id2', `${index}`)\r\n      list.setAttribute('id2', `${index}`)\r\n\r\n      var activeSelector = document.querySelectorAll(\".sidenav ul li a.active\");\r\n      activeSelector.forEach(function (t) {\r\n        if (t.classList.contains('active')){\r\n        t.classList.remove('active')\r\n        }\r\n      })\r\n\r\n      lastaSelector.classList.add('active')\r\n      \r\n      ;(0,_showtask__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n    });   \r\n  }\r\n\r\n});\r\n\r\n\n\n//# sourceURL=webpack://todoJavascript/./src/newproject.js?");

/***/ }),

/***/ "./src/newtask.js":
/*!************************!*\
  !*** ./src/newtask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _showtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showtask */ \"./src/showtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n\r\n\r\n\r\n\r\n    class Task {\r\n        constructor(title, description, dueDate, priority) {\r\n            this.title = title;\r\n            this.description = description;\r\n            this.dueDate = dueDate;\r\n            this.priority = priority;\r\n        }\r\n    \r\n    }\r\n    \r\n    const createTask = document.querySelector('#createTask')\r\n    \r\n        createTask.addEventListener('click', () => {\r\n        const id2Selector = createTask.getAttribute('id2')\r\n        if (id2Selector != null) {\r\n    \r\n            const field1 = document.querySelector('#title').value\r\n            const field2 = document.querySelector('#description').value\r\n            const field3 = document.querySelector('#dueDate').value\r\n            const field4 = document.querySelector('#priority').value\r\n            \r\n            if (field1.trim() != '' && field2.trim() != ''\r\n            && field3.trim() != '' && field4.trim() != '') {\r\n                const newTask = new Task(field1, field2, field3, field4);\r\n                _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.push(newTask)\r\n                ;(0,_clearForm__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n    \r\n                ;(0,_showtask__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n            }\r\n        }\r\n        \r\n    });\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\r\n\r\n\n\n//# sourceURL=webpack://todoJavascript/./src/newtask.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pageLoad = (() => {\r\n    const contentContainer = document.querySelector('body');\r\n    const header = document.createElement('header');\r\n    header.innerHTML = `\r\n    <nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"navbar-nav mx-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link active\" aria-current=\"page\" href=\"#\" id=\"home-link\">To-Do List</a>\r\n          </li>\r\n        </ul>\r\n        </div>\r\n    </div>\r\n    </nav>\r\n    `;\r\n    const main = document.createElement('main');\r\n    main.setAttribute('id', 'content');\r\n    main.classList.add('container-fluid')\r\n\r\n    const footer = document.createElement('footer');\r\n  \r\n    footer.classList.add('py-4', 'bg-dark', 'flex-shrink-0');\r\n    footer.innerHTML = `\r\n    <div class=\"container text-center\">\r\n      <a href='#' class='text-muted'>Footer</a>\r\n    </div>`;\r\n  \r\n    contentContainer.append(header);\r\n    contentContainer.append(main);\r\n    contentContainer.append(footer);\r\n    \r\n    /* Create sidebar*/\r\n    const newdivSelector = document.querySelector('main');\r\n    const createDiv = document.createElement('div');\r\n    createDiv.setAttribute('id','sidebar')\r\n    createDiv.classList.add('row','content')\r\n    newdivSelector.append(createDiv);\r\n    const sidebarSelector = document.querySelector('#sidebar');\r\n    const createDiv2 = document.createElement('div');\r\n    createDiv2.classList.add('col-sm-4','sidenav')\r\n    sidebarSelector.append(createDiv2);\r\n    const createDiv3 = document.createElement('div');\r\n    createDiv3.classList.add('col-sm-4','task');\r\n    sidebarSelector.append(createDiv3);\r\n\r\n    /* Create content inside sideBar*/\r\n    const sidenavSelector = document.querySelector('.sidenav');\r\n    const createTitle = document.createElement('h4');\r\n    createTitle.innerText = 'Projects';\r\n    sidenavSelector.append(createTitle);\r\n\r\n    /* Create form */\r\n    const createForm = document.createElement('form')\r\n    sidenavSelector.append(createForm)\r\n    \r\n    const formSelector = document.querySelector('form')\r\n    const createInputProjectName = document.createElement('input')\r\n    const submitProjectButton = document.createElement('input')\r\n    submitProjectButton.setAttribute('type', 'button')\r\n    submitProjectButton.setAttribute('value', 'Create')\r\n    createInputProjectName.setAttribute('type', 'text')\r\n    createInputProjectName.setAttribute('id', 'projectName')\r\n    createInputProjectName.setAttribute('placeholder', 'New Project Name')\r\n    createInputProjectName.setAttribute('size', '15');\r\n    createInputProjectName.classList.add('my-1')\r\n    formSelector.append(createInputProjectName)\r\n    submitProjectButton.setAttribute('id', 'add')\r\n\r\n    formSelector.appendChild(submitProjectButton)\r\n    /* Create list of projects */\r\n    \r\n    const createUl = document.createElement('ul')\r\n    createUl.classList.add('nav','wi', 'nav-pills','flex-column')\r\n    sidenavSelector.append(createUl)\r\n    \r\n    /* Create tasks */\r\n    const taskSelector = document.querySelector('.task')\r\n    const createTitle2 = document.createElement('h4');\r\n    createTitle2.innerText = 'Tasks';\r\n    taskSelector.append(createTitle2);\r\n    const taskForm = document.createElement('div')\r\n    taskForm.innerHTML = `<form id=\"taskForm\">\r\n      <label for=\"title\">Title:</label><br>\r\n      <input type=\"text\" id=\"title\"><br>\r\n      <label for=\"description\">Description:</label><br>\r\n      <input type=\"text\" id=\"description\"><br>\r\n      <label for=\"dueDate\">Due Date:</label><br>\r\n      <input type=\"date\" id=\"dueDate\"><br>\r\n    \r\n      <label for=\"priority\">Priority:</label><br>\r\n      <select name=\"priority\" id=\"priority\">\r\n        <option value=\"low\">low</option>\r\n        <option value=\"medium\">medium</option>\r\n        <option value=\"urgent\">urgent</option>\r\n      </select><br>\r\n    \r\n      <button type=\"button\" class=\"btn btn-primary mt-2\" id=\"createTask\" >Add task</button>\r\n    </form> \r\n    `\r\n    taskSelector.append(taskForm)\r\n\r\n    /* Create tasks lists */\r\n    const createDiv4 = document.createElement('div');\r\n    createDiv4.classList.add('col-sm-4');\r\n    createDiv4.setAttribute('id', 'finalTasklist')\r\n    sidebarSelector.append(createDiv4);\r\n    createDiv4.innerHTML = `\r\n    <h4>Task List</h4>\r\n    <div id=\"taskqueue\"></div>`\r\n\r\n  })();\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://todoJavascript/./src/pageload.js?");

/***/ }),

/***/ "./src/showtask.js":
/*!*************************!*\
  !*** ./src/showtask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"wipeShowTask\": () => (/* binding */ wipeShowTask)\n/* harmony export */ });\n/* harmony import */ var _newproject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newproject */ \"./src/newproject.js\");\n/* harmony import */ var _newtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newtask */ \"./src/newtask.js\");\n/* harmony import */ var _clearForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearForm */ \"./src/clearForm.js\");\n\r\n\r\n\r\n\r\nconst showTaskList = () => {\r\n    const id2Selector = createTask.getAttribute('id2')\r\n    const task = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist\r\n    let taskindex = 0\r\n    const list = document.getElementById('taskqueue')\r\n    list.innerHTML = \"\";\r\n    const newdiv = document.createElement('div')\r\n\r\n    task.forEach(function (task) {\r\n        newdiv.innerHTML += `\r\n        <h5 class=\"btn btn-primary\" data-bs-toggle=\"collapse\" href=\"#multiCollapseExample${taskindex}\" role=\"button\"\r\n            aria-expanded=\"false\" aria-controls=\"multiCollapseExample${taskindex}\">\r\n            ${task.title}\r\n        </h5>\r\n    <div class=\"row my-2\">\r\n        <div class=\"collapse multi-collapse card \" id=\"multiCollapseExample${taskindex}\">\r\n            <div class=\"card-body\">\r\n            <h5>Description: ${task.description}</h5>\r\n            <h5>Due Date: ${task.dueDate}</h5>\r\n            <h5>Priority: ${task.priority}</h5>\r\n            <button type=\"button\" class=\"btn btn-warning\" id=\"${taskindex}\">Edit</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" id=\"${taskindex}\">Delete</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    `\r\n        list.append(newdiv)\r\n\r\n        taskindex++\r\n    });\r\n\r\n    let deleteButton = document.querySelectorAll('#taskqueue div div div button.btn-danger')\r\n    deleteButton.forEach(function (t) {\r\n        t.addEventListener('click', (e) => {\r\n            _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.splice(e.target.id, 1);\r\n            showTaskList()\r\n        });\r\n\r\n    })\r\n\r\n    const field1Selector = document.querySelector('#title')\r\n    const field2Selector = document.querySelector('#description')\r\n    const field3Selector = document.querySelector('#dueDate')\r\n    const field4Selector = document.querySelector('#priority')\r\n\r\n    let editButton = document.querySelectorAll('#taskqueue div div div button.btn-warning')\r\n    editButton.forEach(function (t) {\r\n        t.addEventListener('click', (e) => {\r\n            let title = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id].title\r\n            let description = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id].description\r\n            let dueDate = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id].dueDate\r\n            let priority = _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist[e.target.id].priority\r\n            field1Selector.value = title;\r\n            field2Selector.value = description;\r\n            field3Selector.value = dueDate;\r\n            field4Selector.value = priority;\r\n            const taskFormSelector = document.querySelector('#taskForm')\r\n            if (!document.querySelector(\"#taskForm input[value='Update']\")) {\r\n                const newBtn = document.createElement('input')\r\n                newBtn.setAttribute('type', 'button')\r\n                newBtn.setAttribute('value', 'Update')\r\n                taskFormSelector.append(newBtn)\r\n            }\r\n            const updateBtn = document.querySelector(\"input[value='Update']\")\r\n            updateBtn.addEventListener('click', () => {\r\n                const field1 = document.querySelector('#title').value\r\n                const field2 = document.querySelector('#description').value\r\n                const field3 = document.querySelector('#dueDate').value\r\n                const field4 = document.querySelector('#priority').value\r\n                if (field1.trim() != '' && field2.trim() != ''\r\n                && field3.trim() != '' && field4.trim() != '') {\r\n                    const newTask = new _newtask__WEBPACK_IMPORTED_MODULE_1__.default(field1, field2, field3, field4);\r\n                    _newproject__WEBPACK_IMPORTED_MODULE_0__.projectList[id2Selector].todolist.splice(e.target.id, 1, newTask);\r\n                    showTaskList()\r\n                    ;(0,_clearForm__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n                }\r\n                const newTask = new _newtask__WEBPACK_IMPORTED_MODULE_1__.default('a', 'e', '', 'low');\r\n                \r\n                \r\n                \r\n            });\r\n        });\r\n    })\r\n\r\n}\r\n\r\nconst wipeShowTask = () => {\r\n    const list = document.getElementById('taskqueue')\r\n    list.innerHTML = \"\";\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTaskList);\r\n\n\n//# sourceURL=webpack://todoJavascript/./src/showtask.js?");

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