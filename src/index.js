import {
    updateTodoList,
    updateProjectsList
} from './dom-functions.js';

import {
    createTodo,
    deleteTodo
} from './todos.js';

import {
    createNewProject,
    deleteProject
} from './projects.js';

import {
    activateProject,
    findActiveProject,
    clearActiveProjectStyle
} from './helper-functions.js';

let projects = [];
let currentList = document.querySelector('.current-list');
let addTodoButton = document.querySelector('.add-list-item-button');
let addProjectButton = document.querySelector('.add-project-button');

let projectsList = document.querySelector('.lists');

let addNewTodo = () => {
    let items = findActiveProject(projects).items;
    let taskInput = document.querySelector('#task-input');
    let newTodo = createTodo(taskInput.value);

    items.push(newTodo);
    taskInput.value = '';
    updateTodoList(items);
}

let addNewProject = () => {
    let projectNameIput = document.querySelector('#project-input');
    let newProject = createNewProject(projectNameIput.value);
    projects.push(newProject);
    updateProjectsList(projects);
}


// listeners

addTodoButton.addEventListener('click', addNewTodo)
addProjectButton.addEventListener('click', addNewProject)

//change active project or delete project

projectsList.addEventListener('click', (event) => {
    let td = event.target.closest('.list');
    let target = event.target;
    if (td.classList.contains('list')) {
        activateProject(td, projects);
        let items = findActiveProject(projects).items;
        updateTodoList(items);
        clearActiveProjectStyle();
        td.classList.add('active-project');
    }
    if (target.classList.contains('list-delete-button')) {
        deleteTodo(target, projects);
        updateProjectsList(projects);
    }

})

//delete todo
currentList.addEventListener('click', (event) => {
    let target = event.target;
    let items = findActiveProject(projects).items;

    if (!target.classList.contains('list-item-delete-button')) return;

    deleteTodo(target, items);
    updateTodoList(items);
})

//delete project

projectsList.addEventListener('click', (event) => {
    let target = event.target;
    if (!target.classList.contains('lists')) return;


})

let examples = () => {
    let exampleProject = createNewProject('Example Todo List');
    projects.push(exampleProject);
    exampleProject.isActive = true;
    let exampleProject2 = createNewProject('Example Todo List Number 2');
    projects.push(exampleProject2);
    updateProjectsList(projects);
    console.log(projects);
}

examples();