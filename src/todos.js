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

let deleteTodo = (event, array) => {
    array.splice(event.id, 1);
}

export {
    createTodo,
    deleteTodo
}