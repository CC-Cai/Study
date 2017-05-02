var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var RADIUS=8;
var MARGIN_TOP=60;
var MARGIN_LEFT=30;

const endTime=new Date(2016,3,12,12,58,58);

var curShowTimeSeconds=0;


window.onload=function  () {
	var canvas =document.getElementById("canvas");
	var context =canvas.getContext("2d");
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	context.fillStyle="rgba(0, 188, 212, 0.65)";

	setInterval(function () {
		render(context);
		update()
	}, 50);

	curShowTimeSeconds =getCurrentShowTimeSecond();
}


function getCurrentShowTimeSecond () {
	var curTime=new Date();
	var ret =endTime.getTime()-curTime.getTime();
	ret =Math.round(ret/1000);

	return ret>=0?ret:0;
}

function update () {
	var nextShowTimeSeconds =getCurrentShowTimeSecond();
	var nexthours=parseInt(nextShowTimeSeconds/3600);
	var nextminutes =parseInt((nextShowTimeSeconds- nexthours*3600)/60);
	var nextsecond= parseInt(nextShowTimeSeconds%60);

	var curhours=parseInt(curShowTimeSeconds/3600);
	var curminutes =parseInt((curShowTimeSeconds- curhours*3600)/60);
	var cursecond= parseInt(curShowTimeSeconds%60);
	if(nextsecond!=cursecond||curminutes!=nextminutes){
		curShowTimeSeconds=nextShowTimeSeconds;
	}

}


function render (cxt) {

	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

	var hours=parseInt(curShowTimeSeconds/3600);
	var minutes =parseInt((curShowTimeSeconds- hours*3600)/60);
	var second= parseInt(curShowTimeSeconds%60);

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hours%10),cxt);
	renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
	renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
	renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(second/10),cxt);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(second%10),cxt);
}

function renderDigit (x,y,num,cxt) {  //绘制单个数字
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI)
				cxt.closePath()

				cxt.fill();
			}
		};
	};
	// body...
}