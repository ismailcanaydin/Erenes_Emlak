
const createLabel = (project) => {
    const label = document.createElement('label');

    label.innerHTML = `
    <input class="form-check-input me-1 my-auto" type="checkbox" onchange="formEvent(this)" value="${project.id}">
    <div class="d-flex ms-2">
        <img class="rounded-2" src="../img\\real-estate\\${project.projectImage}" alt="" srcset=""
            height="50">
        <div class="rounded-2 d-flex" style="width: 480px; height: 50px;">
            <h5 class="ms-3 my-auto">${project.projectName}</h5>
        </div>
    </div>`;
    label.classList.add('list-group-item', 'd-flex')

    return label;
};

const appendToDOM = (projects) => {
    const listGroup = document.querySelector('#list-group');
    //iterate over all projects
    projects.map(project => {
        listGroup.appendChild(createLabel(project));
    });
};

const fetchProjects = () => {
    axios.get('http://localhost:3000/projects/')
        .then(response => {
            const projects = response.data;
            // console.log(`GET list projects`, projects);
            // append to DOM
            appendToDOM(projects);
        })
        .catch(error => console.error(error));
};

fetchProjects();

const form = document.querySelector('form');

function formEvent(id) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (id.checked) {
            // console.log(id.value);
            deleteProject(id)
        }
    });
}

// DELETE
const deleteProject = (id) => {
    axios.delete(`http://localhost:3000/projects/${id.value}`)
        .then(response => {
            console.log(`DELETE: user is removed`, id.value);
            alert("proje silindi")
        })
        .catch(error => console.error(error));
};