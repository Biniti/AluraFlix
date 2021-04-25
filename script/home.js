const application = document.querySelector("body");

const returnApp = document.querySelector("#returnApp")

const exit = document.querySelector("#sair")

returnApp.style.visibility = "hidden"

exit.onclick = () =>{
    application.style.visibility = "hidden"
    returnApp.style.visibility = "visible"
}

returnApp.onclick = () =>{
    application.style.visibility = "visible"
    returnApp.style.visibility = "hidden"
}