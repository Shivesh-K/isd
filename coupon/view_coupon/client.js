const button = document.getElementById("ri51");
const mess = document.querySelector(".ridiv5");

button.addEventListener('click', (e) => {

    // e.preventDefault();
    var x = document.getElementsByClassName("ri01");
    var x1 = document.getElementsByClassName("ri11");
    var x2 = document.getElementsByClassName("ri21");
    var x3 = document.getElementsByClassName("ri31");
    x = x[0].value ?? 0;
    x1 = x1[0].value ?? 0;
    x2 = x2[0].value ?? 0;
    x3 = x3[0].value ?? 0;
    let sum = x * 30 + x2 * 30 + (x1 + x3) * 40;
    const amount = document.createElement('div');
    amount.innerText = `Total amount=Rs ${sum}`;
    console.log(mess.childNodes.length);
    console.log(mess.childNodes);

    if (mess.childNodes.length <= 3) {
        mess.append(amount);
    }
    else {
        mess.childNodes[3].innerText = amount.innerText;
    }
});

