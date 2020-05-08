import {
    updateTodoList,
    updateProjectsList
} from './dom-functions.js';

import {
    createTodo,
} from './todos.js';

import {
    createNewProject,
} from './projects.js';

import {
    activateProject,
    findActiveProject,
    clearActiveProjectStyle,
    removeItem

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

    updateStorage();
}

let addNewProject = () => {
    let projectNameIput = document.querySelector('#project-input');
    let newProject = createNewProject(projectNameIput.value);
    projects.push(newProject);
    updateProjectsList(projects);
    updateStorage();
}

let loadStorage = () => {
    if (localStorage.getItem('projects') && localStorage.getItem('projects') !== '[]') {
        let retrievedData = localStorage.getItem('projects');
        projects = JSON.parse(retrievedData);
        updateProjectsList(projects);
        updateTodoList(findActiveProject(projects).items);
    } else {
        let exampleProject = createNewProject('Example Todo List');
        projects.push(exampleProject);
        exampleProject.isActive = true;
        let exampleProject2 = createNewProject('Example Todo List Number 2');
        projects.push(exampleProject2);
        updateProjectsList(projects);
        updateStorage();
    }
}

let updateStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
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
        updateStorage();
    }
    if (target.classList.contains('list-delete-button')) {
        removeItem(target, projects);
        updateProjectsList(projects);
        updateStorage();
        updateTodoList(findActiveProject(projects).items);
    }

})

//delete todo
currentList.addEventListener('click', (event) => {
    let target = event.target;
    let items = findActiveProject(projects).items;

    if (!target.classList.contains('list-item-delete-button')) return;

    removeItem(target, items);
    updateTodoList(items);
})

loadStorage();
console.log(projects);