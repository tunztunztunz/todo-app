import {
    findActiveProject,
    checkForActiveProject
} from "./helper-functions";

import {
    projects
} from './index.js';

let currentList = document.querySelector('.current-list');
let listHeaderDiv = document.querySelector('.list-header-div');
let projectsList = document.querySelector('.lists');

let renderTodoList = (object) => {
    let items = object.items;

    let projectName = document.createElement('h2');

    projectName.textContent = object.name;
    listHeaderDiv.appendChild(projectName);



    for (let i = 0; i < items.length; i++) {

        let newListItem = document.createElement('li');
        let checkbox = document.createElement('input');
        let deleteButton = document.createElement('span');
        let description = document.createElement('span');
        let date = document.createElement('span');

        items[i].id = i;

        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.classList.add('todo-checkbox');
        newListItem.appendChild(checkbox);

        description.textContent = items[i].task;
        description.classList.add('todo-description');
        newListItem.appendChild(description);

        date.textContent = items[i].date;
        newListItem.appendChild(date);

        deleteButton.textContent = 'x';
        deleteButton.classList.add('list-item-delete-button');
        deleteButton.id = items[i].id;
        newListItem.appendChild(deleteButton);

        newListItem.classList.add('list-item');
        currentList.appendChild(newListItem);
    }
}

let clearTodoList = () => {
    while (currentList.firstChild) {
        currentList.removeChild(currentList.lastChild);
    }

    listHeaderDiv.removeChild(listHeaderDiv.lastChild);
}

let updateTodoList = (items) => {
    clearTodoList();
    renderTodoList(items)
}

let renderProjectsList = (projects) => {

    for (let i = 0; i < projects.length; i++) {
        let newProject = document.createElement('li');
        let projectName = document.createElement('span');
        let deleteButton = document.createElement('span');

        projects[i].id = i;

        let activeProject = findActiveProject(projects);


        if (activeProject === undefined) {
            checkForActiveProject(projects);
            activeProject = projects[0];
        }

        projectName.textContent = projects[i].name;
        projectName.classList.add('project-name');
        newProject.appendChild(projectName);

        console.log(projectName.textContent);
        if (projectName.textContent === 'Default');
        else {
            deleteButton.textContent = 'x';
            deleteButton.classList.add('list-delete-button');
            deleteButton.id = projects[i].id;
            newProject.appendChild(deleteButton);
        }



        newProject.classList.add('list')
        newProject.id = projects[i].id;
        projectsList.appendChild(newProject);

        if (Number(newProject.id) === activeProject.id) {
            newProject.classList.add('active-project');
        }
    }
}

let clearProjectsList = () => {
    while (projectsList.firstChild) {
        projectsList.removeChild(projectsList.lastChild);
    }
}

let updateProjectsList = (projects) => {
    clearProjectsList();
    renderProjectsList(projects);
}

let toggleHide = () => {
    let div = document.querySelector('.add-todo-div');
    let button = document.querySelector('.add-list-item-button');
    if (div.classList.contains('hide')) {
        div.classList.toggle('hide');
        button.classList.toggle('hide');
    } else {
        div.classList.toggle('hide');
        button.classList.toggle('hide');
    }
}

let togglePopup = () => {
    let background = document.querySelector('.popup-background');
    background.classList.toggle('hide');
}

export {
    renderTodoList,
    clearTodoList,
    updateTodoList,
    renderProjectsList,
    clearProjectsList,
    updateProjectsList,
    toggleHide,
    togglePopup
}