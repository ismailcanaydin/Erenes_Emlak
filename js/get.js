// import {axios} from './node_modules/axios/dist/axios.min.js';
// import axios from "axios";


// GET
function getData() {

    const user_id = 2;

    const getUserData = (user_id) => {
        return new Promise(async (resolve, reject) => {
            const { data: users } = await axios(
                `http://localhost:3000/employees/${user_id}`
            );

            resolve(users);
            // reject('Bir sorun oluştu!')
        });
    };
    const getPost = (user_id) => {
        return new Promise(async (resolve, reject) => {
            const { data } = await axios(
                `http://localhost:3000/employees/${user_id}`
            );

            resolve(data);
            // reject('Bir sorun daha oluştu!')
        });
    };
    const ulDOM = document.querySelector('#users')
    async function start() {
        try {
            
            const users = await getUserData(user_id);

            const post = await getPost(user_id);

            //console.log([users, 'Posts: ', post]);

            
            // const liElement = document.createElement('li')
            // let yaz = JSON.stringify(users);
            // liElement.innerHTML = yaz.JSON;
            // ulDOM.appendChild(liElement);

            //console.log(post);
        } catch (error) {
            console.log(error)
        }

    }
    start();
}
getData();


// POST
const createUser = (user) => {
    axios.post('http://localhost:3000/employees/', user)
        .then(response => {
            const addedUser = response.data;
            console.log(`POST: user is added`, addedUser);
            // append to DOM
            //appendToDOM([addedUser]);
        })
        .catch(error => console.log(error));
};

const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value;
    const last_name = document.querySelector('#last_name').value;
    const email = document.querySelector('#email').value;

    const user = { first_name, last_name, email };
    createUser(user);
});


// DELETE
// const deleteUser = (elem, id) => {
//     axios.delete(`http://localhost:3000/employees/${id}`)
//         .then(response => {
//             console.log(`DELETE: user is removed`, id);
//             // remove elem from DOM
//             elem.remove();
//         })
//         .catch(error => console.error(error));
// };


// GET
const createLi = (user) => {
    const li = document.createElement('li');
    // add user details to `li`
    li.textContent = `${user.id}: ${user.first_name} ${user.last_name} - ${user.email}`;
    //li.onclick = e => deleteUser(li, user.id); 
    return li;
};

const appendToDOM = (users) => {
    const ul = document.querySelector('ul');
    //iterate over all users
    users.map(user => {
        ul.appendChild(createLi(user));
    });
};

const fetchUsers = () => {
    axios.get('http://localhost:3000/employees/')
        .then(response => {
            const users = response.data;
            console.log(`GET list users`, users);
            // append to DOM
            appendToDOM(users);
        })
        .catch(error => console.error(error));
};

fetchUsers();

// UPDATE
// axios.put('http://localhost:3000/employees/1', {
//     first_name: 'Tophat Cat 2',
//     last_name: 'Liddle Cat',
//     email: 'liddletom@gmail.com'
//   })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(error => {
//     console.log(err);
//   });