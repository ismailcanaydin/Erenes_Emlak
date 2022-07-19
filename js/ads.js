//import axios from 'axios'

const createOptionProject = (project) => {
    const optionProject = document.createElement('div');
    optionProject.innerHTML = `
    <a type="submit" style="text-decoration: none; color:black">
        <div class="card mb-3" style="width: 940px; ">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="img\\real-estate\\${project.images[0]}" class="img-fluid rounded-start"
                        style="height: 150px;" alt="...">
                </div>
                <div class="col-md-8" style="margin-left: -100px;">
                    <div class="card-body">
                        <h5 class="card-title">${project.price} TL</h5>
                        <p class="card-text">
                            <strong>Satılık Daire | ${project.roomSize} | ${project.sizeM2} m2 | ${project.buildingAge} Yaşında | ${project.floor}. Kat</strong>
                        </p>
                        <p class="card-text">${project.county} ${project.district} SATLIK ${project.roomSize} DAİRE</p>
                        <button id="${project.id}" class="btn text-danger position-absolute bottom-0 end-0">Detay Göster</button>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    </a>
`;

    return optionProject;

};

const appendProjectToDOM = (project) => {
    const selectproject = document.querySelector('#estate-list');
    project.map(project => {
        selectproject.appendChild(createOptionProject(project));
    });
};

const projects = () => {
    axios.get('http://localhost:3000/ads/')
        .then(response => {
            const project = response.data;
            console.log(`GET list project`, project);
            console.log((project[1]));
            appendProjectToDOM(project);
        })
        .catch(error => console.error(error));
};
projects();

let linkValue = document.querySelector('button')
linkValue = document.addEventListener('click', (event) => {
    let estateId = [];
    estateId = event.target.id;
    console.log(estateId);
    estateidPost(estateId)
})

export function estateidPost(estateId) {
    window.location.href = '../admin-page/estate-detail.html'
    console.log("offff  " + estateId);
}

// function idPost(event) {
//     let target = []
//     target = event.currentTarget.id;

//     // optionProject.submit();
//     alert(target)
//     idD(target)
// }

// export function idD(target) {
//     console.log(target);
// }

// export const deneme = "deneme yazı"

// export {idD}