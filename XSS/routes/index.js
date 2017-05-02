var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/**
 * GET reflection  page.  反射型XSS攻击实例 
 * 
 * 例1：http://localhost:3000/reflection?name=<script>alert(1)</script>  http://localhost:3000/reflection?name=<img src="null" onerror="alert(1)"/>
 * 例1，一般浏览器都会进行XSS过滤，对此进行过滤,需要设置res.set('X-XSS-Protection', 0);
 * 
 * 例2：
 */
router.get('/reflection', function(req, res, next) {
    var name = req.query.name;
    // res.set('X-XSS-Protection', 0);
    res.render('reflection', {
        title: 'Express',
        name: name,
    });
});


module.exports = router;