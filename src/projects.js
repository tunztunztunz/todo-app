let createNewProject = (inputName) => {
    let name = inputName;
    let id;
    let items = [];
    let isActive = false;

    return {
        name,
        id,
        items,
        isActive
    }
}

export {
    createNewProject
}