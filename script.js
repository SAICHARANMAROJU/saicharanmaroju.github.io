function myMenuFunction(){
    var menuBth = document.getElementById("myNavMenu");
    if (menuBth.className ==="nav-menu"){
        menuBth.className += "responsive";
    }
    else{
        menuBth.className = "nav-menu";
        
    }
}

const body = document.querySelector("body"),
    toogleSwitch = document.getElementById("toggle-switch");
toogleSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})