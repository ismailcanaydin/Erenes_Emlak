// import { cloudinary23 } from './cloudinary.js'

// console.log(cloudinary23);

// console.log("deneme");

// const fileSelector = document.querySelector('#file-selector');
// let file2;
// fileSelector.addEventListener('change', event2 => {
//     const fileList = fileSelector.files;

//     // fileList.forEach(element => {
//     //     console.log("foreach "+element)
//     // });
//     for (var i = 0; i < fileList.length; i++) {

//         // get item
//         file2 = fileList.item(i);
//         //or
//         file2 = fileList[i];

//         console.log(file2.name);
//         deneme(file2)
//     }
// });

// function deneme(file2) {
//     console.log(file2.name);
// }


const form = document.querySelector('form');

let projectImageValue = document.querySelector('#projectImageValue');

function formEvent(projectImageValue) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const projectName = document.querySelector('#projectName').value;
        const explanation = document.querySelector('#explanation').value;

        const projectImage = projectImageValue.name;
        const projects = { projectName, explanation, projectImage };
        projectsControl(projects);
    });
};

projectImageValue.addEventListener('change', (event) => {
    const fileList = event.target.files;

    for (var i = 0; i < fileList.length; i++) {
        projectImageValue = fileList.item(i);
        //or
        //projectImageValue = fileList[i];

        formEvent(projectImageValue)
    }
});

const projectsControl = (projects) => {
    // console.log(projects.projectImage.name);
    // console.log(projects.projectName);
    // console.log(projects.explanation);
    axios.post('http://localhost:3000/projects/', projects)
        .then(response => {
            const projects = response.data;
            // console.log(`POST list users`, projects);
            alert("işlem başarılı")
            //window.location.href = "/admin-panel.html";
        })
        .catch(error => console.error(error));
};

