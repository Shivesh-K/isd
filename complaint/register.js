import { getAllComplaints, getComplaints, updateComplaint } from "./data.js";

let isAdmin = localStorage.getItem("admin") ? true : false;
let name = localStorage.getItem("name") ?? "";
let complaints = isAdmin ? getAllComplaints() : getComplaints(name);

const table = document.querySelector("tbody");

complaints.forEach(complaint => {
    const newRow = document.createElement("tr");

    for (const key in complaint) {
        const newData = document.createElement("td");
        newData.innerText = complaint[key];
        newData.classList.add("condensed");
        newRow.appendChild(newData);
    }

    if (isAdmin) {
        const commentElement = newRow.lastElementChild;
        const statusElement = newRow.childNodes[newRow.childNodes.length - 2];

        commentElement.addEventListener("dblclick", () => {
            commentElement.contentEditable = true;
        });

        commentElement.addEventListener("keyup", (event) => {
            if (!commentElement.contentEditable)
                return;
            if (event.keyCode === 13) {
                commentElement.contentEditable = false;
                commentElement.innerText = commentElement.innerText.slice(0, -2);
                const editedComplaint = { ...complaint, comments: commentElement.innerText };
                updateComplaint(editedComplaint['id'], editedComplaint);
            }
        });

        statusElement.addEventListener('click', () => {
            const status = statusElement.innerText === "Pending" ? "Resolved" : "Pending";
            newRow.classList.toggle("resolved");
            const editedComplaint = { ...complaint, status };
            statusElement.innerText = status;
            updateComplaint(editedComplaint['id'], editedComplaint);
        });
    }

    const descriptionElement = newRow.childNodes[2];
    descriptionElement.addEventListener('click', () => {
        descriptionElement.classList.toggle("condensed");
    })

    table.appendChild(newRow);
});