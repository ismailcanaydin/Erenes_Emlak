function startConf() {
    let todoCheck = JSON.parse(localStorage.getItem("todo"))
    if (todoCheck != null) {
        window.location.href = "/admin-panel.html";
    }
}


const form = document.querySelector('form');

const formEvent = form.addEventListener('submit', event => {
    event.preventDefault();

    const userName = document.querySelector('#userName').value;
    const password = document.querySelector('#password').value;

    const user = { userName, password };
    userControl(user);
});

const userControl = (user) => {
    axios.get('http://localhost:3000/login/', user)
        .then(response => {
            const users = response.data;
            console.log(`GET list users`, users);
            console.log((user.userName));
            console.log((users.userName));
            if (user.userName === users.userName && user.password === users.password) {
                window.location.href = "/admin-panel.html";
                loadStorage(userName.value);
                loadStorage(password.value);
            }
            else {
                const alertDOM = document.querySelector('#loginAlert')
                alertDOM.classList.add('show')
            }
        })
        .catch(error => console.error(error));
};

function loadStorage(text) {
    let str = JSON.parse(localStorage.getItem("todo"))
    let todo;
    if (str == null) {
        //localStorage da "todo" key ve "[]" valusu yoksa oluşturma
        todo = []
    } else {
        todo = JSON.parse(localStorage.getItem("todo"))
    }

    todo.push(text)

    localStorage.setItem("todo", JSON.stringify(todo))


}

startConf();