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

/***/ "./src/dom-functions.js":
/*!******************************!*\
  !*** ./src/dom-functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTodoList\": () => (/* binding */ renderTodoList),\n/* harmony export */   \"clearTodoList\": () => (/* binding */ clearTodoList),\n/* harmony export */   \"updateTodoList\": () => (/* binding */ updateTodoList),\n/* harmony export */   \"renderProjectsList\": () => (/* binding */ renderProjectsList),\n/* harmony export */   \"clearProjectsList\": () => (/* binding */ clearProjectsList),\n/* harmony export */   \"updateProjectsList\": () => (/* binding */ updateProjectsList),\n/* harmony export */   \"toggleHide\": () => (/* binding */ toggleHide),\n/* harmony export */   \"togglePopup\": () => (/* binding */ togglePopup)\n/* harmony export */ });\n/* harmony import */ var _helper_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions */ \"./src/helper-functions.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nlet currentList = document.querySelector('.current-list');\nlet listHeaderDiv = document.querySelector('.list-header-div');\nlet projectsList = document.querySelector('.lists');\n\nlet renderTodoList = (object) => {\n    let items = object.items;\n\n    let projectName = document.createElement('h2');\n\n    projectName.textContent = object.name;\n    listHeaderDiv.appendChild(projectName);\n\n\n\n    for (let i = 0; i < items.length; i++) {\n\n        let newListItem = document.createElement('li');\n        let checkbox = document.createElement('input');\n        let deleteButton = document.createElement('span');\n        let description = document.createElement('span');\n        let date = document.createElement('span');\n\n        items[i].id = i;\n\n        checkbox.type = 'checkbox';\n        checkbox.id = i;\n        checkbox.classList.add('todo-checkbox');\n        newListItem.appendChild(checkbox);\n\n        description.textContent = items[i].task;\n        description.classList.add('todo-description');\n        newListItem.appendChild(description);\n\n        date.textContent = items[i].date;\n        newListItem.appendChild(date);\n\n        deleteButton.textContent = 'x';\n        deleteButton.classList.add('list-item-delete-button');\n        deleteButton.id = items[i].id;\n        newListItem.appendChild(deleteButton);\n\n        newListItem.classList.add('list-item');\n        currentList.appendChild(newListItem);\n    }\n}\n\nlet clearTodoList = () => {\n    while (currentList.firstChild) {\n        currentList.removeChild(currentList.lastChild);\n    }\n\n    listHeaderDiv.removeChild(listHeaderDiv.lastChild);\n}\n\nlet updateTodoList = (items) => {\n    clearTodoList();\n    renderTodoList(items)\n}\n\nlet renderProjectsList = (projects) => {\n\n    for (let i = 0; i < projects.length; i++) {\n        let newProject = document.createElement('li');\n        let projectName = document.createElement('span');\n        let deleteButton = document.createElement('span');\n\n        projects[i].id = i;\n\n        let activeProject = (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.findActiveProject)(projects);\n\n\n        if (activeProject === undefined) {\n            (0,_helper_functions__WEBPACK_IMPORTED_MODULE_0__.checkForActiveProject)(projects);\n            activeProject = projects[0];\n        }\n\n        projectName.textContent = projects[i].name;\n        projectName.classList.add('project-name');\n        newProject.appendChild(projectName);\n\n        console.log(projectName.textContent);\n        if (projectName.textContent === 'Default');\n        else {\n            deleteButton.textContent = 'x';\n            deleteButton.classList.add('list-delete-button');\n            deleteButton.id = projects[i].id;\n            newProject.appendChild(deleteButton);\n        }\n\n\n\n        newProject.classList.add('list')\n        newProject.id = projects[i].id;\n        projectsList.appendChild(newProject);\n\n        if (Number(newProject.id) === activeProject.id) {\n            newProject.classList.add('active-project');\n        }\n    }\n}\n\nlet clearProjectsList = () => {\n    while (projectsList.firstChild) {\n        projectsList.removeChild(projectsList.lastChild);\n    }\n}\n\nlet updateProjectsList = (projects) => {\n    clearProjectsList();\n    renderProjectsList(projects);\n}\n\nlet toggleHide = () => {\n    let div = document.querySelector('.add-todo-div');\n    let button = document.querySelector('.add-list-item-button');\n    if (div.classList.contains('hide')) {\n        div.classList.toggle('hide');\n        button.classList.toggle('hide');\n    } else {\n        div.classList.toggle('hide');\n        button.classList.toggle('hide');\n    }\n}\n\nlet togglePopup = () => {\n    let background = document.querySelector('.popup-background');\n    background.classList.toggle('hide');\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/dom-functions.js?");

/***/ }),

/***/ "./src/helper-functions.js":
/*!*********************************!*\
  !*** ./src/helper-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activateProject\": () => (/* binding */ activateProject),\n/* harmony export */   \"findActiveProject\": () => (/* binding */ findActiveProject),\n/* harmony export */   \"clearActiveProjectStyle\": () => (/* binding */ clearActiveProjectStyle),\n/* harmony export */   \"checkForActiveProject\": () => (/* binding */ checkForActiveProject),\n/* harmony export */   \"removeItem\": () => (/* binding */ removeItem)\n/* harmony export */ });\nlet activateProject = (event, array) => {\n    array.forEach((e) => {\n        e.isActive = false;\n    })\n    array[event].isActive = true;\n}\n\nlet clearActiveProjectStyle = () => {\n    let projects = document.querySelectorAll('.list');\n    projects.forEach((e) => {\n        e.classList.remove('active-project');\n    })\n}\n\nlet findActiveProject = (array) => array.find(item => item.isActive);\n\nlet checkForActiveProject = (array) => {\n    if (findActiveProject(array) === undefined) {\n        console.log(array);\n        array[0].isActive = true;\n    }\n}\n\nlet removeItem = (event, array) => {\n    array.splice(event.id, 1);\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/helper-functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-functions.js */ \"./src/dom-functions.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ \"./src/projects.js\");\n/* harmony import */ var _helper_functions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions.js */ \"./src/helper-functions.js\");\n\n\n\n\n\n\n\n\nlet projects = [];\nlet currentList = document.querySelector(\".current-list\");\nlet todoExpandButton = document.querySelector(\".add-list-item-button\");\nlet taskInput = document.querySelector(\"#task-input\");\nlet addTodoButton = document.querySelector(\".add-todo-button\");\nlet cancelTodoButton = document.querySelector(\".cancel-add-todo\");\nlet addProjectButton = document.querySelector(\".add-project-button\");\nlet cancelProjectButton = document.querySelector(\".project-cancel-button\");\nlet projectsList = document.querySelector(\".lists\");\n\n//Set default date to current date\n\nlet checkForm = () => {\n  let input = taskInput.value;\n  let cansubmit = input.length > 0;\n  addTodoButton.disabled = !cansubmit;\n  console.log(taskInput);\n};\n\nlet addNewTodo = () => {\n  let activeProject = (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.findActiveProject)(projects);\n  let date = document.querySelector(\"#todo-date\").value;\n\n  if (taskInput.value === \"\") return;\n\n  let newTodo = (0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)(taskInput.value, date);\n\n  activeProject.items.push(newTodo);\n  taskInput.value = \"\";\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoList)(activeProject);\n  updateStorage();\n};\n\nlet addNewProject = () => {\n  let projectNameIput = document.querySelector(\"#project-input\");\n  let newProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(projectNameIput.value);\n\n  if (projectNameIput === \"\") return;\n\n  projects.push(newProject);\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectsList)(projects);\n  updateStorage();\n};\n\nlet loadStorage = () => {\n  if (\n    localStorage.getItem(\"projects\") &&\n    localStorage.getItem(\"projects\") !== \"[]\"\n  ) {\n    let retrievedData = localStorage.getItem(\"projects\");\n    projects = JSON.parse(retrievedData);\n    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectsList)(projects);\n    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoList)((0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.findActiveProject)(projects));\n  } else {\n    let defaultProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.createNewProject)(\"Default\");\n    projects.push(defaultProject);\n    defaultProject.isActive = true;\n    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectsList)(projects);\n    updateStorage();\n  }\n};\n\nlet updateStorage = () => {\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n};\n\n// listeners\n\ntodoExpandButton.addEventListener(\"click\", (e) => {\n  //Sets the date field on HTML element to current date\n  document.getElementById(\"todo-date\").valueAsDate = new Date();\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleHide)();\n  checkForm();\n});\n\naddTodoButton.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  addNewTodo();\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleHide)();\n});\n\ntaskInput.addEventListener(\"keyup\", checkForm);\n\ncancelTodoButton.addEventListener(\"click\", () => {\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.toggleHide)();\n});\n\naddProjectButton.addEventListener(\"click\", () => {\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.togglePopup)();\n});\n\ndocument.querySelector(\"form\").addEventListener(\"submit\", (e) => {\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.togglePopup)();\n  e.preventDefault();\n  addNewProject();\n  e.target.reset();\n});\n\ncancelProjectButton.addEventListener(\"click\", () => {\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.togglePopup)();\n});\n\n//change active project or delete project\n\nprojectsList.addEventListener(\"click\", (event) => {\n  let target = event.target;\n  if (target.classList.contains(\"project-name\")) {\n    (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.activateProject)(target.parentNode.id, projects);\n    let activeProject = (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.findActiveProject)(projects);\n    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoList)(activeProject);\n    (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.clearActiveProjectStyle)();\n    target.parentNode.classList.add(\"active-project\");\n    updateStorage();\n  }\n  if (target.classList.contains(\"list-delete-button\")) {\n    (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.removeItem)(target, projects);\n    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateProjectsList)(projects);\n    updateStorage();\n    (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoList)((0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.findActiveProject)(projects));\n  }\n});\n\n//delete todo\ncurrentList.addEventListener(\"click\", (event) => {\n  let target = event.target;\n  let activeProject = (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.findActiveProject)(projects);\n\n  if (!target.classList.contains(\"list-item-delete-button\")) return;\n\n  (0,_helper_functions_js__WEBPACK_IMPORTED_MODULE_3__.removeItem)(target, activeProject.items);\n  (0,_dom_functions_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoList)(activeProject);\n  updateStorage();\n});\n\nloadStorage();\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject)\n/* harmony export */ });\nlet createNewProject = (inputName) => {\n    let name = inputName;\n    let id;\n    let items = [];\n    let isActive = false;\n\n    return {\n        name,\n        id,\n        items,\n        isActive\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo)\n/* harmony export */ });\nlet createTodo = (newTask, newDate) => {\n    let task = newTask;\n    let date = newDate;\n    let id;\n    let priority = 'low';\n    let getTask = () => {\n        return task;\n    }\n\n    return {\n        getTask,\n        id,\n        task,\n        date,\n        priority\n    }\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/todos.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;