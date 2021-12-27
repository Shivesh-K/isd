import { addWorker } from "../../js/db/workers.js";
import { ensureLoggedIn } from "../../js/auth/login.js";

ensureLoggedIn();
let isAdmin = sessionStorage.getItem("admin") ? true : false;
if (!isAdmin)
    location.replace('../view_workers');

const form = document.querySelector('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    const { error } = await addWorker(data);

    if (error) {
        alert(error);
        return;
    }
});