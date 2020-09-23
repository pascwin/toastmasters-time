const startBtn = document.getElementById("start");
const body = document.getElementById("body")

console.log(body)

const changeColor = () => {
    if(body.className === "grey") {
        body.classList.remove("grey")
        body.classList.add("green")
        startBtn.hidden;
    } else if (body.className === "green"){
        body.classList.remove("green")
        body.classList.add("yellow")
    } else if (body.className === "yellow"){
        body.classList.remove("yellow")
        body.classList.add("red")
    } else if (body.className === "red") {
        body.classList.remove("red")
        body.classList.add("grey")
    }
}
console.log(startBtn)
body.addEventListener("click", changeColor)