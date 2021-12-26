import { registerComplaint } from "../../js/db/complaints.js";
import { ensureLoggedIn } from "../../js/auth/login.js";

ensureLoggedIn();

var ele = document.getElementById("ta");
const handleClear = () => {
    ele.value = "";

}
const clr = document.getElementById("clear");
clr.addEventListener("click", handleClear);

const form = document.querySelector("form");
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    for (let [_, value] of Object.entries(data)) {
        if (value.trim().length == 0) {
            alert("Please enter valid values");
            return;
        }
    }

    const response = await registerComplaint(data);

    alert(`${response.status}: ${response.message}`);
});