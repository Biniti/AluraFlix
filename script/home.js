const application = document.querySelector("body");

const returnApp = document.querySelector("#returnApp")

const exit = document.querySelector("#sair")

returnApp.style.visibility = "collapse"

exit.onclick = () =>{
    application.style.visibility = "collapse"
    returnApp.style.visibility = "visible"
}

returnApp.onclick = () =>{
    application.style.visibility = "visible"
    returnApp.style.visibility = "collapse"
}