define(function(require,exports,module){
	"use strict";

	var MathMethod= function (){

	};
	MathMethod.prototype ={
		add:function(a,b){
			return  a+b;
		}
	};

	var  mathMethod =new MathMethod();
	exports.add= mathMethod.add;
	exports.reduce= function(a,b){
		return a-b;
	};
	// return MathMethod;
});