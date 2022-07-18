// categorileri listele
const createOption = (category) => {
    const option = document.createElement('option');
    option.innerHTML = `${category}`;
    return option;
};
const appendToDOM = (category) => {
    const select = document.querySelector('#categorys');
    category.map(category => {
        select.appendChild(createOption(category));
    });
};

const categorys = () => {
    axios.get('http://localhost:3000/categorys/')
        .then(response => {
            const category = response.data;
            // console.log(`GET list category`, category);
            // console.log((category[1]));
            appendToDOM(category);
        })
        .catch(error => console.error(error));
};
categorys();
// *******

// mahalleleri listele
const createOptionDistrict = (district) => {
    const optionDistrict = document.createElement('option');
    optionDistrict.innerHTML = `${district}`;

    return optionDistrict;
};
const appendDistrictToDOM = (district) => {
    const selectDistrict = document.querySelector('#district');
    district.map(district => {
        selectDistrict.appendChild(createOptionDistrict(district));
    });
};

const districts = () => {
    axios.get('http://localhost:3000/districts/')
        .then(response => {
            const district = response.data;
            // console.log(`GET list district`, district);
            // console.log((district[1]));
            appendDistrictToDOM(district);
        })
        .catch(error => console.error(error));
};
districts();
// *****

// projeleri listele
const createOptionProject = (project) => {
    const optionProject = document.createElement('option');
    optionProject.innerHTML = `${project.projectName}`;

    return optionProject;
};
const appendProjectToDOM = (project) => {
    const selectproject = document.querySelector('#project');
    project.map(project => {
        selectproject.appendChild(createOptionProject(project));
    });
};

const projects = () => {
    axios.get('http://localhost:3000/projects/')
        .then(response => {
            const project = response.data;
            // console.log(`GET list project`, project);
            // console.log((project[1]));
            appendProjectToDOM(project);
        })
        .catch(error => console.error(error));
};
projects();
// *****

// yeni emlak ekle
const form = document.querySelector('form');

let imagesValue = document.querySelector('#images');

function formEvent(imagesArray) {
    form.addEventListener('submit', event => {
        event.preventDefault();

        const images = [];

        const city = document.querySelector('#city').value;
        const county = document.querySelector('#county').value;
        const district = document.querySelector('#district').value;
        const project = document.querySelector('#project').value;
        const categorys = document.querySelector('#categorys').value;
        const price = document.querySelector('#price').value;
        const sizeM2 = document.querySelector('#size-m2').value;
        const roomSize = document.querySelector('#room-size').value;
        const bathroomSize = document.querySelector('#bathroom-size').value;
        const buildingAge = document.querySelector('#building-age').value;
        const floor = document.querySelector('#floor').value;
        const floorTotal = document.querySelector('#floor-total').value;
        const date = document.querySelector('#date').value;

        for (let index = 0; index < imagesArray.length; index++) {
            const element = imagesArray[index];
            images.push(element.name)
        }

        const ads = {
            city, county, district, project, categorys, price, sizeM2, roomSize, bathroomSize, buildingAge, floor, floorTotal, images, date
        };
        adsControl(ads);
    });

};

imagesValue.addEventListener('change', (event) => {
    const fileList = event.target.files;
    let addArray = [];
    let imagesArray = [];
    for (var i = 0; i < fileList.length; i++) {
        addArray = fileList.item(i);
        imagesArray.push(addArray)
    }

    formEvent(imagesArray)
});

const adsControl = (ads) => {
    console.log("ads " + ads.images.name);
    console.log(ads.city);
    console.log(ads.county);
    axios.post('http://localhost:3000/ads/', ads)
        .then(response => {
            const ads = response.data;
            console.log(`POST list users`, ads);
            alert("işlem başarılı")
            //window.location.href = "/admin-panel.html";
        })
        .catch(error => console.error(error));
};
// *****