var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

var autoSchema = new mongoose.Schema({
	make: { type: String, required: true },
	model: { type: String, required: true },
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

	var autoId = req.params.autoId;
	Autos.findById(autoId)
		.then(auto => {
			if (auto) {
				res.send(auto)
			}
			else {
				next({message: 'No auto'})
			}
		})
		.catch(next)

});

router.put('/autoId', function (req, res, next) {
	var autoId = req.params.autoId
	var updatedAutoObj = req.body
	Autos.findByIdAndUpdate(autoId, updatedAutoObj)
		.then(auto => {
			res.send({message: 'Updated auto'})
		})
		.catch(next)
})

router.delete('/:autoId', function (req, res, next) {
	var autoId = req.params.autoId
	Autos.findByIdAndRemove(autoId)
		.then(auto => {
			res.send({message: 'Removed auto'})
		})
		.catch(next)
})

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