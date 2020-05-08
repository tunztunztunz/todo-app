let createTodo = (newTask) => {
    let task = newTask;
    let id;
    let priority = 'low';
    let getTask = () => {
        return task;
    }

    return {
        getTask,
        id,
        task,
        priority
    }
}



export {
    createTodo,
}