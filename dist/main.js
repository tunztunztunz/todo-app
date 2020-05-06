/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-functions.js":
/*!******************************!*\
  !*** ./src/dom-functions.js ***!
  \******************************/
/*! exports provided: renderTodoList, clearTodoList, updateTodoList, renderProjectsList, clearProjectsList, updateProjectsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodoList\", function() { return renderTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTodoList\", function() { return clearTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodoList\", function() { return updateTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectsList\", function() { return renderProjectsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectsList\", function() { return clearProjectsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjectsList\", function() { return updateProjectsList; });\n/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ \"./src/helper-functions.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nlet currentList = document.querySelector('.current-list');\nlet projectsList = document.querySelector('.lists');\n\nlet renderTodoList = (items) => {\n\n    for (let i = 0; i < items.length; i++) {\n\n        let newListItem = document.createElement('li');\n        let deleteButton = document.createElement('span');\n        let description = document.createElement('span');\n\n        items[i].id = i;\n\n        deleteButton.textContent = 'x';\n        deleteButton.classList.add('list-item-delete-button');\n        deleteButton.id = items[i].id;\n        newListItem.appendChild(deleteButton);\n\n        description.textContent = items[i].getTask();\n        newListItem.appendChild(description);\n\n        newListItem.classList.add('list-item');\n        currentList.appendChild(newListItem);\n    }\n}\n\nlet clearTodoList = () => {\n    while (currentList.firstChild) {\n        currentList.removeChild(currentList.lastChild);\n    }\n}\n\nlet updateTodoList = (items) => {\n    clearTodoList();\n    renderTodoList(items)\n}\n\nlet renderProjectsList = (projects) => {\n\n\n    for (let i = 0; i < projects.length; i++) {\n        let newProject = document.createElement('li');\n        let projectName = document.createElement('span');\n        let deleteButton = document.createElement('span');\n\n\n\n        projects[i].id = i;\n\n        let activeProject = Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"findActiveProject\"])(projects);\n        console.log('activeProject: ' + activeProject.id);\n\n\n\n        projectName.textContent = projects[i].name;\n        newProject.appendChild(projectName);\n\n        deleteButton.textContent = 'x';\n        deleteButton.classList.add('list-delete-button');\n        deleteButton.id = projects[i].id;\n        newProject.appendChild(deleteButton);\n\n        newProject.classList.add('list')\n        newProject.id = projects[i].id;\n        console.log('newProject ' + newProject.id);\n        projectsList.appendChild(newProject);\n\n        if (newProject.id === activeProject.id) {\n            alert('found a match');\n        }\n    }\n}\n\nlet clearProjectsList = () => {\n    while (projectsList.firstChild) {\n        projectsList.removeChild(projectsList.lastChild);\n    }\n}\n\nlet updateProjectsList = (projects) => {\n    clearProjectsList();\n    renderProjectsList(projects);\n}\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/dom-functions.js?");

/***/ }),

/***/ "./src/helper-functions.js":
/*!*********************************!*\
  !*** ./src/helper-functions.js ***!
  \*********************************/
/*! exports provided: activateProject, findActiveProject, clearActiveProjectStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateProject\", function() { return activateProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findActiveProject\", function() { return findActiveProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearActiveProjectStyle\", function() { return clearActiveProjectStyle; });\nlet activateProject = (event, array) => {\n    array.forEach((e) => {\n        e.isActive = false;\n    })\n    array[event.id].isActive = true;\n}\n\nlet clearActiveProjectStyle = () => {\n    let projects = document.querySelectorAll('.list');\n    console.log(projects)\n    projects.forEach((e) => {\n        e.classList.remove('active-project');\n    })\n\n}\n\nlet findActiveProject = (array) => array.find(item => item.isActive);\n\n\n\n//# sourceURL=webpack:///./src/helper-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-functions.js */ \"./src/dom-functions.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _helper_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions.js */ \"./src/helper-functions.js\");\n\n\n\n\n\n\n\n\nlet projects = [];\nlet currentList = document.querySelector('.current-list');\nlet addTodoButton = document.querySelector('.add-list-item-button');\nlet addProjectButton = document.querySelector('.add-project-button');\n\nlet projectsList = document.querySelector('.lists');\n\nlet addNewTodo = () => {\n    let items = Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects).items;\n    let taskInput = document.querySelector('#task-input');\n    let newTodo = Object(_todos_js__WEBPACK_IMPORTED_MODULE_1__[\"createTodo\"])(taskInput.value);\n\n    items.push(newTodo);\n    taskInput.value = '';\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(items);\n}\n\nlet addNewProject = () => {\n    let projectNameIput = document.querySelector('#project-input');\n    let newProject = Object(_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"createNewProject\"])(projectNameIput.value);\n    projects.push(newProject);\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n}\n\n\n// listeners\n\naddTodoButton.addEventListener('click', addNewTodo)\naddProjectButton.addEventListener('click', addNewProject)\n\n//change active project or delete project\n\nprojectsList.addEventListener('click', (event) => {\n    let td = event.target.closest('.list');\n    let target = event.target;\n    if (td.classList.contains('list')) {\n        Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"activateProject\"])(td, projects);\n        let items = Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects).items;\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(items);\n        Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"clearActiveProjectStyle\"])();\n        td.classList.add('active-project');\n    }\n    if (target.classList.contains('list-delete-button')) {\n        Object(_todos_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteTodo\"])(target, projects);\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n    }\n\n})\n\n//delete todo\ncurrentList.addEventListener('click', (event) => {\n    let target = event.target;\n    let items = Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects).items;\n\n    if (!target.classList.contains('list-item-delete-button')) return;\n\n    Object(_todos_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteTodo\"])(target, items);\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(items);\n})\n\n//delete project\n\nprojectsList.addEventListener('click', (event) => {\n    let target = event.target;\n    if (!target.classList.contains('lists')) return;\n\n\n})\n\nlet examples = () => {\n    let exampleProject = Object(_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"createNewProject\"])('Example Todo List');\n    projects.push(exampleProject);\n    exampleProject.isActive = true;\n    let exampleProject2 = Object(_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"createNewProject\"])('Example Todo List Number 2');\n    projects.push(exampleProject2);\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n    console.log(projects);\n}\n\nexamples();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/*! exports provided: createNewProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewProject\", function() { return createNewProject; });\nlet createNewProject = (inputName) => {\n    let name = inputName;\n    let id;\n    let items = [];\n    let isActive = false;\n\n    return {\n        name,\n        id,\n        items,\n        isActive\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/*! exports provided: createTodo, deleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTodo\", function() { return deleteTodo; });\nlet createTodo = (newTask) => {\n    let task = newTask;\n    let id;\n    let priority = 'low';\n    let getTask = () => {\n        return task;\n    }\n\n    return {\n        getTask,\n        id,\n        task,\n        priority\n    }\n}\n\nlet deleteTodo = (event, array) => {\n    array.splice(event.id, 1);\n}\n\n\n\n//# sourceURL=webpack:///./src/todos.js?");

/***/ })

/******/ });