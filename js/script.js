let tareas = []

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList')
const openTasksCount = document.getElementById('openTasksCount')


addTaskBtn.addEventListener('click' , () => {
    const desc = taskInput.value.trim();
    if (desc) {
        tareas.push({descipcion: desc , completada: false});
        console.log(tareas);
        taskInput.value = ' ';
    }
})

