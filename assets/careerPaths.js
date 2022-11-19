const element = document.querySelector('#career-paths')

function getTasks() {
    return new Promise((resolve) => {
        fetch(`http://localhost:5000/api/careerPaths`)
        .then((response) => response.json())
        .then((data) => {
            resolve(data)
        });
    })
}

window.addEventListener("load", async () => {
    const careerPaths = await getTasks()

    let innerHTML = ''

    careerPaths.forEach(careerPath => {
        innerHTML += `<li><strong style="text-transform: capitalize">${careerPath.name}</strong> <a href="./page4.html?id=${careerPath.id}">Ver mas</a></li>`
    });

    element.innerHTML = innerHTML
  });
