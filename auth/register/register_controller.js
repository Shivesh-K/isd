import { signup } from '../../js/auth/signup.js'

const sessionStorage = window.sessionStorage;
const Form = document.querySelector('form');

Form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { error, ...userData } = await signup(data);

    if (error) {
        alert(error);
        return;
    }
    Object.entries(userData).forEach(x => sessionStorage.setItem(x[0], x[1]));

    window.location.replace("/mess_menu");
});