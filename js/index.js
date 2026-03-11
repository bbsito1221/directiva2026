const DOM = {
    botonHeader: document.querySelector(".botonHeader"),
    menuVertical: document.querySelector(".menuVertical")
}
let menuHeaderAbierto = false;

function menuDesplegable(){
    if(menuHeaderAbierto){
        DOM.menuVertical.style.top = "-30rem";
        menuHeaderAbierto = !menuHeaderAbierto;

    } else{
        DOM.menuVertical.style.top = "0";

        menuHeaderAbierto = !menuHeaderAbierto

    }


}
DOM.botonHeader.addEventListener('click', function(e){
    e.stopPropagation();
    menuDesplegable();
})
document.addEventListener('click', function(e){
    if(menuHeaderAbierto){
        if(!DOM.botonHeader.contains(e.target) && !DOM.menuVertical.contains(e.target)){
            menuDesplegable();
        }
    }
})



