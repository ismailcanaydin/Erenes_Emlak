const logOut = document.querySelector('#logOut');

const logOutEvent = logOut.addEventListener('click', event => {
    window.location.href = "/index.html";

    localStorage.clear();
});