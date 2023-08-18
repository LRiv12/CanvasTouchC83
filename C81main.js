
var posicionX, posicionY;
canvas=document.getElementById("Lienzo");
ctx=canvas.getContext("2d");
color="blue";
var width=2;

var ancho=canvas.width;
var nuevoAncho=canvas.width-70;
var nuevaAltura=canvas.height-300;
if(ancho < 992)
 {
     document.getElementById("Lienzo").width = nuevoAncho;
      document.getElementById("Lienzo").height = nuevaAltura;
       document.body.style.overflow = "hidden"; 
    }
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    //obtener color del cuadro de entrada
    color = document.getElementById("color").value;
    console.log(color);
width=document.getElementById("width").value;
posicionX=e.touches[0].clientX-canvas.offsetLeft;
posicionY=e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove", my_touchmove);
 function my_touchmove(e)
 {
    actualX=e.touches[0].clientX-canvas.offsetLeft;
    actualY=e.touches[0].clientY-canvas.offsetTop;

  
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;

ctx.moveTo(posicionX, posicionY);
ctx.lineTo(actualX, actualY);
ctx.stroke();
posicionX=actualX;
posicionY=actualY;
  
  }
  


function borrar()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}