import { getAllWorkers, removeWorker } from "../../js/db/workers.js";

let isAdmin = sessionStorage.getItem("admin") ? true : false;
const table = document.querySelector("tbody");

if (isAdmin) {
    const actions = document.createElement("th");
    actions.innerText = "Actions"
    table.children[0].appendChild(actions);
}

const workers = await getAllWorkers();

workers.forEach(worker => {
    const newRow = document.createElement("tr");

    ['name', 'occupation', 'salary'].forEach(key => {
        const newData = document.createElement("td");
        newData.innerText = worker[key] ?? '--';
        newRow.appendChild(newData);
    });

    if (isAdmin) {
        const button = document.createElement("button");
        button.innerText = "Delete Worker"
        button.addEventListener('click', async () => {
            const confirmation = window.confirm("Are you sure you want to remove this worker?");
            if (confirmation) {
                const response = await removeWorker(worker['id']);
                console.log(response);
                if (response.status === "Success")
                    newRow.remove();
                else
                    alert(`${response.status}: ${response.message}`);
            }
        });
        newRow.appendChild(button);
    }

    table.appendChild(newRow);
});
