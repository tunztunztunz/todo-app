let activateProject = (event, array) => {
    array.forEach((e) => {
        e.isActive = false;
    })
    if (event.classList.contains('list')) {
        array[event.id].isActive = true;
    } else {
        array[event].isActive = true;
    }
}

let clearActiveProjectStyle = () => {
    let projects = document.querySelectorAll('.list');
    projects.forEach((e) => {
        e.classList.remove('active-project');
    })
}

let findActiveProject = (array) => array.find(item => item.isActive);

let checkForActiveProject = (array) => {
    if (findActiveProject(array) === undefined) {
        console.log(array);
        array[0].isActive = true;
    }
}

let removeItem = (event, array) => {
    console.log('event.id');
    console.log(event.id);
    array.splice(event.id, 1);
}

export {
    activateProject,
    findActiveProject,
    clearActiveProjectStyle,
    checkForActiveProject,
    removeItem
}