import {
    updateTodoList,
    updateProjectsList,
    toggleHide,
    togglePopup
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
    removeItem,
    checkForActiveProject

} from './helper-functions.js';

let projects = [];
let currentList = document.querySelector('.current-list');
let todoExpandButton = document.querySelector('.add-list-item-button');
let taskInput = document.querySelector('#task-input');
let addTodoButton = document.querySelector('.add-todo-button');
let cancelTodoButton = document.querySelector('.cancel-add-todo')
let addProjectButton = document.querySelector('.add-project-button');
let cancelProjectButton = document.querySelector('.project-cancel-button');
let projectsList = document.querySelector('.lists');

//Set default date to current date


let checkForm = () => {
    let input = taskInput.value;
    let cansubmit = (input.length > 0);
    addTodoButton.disabled = !cansubmit;
    console.log(taskInput);
}

let addNewTodo = () => {
    let activeProject = findActiveProject(projects);
    let date = document.querySelector('#todo-date').value;

    if (taskInput.value === '') return;

    let newTodo = createTodo(taskInput.value, date);

    activeProject.items.push(newTodo);
    taskInput.value = '';
    updateTodoList(activeProject);
    updateStorage();
}

let addNewProject = () => {
    let projectNameIput = document.querySelector('#project-input');
    let newProject = createNewProject(projectNameIput.value);

    if (projectNameIput === '') return

    projects.push(newProject);
    updateProjectsList(projects);
    updateStorage();
}

let loadStorage = () => {
    if (localStorage.getItem('projects') && localStorage.getItem('projects') !== '[]') {
        let retrievedData = localStorage.getItem('projects');
        projects = JSON.parse(retrievedData);
        updateProjectsList(projects);
        updateTodoList(findActiveProject(projects));
    } else {
        let defaultProject = createNewProject('Default');
        projects.push(defaultProject);
        defaultProject.isActive = true;
        updateProjectsList(projects);
        updateStorage();
    }
}

let updateStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
}


// listeners

todoExpandButton.addEventListener('click', (e) => {
    //Sets the date field on HTML element to current date
    document.getElementById('todo-date').valueAsDate = new Date();
    toggleHide();
    checkForm();
})

addTodoButton.addEventListener('click', (e) => {
    e.preventDefault();
    addNewTodo();
    toggleHide();
})

taskInput.addEventListener('keyup', checkForm);

cancelTodoButton.addEventListener('click', () => {
    toggleHide();
})

addProjectButton.addEventListener('click', () => {
    togglePopup();
})

document.querySelector('form').addEventListener('submit', (e) => {
    togglePopup();
    e.preventDefault();
    addNewProject();
    e.target.reset();

})

cancelProjectButton.addEventListener('click', () => {
    togglePopup();
})

//change active project or delete project

projectsList.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('project-name')) {
        activateProject(target.parentNode.id, projects);
        let activeProject = findActiveProject(projects);
        updateTodoList(activeProject);
        clearActiveProjectStyle();
        target.parentNode.classList.add('active-project');
        updateStorage();
    }
    if (target.classList.contains('list-delete-button')) {
        removeItem(target, projects);
        updateProjectsList(projects);
        updateStorage();
        updateTodoList(findActiveProject(projects));
    }
})


//delete todo
currentList.addEventListener('click', (event) => {
    let target = event.target;
    let activeProject = findActiveProject(projects);

    if (!target.classList.contains('list-item-delete-button')) return;

    removeItem(target, activeProject.items);
    updateTodoList(activeProject);
    updateStorage();
})

loadStorage();