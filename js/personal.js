window.onscroll=function(){ 
    scroll = document.documentElement.scrollTop;
    header = document.getElementById("header");
    if(scroll>15){  
        header.classList.add('mov_nav');
    }
    else if(scroll<15){ 
        header.classList.remove('mov_nav');
    }
}

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal-close")[0];
let modalc = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalc.style.opacity = "1";
    modalc.style.visibility = "visible";
    modal.classList.toggle("modal-close");
})
cerrar.addEventListener("click",function(e){
    e.preventDefault()
    modal.classList.toggle("modal-close");
    setTimeout(function(){
    modalc.style.opacity = "0";
    modalc.style.visibility = "hidden";

    },900)

});


function accion(){

    var ancla = document.getElementsByClassName('nav_enlace');
    for(var i = 0; i < ancla.length;i++){
        ancla[i].classList.toggle('desaparecer');
    }
    }


    

    