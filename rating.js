const img=document.getElementById("img");
const op1=document.getElementById("op1");
const op2=document.getElementById("op2");
const op3=document.getElementById("op3");
const op4=document.getElementById("op4");
const op5=document.getElementById("op5");
const rating=document.getElementById("rating");


rating.addEventListener("change",function(){
    if(rating.value == 1){
        img.setAttribute("src","./worst.png")
       
    }
    else if(rating.value == 2){
       img.setAttribute("src","./not-good.PNG")
       
    }
    else if(rating.value == 3){
    img.setAttribute("src","./average.PNG")
    }
    else if(rating.value == 4){
    img.setAttribute("src","./good.png")
    }
    else if(rating.value == 5){
        img.setAttribute("src","./best.png")
    }
});





