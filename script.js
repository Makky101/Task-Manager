const task = document.querySelector(".task-bar");
const dateBar = document.querySelector(".date-bar");
const addBtn = document.querySelector(".add-btn");
const deleteAllBtn = document.querySelector(".delete-all-btn");

const tasks = JSON.parse(localStorage.getItem("tasks")) || []
renderTasks();

addBtn.addEventListener("click", () => {
    if (task.value === '' || dateBar.value === '') {
        task.value = '';
        dateBar.value = '';
        return;
    };
    tasks.push({
        title: task.value,
        date: dateBar.value
    });
    task.value = '';
    dateBar.value = '';
    renderTasks()
});
deleteAllBtn.addEventListener("click", () => {
    deleteAll();
})

function renderTasks() {
    const allTasks = document.querySelector(".tasks");
    let render = '';
    allTasks.innerHTML = '';
    tasks.forEach(tasks => {
        const { title, date } = tasks
        render += `
            <div class="overlay">
                <div class="info-section">${title}</div>
                <div class="date">${date}</div>
                <button class="delete-btn">Delete</button>
            </div>
        
        `
    });
    allTasks.innerHTML += render;
    document.querySelectorAll(".delete-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks()
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks))
};

function deleteAll() {
    tasks.splice(0, tasks.length);
    renderTasks()
};