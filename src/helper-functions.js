let activateProject = (event, array) => {
    array.forEach((e) => {
        e.isActive = false;
    })
    array[event.id].isActive = true;
}

let clearActiveProjectStyle = () => {
    let projects = document.querySelectorAll('.list');
    console.log(projects)
    projects.forEach((e) => {
        e.classList.remove('active-project');
    })

}

let findActiveProject = (array) => array.find(item => item.isActive);

export {
    activateProject,
    findActiveProject,
    clearActiveProjectStyle
}