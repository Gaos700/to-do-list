let tareas = [];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList');
const openTasksCount = document.getElementById('openTasksCount');
const closeTasksCount = document.getElementById('closeTasksCount');


function renderHtml(){
    tasksList.innerHTML = '';
    let abiertas = 0;
    let cerradas = 0;
    tareas.forEach((tarea, i) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;
        checkbox.addEventListener('change', ()=> {
            tarea.completada = !tarea.completada;
            li.style.textDecoration = 'line-through'
            renderHtml();
        });

        if (tarea.completada) {
            li.style.textDecoration = 'line-through'
        } else {
            li.style.textDecoration = 'none'
        };
    
    const span = document.createElement('span');
    span.textContent = tarea.descipcion;

    const btn = document.createElement('button');
    btn.textContent = 'Borrar';
    btn.addEventListener('click', () => {
        tareas.splice(i, 1);
        renderHtml();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    tasksList.appendChild(li);

    if (!tarea.completada){
        abiertas++;
    } else {
        cerradas++;
    }
    });
    openTasksCount.textContent = abiertas;
    closeTasksCount.textContent = cerradas;
}



addTaskBtn.addEventListener('click' , () => {
    const desc = taskInput.value.trim();
    if (desc) {
        tareas.push({descipcion: desc , completada: false});
        taskInput.value = '';
        renderHtml();
    }
});

