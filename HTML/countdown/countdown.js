var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;


window.onload=function  () {
	var canvas =document.getElementById("canvas");
	var context =canvas.getContext("2d");
	canvas.width=WINDOW_WIDTH;
	canvas.heigt=WINDOW_HEIGHT;

	render(context);
}

function render (cxt) {
	// body...
	var hours=12;

	renderDigit(0,0,parseInt(hours/10),ctx);

}

function renderDigit (x,y,num,cxt) {  //绘制单个数字
	// body...
}