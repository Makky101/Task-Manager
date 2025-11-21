const task = document.querySelector(".task-bar");
const dateBar = document.querySelector(".date-bar");
const addBtn = document.querySelector(".add-btn");
const deleteAllBtn = document.querySelector(".delete-all-btn");
const count = document.getElementById("count")

renderTasks();

addBtn.addEventListener("click", async () => {
    if (task.value === '' || dateBar.value === '') {
        task.value = '';
        dateBar.value = '';
        return;
    };
    try{
        const response = await fetch('http://localhost:3000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: task.value.trim(),
                date: dateBar.value.trim(),
            })
        })
        const result = await response.json()
        console.log(result.message)
    }catch(err){
        console.log(err.message)
    }
    
    task.value = '';
    dateBar.value = '';
    renderTasks()
});


deleteAllBtn.addEventListener("click", async () => {
    await deleteAll();
})

async function renderTasks() {
    const taskList = document.getElementById("taskList");
    let render = '';
    taskList.innerHTML = '';
    let response = await fetch('http://localhost:3000/load', { method: 'GET' })
    let result = await response.json()
    result.forEach(task => {
        const { id, duty, datetime } = task
        render += `
            <li class="flex items-center justify-between p-3 rounded-lg border bg-white">
            <div class="flex flex-col">

                <div class="font-medium">
                    ${duty}
                </div>
        
                <div class="text-xs text-slate-500">
                    ${new Date(datetime).toLocaleDateString()}
                </div>
            </div>
        
            <div class="flex gap-2 items-center">
                <button data-id="${id}" class="delete-btn px-2 py-1 rounded-md border hover:bg-red-50 text-red-600">
                    Delete
                </button>
            </div>         
        </li>
        `
    });
    count.innerHTML = `${result.length} tasks`
    taskList.innerHTML += render;
    
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", async () => {
            try {
                const id = button.dataset.id;
                const response = await fetch(`http://localhost:3000/delete/${id}`, { method: 'DELETE' });
                const result = await response.json()
                console.log(result.message)
            } catch (err) {
                console.log(err.message)
            }
            renderTasks()
        });
    });
};

async function deleteAll() {
    const response = await fetch('http://localhost:3000/delete', { method: 'DELETE' });
    const result = await response.json();
    console.log(result.message); 
    renderTasks()
};