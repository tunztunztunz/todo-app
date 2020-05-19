let createTodo = (newTask, newDate) => {
    let task = newTask;
    let date = newDate;
    let id;
    let priority = 'low';
    let getTask = () => {
        return task;
    }

    return {
        getTask,
        id,
        task,
        date,
        priority
    }
}

export {
    createTodo
}