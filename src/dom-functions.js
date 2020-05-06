import {
    findActiveProject,
    activateProject
} from "./helper-functions";

import {
    projects
} from './index.js';

let currentList = document.querySelector('.current-list');
let projectsList = document.querySelector('.lists');

let renderTodoList = (items) => {

    for (let i = 0; i < items.length; i++) {

        let newListItem = document.createElement('li');
        let deleteButton = document.createElement('span');
        let description = document.createElement('span');

        items[i].id = i;

        deleteButton.textContent = 'x';
        deleteButton.classList.add('list-item-delete-button');
        deleteButton.id = items[i].id;
        newListItem.appendChild(deleteButton);

        description.textContent = items[i].getTask();
        newListItem.appendChild(description);

        newListItem.classList.add('list-item');
        currentList.appendChild(newListItem);
    }
}

let clearTodoList = () => {
    while (currentList.firstChild) {
        currentList.removeChild(currentList.lastChild);
    }
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
        console.log('activeProject: ' + activeProject.id);



        projectName.textContent = projects[i].name;
        newProject.appendChild(projectName);

        deleteButton.textContent = 'x';
        deleteButton.classList.add('list-delete-button');
        deleteButton.id = projects[i].id;
        newProject.appendChild(deleteButton);

        newProject.classList.add('list')
        newProject.id = projects[i].id;
        console.log('newProject ' + newProject.id);
        projectsList.appendChild(newProject);

        if (newProject.id === activeProject.id) {
            alert('found a match');
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




export {
    renderTodoList,
    clearTodoList,
    updateTodoList,
    renderProjectsList,
    clearProjectsList,
    updateProjectsList
}