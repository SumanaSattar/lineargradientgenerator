var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var backGround=document.querySelector("body");
var g1 = document.getElementById("gradient");
function backGroundGenerator(){
    
    var grad_type = "linear-gradient(90deg, ";
    var opacity1 = " 26%, ";
    var opacity2  = " 100%)";

    var grad_strn = grad_type + color1.value  +opacity1+ color2.value +opacity2;
//    --linear-gradient(90deg, rgb(92, 139, 85) 26%, rgb(47, 109, 39) 100%);#143e0f
    backGround.style.background= grad_strn;
    g1.textContent = backGround.style.background +";";
    console.log(g1);
}
color1.addEventListener("input",backGroundGenerator);
color2.addEventListener("input",backGroundGenerator);
