var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET collections page. */
router.get('/collections', function (req, res, next) {
  res.render('backbone/collections', { title: 'Express' });
});

router.post('/bookShelf',function (req,res,next) {
	console.log(req.body);
	res.send('create success!')
	// body...
})

router.get('/bookShelf',function(req,res,next){
	var bookShelf=[];
	var book1 ={title:"book1"};
	var book2 ={title:"book2"};
	var book3 ={title:"book3"};
	bookShelf.push(book1);
	bookShelf.push(book2);
	bookShelf.push(book3);
	
	setTimeout(function(){ 
		res.send(bookShelf);
	},2000);
});

module.exports = router;