const body = document.getElementById("body")
const start = document.getElementById("start");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const red = document.getElementById("red");

console.log(body)

const changeColor = () => {
    if(body.className === "grey") {
        body.classList.remove("grey")
        body.classList.add("green")
        start.hidden = true;
        green.hidden = false;
    } else if (body.className === "green"){
        body.classList.remove("green")
        body.classList.add("yellow")
        green.hidden = true;
        yellow.hidden = false;
    } else if (body.className === "yellow"){
        body.classList.remove("yellow")
        body.classList.add("red")
        yellow.hidden = true;
        red.hidden = false;
    } else if (body.className === "red") {
        body.classList.remove("red")
        body.classList.add("grey")
        red.hidden = true;
        start.hidden = false;
    }
}

body.addEventListener("click", changeColor)