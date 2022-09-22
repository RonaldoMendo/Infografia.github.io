function mover() {
	document.getElementById("animacion").style.animation = "mynewmove 4s 2";
}
/*Sección de etiquta canvas*/
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("ANIMACIÓN",10,50);