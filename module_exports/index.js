define(function(require, exports, module) {
	var Index = function() {

	};
	Index.prototype = {
		init: function() {

			/* math.js   retrun MathMethod */
			// var TMath= require('math.js');
			// var math =new TMath();
			// var c= math.add(1,2);
			// console.log(c);


			/* math.js   exports */
			var TMath= require('math.js'); //TMath ===math.js 中的exports
			var c= TMath.add(1,2);
			var b=TMath.reduce(5,1);
			console.log(c);
			console.log(b);
		}
	};
	var index = new Index();
	exports.init = index.init;
});