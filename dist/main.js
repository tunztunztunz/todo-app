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
/*! exports provided: renderTodoList, clearTodoList, updateTodoList, renderProjectsList, clearProjectsList, updateProjectsList, toggleHide, togglePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodoList\", function() { return renderTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTodoList\", function() { return clearTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTodoList\", function() { return updateTodoList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjectsList\", function() { return renderProjectsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectsList\", function() { return clearProjectsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjectsList\", function() { return updateProjectsList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleHide\", function() { return toggleHide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"togglePopup\", function() { return togglePopup; });\n/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ \"./src/helper-functions.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nlet currentList = document.querySelector('.current-list');\nlet listHeaderDiv = document.querySelector('.list-header-div');\nlet projectsList = document.querySelector('.lists');\n\nlet renderTodoList = (object) => {\n    let items = object.items;\n\n    let projectName = document.createElement('h2');\n\n    projectName.textContent = object.name;\n    listHeaderDiv.appendChild(projectName);\n\n\n\n    for (let i = 0; i < items.length; i++) {\n\n        let newListItem = document.createElement('li');\n        let checkbox = document.createElement('input');\n        let deleteButton = document.createElement('span');\n        let description = document.createElement('span');\n        let date = document.createElement('span');\n\n        items[i].id = i;\n\n        checkbox.type = 'checkbox';\n        checkbox.id = i;\n        checkbox.classList.add('todo-checkbox');\n        newListItem.appendChild(checkbox);\n\n        description.textContent = items[i].task;\n        description.classList.add('todo-description');\n        newListItem.appendChild(description);\n\n        date.textContent = items[i].date;\n        newListItem.appendChild(date);\n\n        deleteButton.textContent = 'x';\n        deleteButton.classList.add('list-item-delete-button');\n        deleteButton.id = items[i].id;\n        newListItem.appendChild(deleteButton);\n\n        newListItem.classList.add('list-item');\n        currentList.appendChild(newListItem);\n    }\n}\n\nlet clearTodoList = () => {\n    while (currentList.firstChild) {\n        currentList.removeChild(currentList.lastChild);\n    }\n\n    listHeaderDiv.removeChild(listHeaderDiv.lastChild);\n}\n\nlet updateTodoList = (items) => {\n    clearTodoList();\n    renderTodoList(items)\n}\n\nlet renderProjectsList = (projects) => {\n\n    for (let i = 0; i < projects.length; i++) {\n        let newProject = document.createElement('li');\n        let projectName = document.createElement('span');\n        let deleteButton = document.createElement('span');\n\n        projects[i].id = i;\n\n        let activeProject = Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"findActiveProject\"])(projects);\n\n\n        if (activeProject === undefined) {\n            Object(_helper_functions__WEBPACK_IMPORTED_MODULE_0__[\"checkForActiveProject\"])(projects);\n            activeProject = projects[0];\n        }\n\n        projectName.textContent = projects[i].name;\n        projectName.classList.add('project-name');\n        newProject.appendChild(projectName);\n\n        console.log(projectName.textContent);\n        if (projectName.textContent === 'Default');\n        else {\n            deleteButton.textContent = 'x';\n            deleteButton.classList.add('list-delete-button');\n            deleteButton.id = projects[i].id;\n            newProject.appendChild(deleteButton);\n        }\n\n\n\n        newProject.classList.add('list')\n        newProject.id = projects[i].id;\n        projectsList.appendChild(newProject);\n\n        if (Number(newProject.id) === activeProject.id) {\n            newProject.classList.add('active-project');\n        }\n    }\n}\n\nlet clearProjectsList = () => {\n    while (projectsList.firstChild) {\n        projectsList.removeChild(projectsList.lastChild);\n    }\n}\n\nlet updateProjectsList = (projects) => {\n    clearProjectsList();\n    renderProjectsList(projects);\n}\n\nlet toggleHide = () => {\n    let div = document.querySelector('.add-todo-div');\n    let button = document.querySelector('.add-list-item-button');\n    if (div.classList.contains('hide')) {\n        div.classList.toggle('hide');\n        button.classList.toggle('hide');\n    } else {\n        div.classList.toggle('hide');\n        button.classList.toggle('hide');\n    }\n}\n\nlet togglePopup = () => {\n    let background = document.querySelector('.popup-background');\n    background.classList.toggle('hide');\n}\n\n\n\n//# sourceURL=webpack:///./src/dom-functions.js?");

/***/ }),

/***/ "./src/helper-functions.js":
/*!*********************************!*\
  !*** ./src/helper-functions.js ***!
  \*********************************/
/*! exports provided: activateProject, findActiveProject, clearActiveProjectStyle, checkForActiveProject, removeItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activateProject\", function() { return activateProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findActiveProject\", function() { return findActiveProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearActiveProjectStyle\", function() { return clearActiveProjectStyle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForActiveProject\", function() { return checkForActiveProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeItem\", function() { return removeItem; });\nlet activateProject = (event, array) => {\n    array.forEach((e) => {\n        e.isActive = false;\n    })\n    array[event].isActive = true;\n}\n\nlet clearActiveProjectStyle = () => {\n    let projects = document.querySelectorAll('.list');\n    projects.forEach((e) => {\n        e.classList.remove('active-project');\n    })\n}\n\nlet findActiveProject = (array) => array.find(item => item.isActive);\n\nlet checkForActiveProject = (array) => {\n    if (findActiveProject(array) === undefined) {\n        console.log(array);\n        array[0].isActive = true;\n    }\n}\n\nlet removeItem = (event, array) => {\n    array.splice(event.id, 1);\n}\n\n\n\n//# sourceURL=webpack:///./src/helper-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-functions.js */ \"./src/dom-functions.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _helper_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions.js */ \"./src/helper-functions.js\");\n\n\n\n\n\n\n\n\nlet projects = [];\nlet currentList = document.querySelector('.current-list');\nlet todoExpandButton = document.querySelector('.add-list-item-button');\nlet taskInput = document.querySelector('#task-input');\nlet addTodoButton = document.querySelector('.add-todo-button');\nlet cancelTodoButton = document.querySelector('.cancel-add-todo')\nlet addProjectButton = document.querySelector('.add-project-button');\nlet cancelProjectButton = document.querySelector('.project-cancel-button');\nlet projectsList = document.querySelector('.lists');\n\n//Set default date to current date\n\n\nlet checkForm = () => {\n    let input = taskInput.value;\n    let cansubmit = (input.length > 0);\n    addTodoButton.disabled = !cansubmit;\n    console.log(taskInput);\n}\n\nlet addNewTodo = () => {\n    let activeProject = Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects);\n    let date = document.querySelector('#todo-date').value;\n\n    if (taskInput.value === '') return;\n\n    let newTodo = Object(_todos_js__WEBPACK_IMPORTED_MODULE_1__[\"createTodo\"])(taskInput.value, date);\n\n    activeProject.items.push(newTodo);\n    taskInput.value = '';\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(activeProject);\n    updateStorage();\n}\n\nlet addNewProject = () => {\n    let projectNameIput = document.querySelector('#project-input');\n    let newProject = Object(_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"createNewProject\"])(projectNameIput.value);\n\n    if (projectNameIput === '') return\n\n    projects.push(newProject);\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n    updateStorage();\n}\n\nlet loadStorage = () => {\n    if (localStorage.getItem('projects') && localStorage.getItem('projects') !== '[]') {\n        let retrievedData = localStorage.getItem('projects');\n        projects = JSON.parse(retrievedData);\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects));\n    } else {\n        let defaultProject = Object(_projects_js__WEBPACK_IMPORTED_MODULE_2__[\"createNewProject\"])('Default');\n        projects.push(defaultProject);\n        defaultProject.isActive = true;\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n        updateStorage();\n    }\n}\n\nlet updateStorage = () => {\n    localStorage.setItem('projects', JSON.stringify(projects));\n}\n\n\n// listeners\n\ntodoExpandButton.addEventListener('click', (e) => {\n    //Sets the date field on HTML element to current date\n    document.getElementById('todo-date').valueAsDate = new Date();\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleHide\"])();\n    checkForm();\n})\n\naddTodoButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    addNewTodo();\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleHide\"])();\n})\n\ntaskInput.addEventListener('keyup', checkForm);\n\ncancelTodoButton.addEventListener('click', () => {\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"toggleHide\"])();\n})\n\naddProjectButton.addEventListener('click', () => {\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"togglePopup\"])();\n})\n\ndocument.querySelector('form').addEventListener('submit', (e) => {\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"togglePopup\"])();\n    e.preventDefault();\n    addNewProject();\n    e.target.reset();\n\n})\n\ncancelProjectButton.addEventListener('click', () => {\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"togglePopup\"])();\n})\n\n//change active project or delete project\n\nprojectsList.addEventListener('click', (event) => {\n    let target = event.target;\n    if (target.classList.contains('project-name')) {\n        Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"activateProject\"])(target.parentNode.id, projects);\n        let activeProject = Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects);\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(activeProject);\n        Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"clearActiveProjectStyle\"])();\n        target.parentNode.classList.add('active-project');\n        updateStorage();\n    }\n    if (target.classList.contains('list-delete-button')) {\n        Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"removeItem\"])(target, projects);\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateProjectsList\"])(projects);\n        updateStorage();\n        Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects));\n    }\n})\n\n\n//delete todo\ncurrentList.addEventListener('click', (event) => {\n    let target = event.target;\n    let activeProject = Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"findActiveProject\"])(projects);\n\n    if (!target.classList.contains('list-item-delete-button')) return;\n\n    Object(_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__[\"removeItem\"])(target, activeProject.items);\n    Object(_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__[\"updateTodoList\"])(activeProject);\n    updateStorage();\n})\n\nloadStorage();\n\n//# sourceURL=webpack:///./src/index.js?");

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
/*! exports provided: createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\nlet createTodo = (newTask, newDate) => {\n    let task = newTask;\n    let date = newDate;\n    let id;\n    let priority = 'low';\n    let getTask = () => {\n        return task;\n    }\n\n    return {\n        getTask,\n        id,\n        task,\n        date,\n        priority\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/todos.js?");

/***/ })

/******/ });