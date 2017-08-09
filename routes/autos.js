var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

// WHAT IS A HOUSE?

// SCHEMA === CLASS

var autoSchema = new mongoose.Schema({
	make: { type: String, required: true },
	model: { type: Number, required: true },
	price: { type: Number, required: true },
	img: { type: String }
})

var Autos = mongoose.model('Auto', autoSchema)

router.get('/', function (req, res, next) {
	Autos.find({})
		.then((autos) => {
			res.send(autos)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Autos.create(req.body) // PROMISE
		.then((auto) => {
			res.send(auto)
		})
		.catch(next)
})

router.get('/:autoId', function (req, res, next) {

	let autoId = req.params.autoId;


});

// router.get('/search/:price/:footage?', function (req, res) {

// 	var maxPrice = parseInt(req.params.price);
// 	var minFootage = parseInt(req.params.footage || '0');

// 	var results = houses.filter(item => {
// 		return item.price <= maxPrice && item.sqft >= minFootage;
// 	});

// 	res.json(results);
// });

router.use(wizbang);

function wizbang(err, req, res, next) {

	if (req.xhr) {
		res.json({ success: false, error: err });
	}
	else {
		res.json({ success: false, error: err.message });
	}
}

module.exports = router