
console.log("Hello world")
document.querySelector("body").innerHTML += "<h1>Helllo from js</h1>"

const body = document.querySelector("body");
function myScript() {
    this.style = "background-color: #ffffff;"
}

body.addEventListener("click", myScript);