
const createLabel = (estate) => {
    const label = document.createElement('label');

    label.innerHTML = `
    <input class="form-check-input me-1 my-auto" type="checkbox" onchange="formEvent(this)" value="${estate.id}">
        <div class="d-flex ms-2">
            <img class="rounded-2" src="../img\\real-estate\\${estate.images[0]}" alt="" srcset=""
                height="50">
            <div class="rounded-2 d-flex" style="width: 480px; height: 50px;">
                <h6 class="mx-3">${estate.district}</h6>
                <h6 class="mx-3">${estate.project}</h6>
                <h6 class="mx-3">${estate.price} TL</h6>
            </div>
        </div>
        <div class="d-flex" style="margin: 25px 0 0 -464px">
            <h6>${estate.sizeM2} M2</h6>
            <h6 style="margin-left: 40px;">${estate.roomSize}</h6>
        </div>`;
    label.classList.add('list-group-item', 'd-flex')

    return label;
};

const appendToDOM = (estates) => {
    const listGroup = document.querySelector('#list-group');
    //iterate over all estates
    estates.map(estate => {
        listGroup.appendChild(createLabel(estate));
    });
};

const fetchEstates = () => {
    axios.get('http://localhost:3000/ads/')
        .then(response => {
            const estates = response.data;
            // console.log(`GET list estates`, estates);
            // append to DOM
            appendToDOM(estates);
        })
        .catch(error => console.error(error));
};

fetchEstates();

const form = document.querySelector('form');

function formEvent(id) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        if (id.checked) {
            // console.log(id.value);
            deleteEstate(id)
        }
    });
}

// DELETE
const deleteEstate = (id) => {
    console.log(id.value);
    axios.delete(`http://localhost:3000/ads/${id.value}`)
        .then(response => {
            console.log(`DELETE: user is removed`, id.value);
            alert("emlak silindi")
        })
        .catch(error => console.error(error));
};