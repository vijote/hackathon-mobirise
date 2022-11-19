const element = document.querySelector('#task-list')
const careerElement = document.querySelector('#career-name')

function getTask(id) {
    return new Promise((resolve) => {
        fetch(`http://localhost:5000/api/tasks/${id}`)
        .then((response) => response.json())
        .then((data) => {
            resolve(data)
        });
    })
}


window.addEventListener("load", async () => {
    const queryString = window.location.search
    const id = queryString.split('=')[1]
    const taskId = queryString.split('&')[1].split('=')[1]

    const tasks = await getTasks(id)
    const task = tasks.find(task.id === Number(taskId))
    console.log(task);

    let innerHTML = ''

    tasks.forEach((task, index) => {
        innerHTML += `
        <div class="item mbr-flex">
            <div class="icon-box">
                <span class="step-number mbr-fonts-style display-5">${index}</span>
            </div>
            <div class="text-box">
                <h4 class="icon-title card-title mbr-black mbr-fonts-style display-7"><strong>${task.title}</strong></h4>
                <h5 class="icon-text mbr-black mbr-fonts-style display-4">${task.description}.</h5>
            </div>
        </div>
        `
    });

    element.innerHTML = innerHTML
    careerElement.innerHTML = career.name
  });
