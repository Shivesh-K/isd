import { login } from '../../js/auth/login.js'

const localStorage = window.localStorage;
const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { error, ...userData } = await login(data);

    if (error) {
        alert(error);
        return;
    }

    Object.entries(userData).forEach(x => localStorage.setItem(x[0], x[1]));

    window.location.replace("/mess_menu");
});