const createOptionProject = (project) => {
    const optionProject = document.createElement('div');
    optionProject.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card mb-5 shadow-lg bg-white rounded" style="margin-left: 150px; width: 800px;">
                    <img src="img\\real-estate\\${project.projectImage}" width="515"
                        height="364" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${project.projectName}</h5>
                        <p class="card-text">${project.explanation}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

    return optionProject;

};
const appendProjectToDOM = (project) => {
    const selectproject = document.querySelector('#cardDOM');
    project.map(project => {
        selectproject.appendChild(createOptionProject(project));
    });
};

const projects = () => {
    axios.get('http://localhost:3000/projects/')
        .then(response => {
            const project = response.data;
            console.log(`GET list project`, project);
            console.log((project[1]));
            appendProjectToDOM(project);
        })
        .catch(error => console.error(error));
};
projects();