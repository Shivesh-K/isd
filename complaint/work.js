var ele = document.getElementById("ta");
handleClear = () => {
    ele.value = "";
    
}
const clr = document.getElementById("clear");
clr.addEventListener("click", handleClear);