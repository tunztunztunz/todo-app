import {
    findActiveProject,
    activateProject,
    checkForActiveProject
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

        console.log(items[i]);
        description.textContent = items[i].task;
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

    console.log(projects);

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
        newProject.appendChild(projectName);

        deleteButton.textContent = 'x';
        deleteButton.classList.add('list-delete-button');
        deleteButton.id = projects[i].id;
        newProject.appendChild(deleteButton);

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




export {
    renderTodoList,
    clearTodoList,
    updateTodoList,
    renderProjectsList,
    clearProjectsList,
    updateProjectsList
}