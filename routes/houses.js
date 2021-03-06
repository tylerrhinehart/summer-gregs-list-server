var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

// WHAT IS A HOUSE?

// SCHEMA === CLASS

var houseSchema = new mongoose.Schema({
	description: { type: String, required: true },
	sqft: { type: Number, required: true },
	price: { type: Number, required: true },
	img: { type: String }
})

var Houses = mongoose.model('House', houseSchema)

router.get('/', function (req, res, next) {
	Houses.find({})
		.then((houses) => {
			res.send(houses)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Houses.create(req.body) // PROMISE
		.then((house) => {
			res.send(house)
		})
		.catch(next)
})

// http://www.gregslist.com/api/house/1234
router.get('/:houseId', function (req, res, next) {

	// req.params.houseId = 1234
	var houseId = req.params.houseId;
	Houses.findById(houseId)
		.then(house => {
			if (house) {
				res.send(house)
			}
			else {
				next({message: 'No house'})
			}
		})
		.catch(next)

});

router.put('/houseId', function (req, res, next) {
	var houseId = req.params.houseId
	var updatedHouseObj = req.body
	Houses.findByIdAndUpdate(houseId, updatedHouseObj)
		.then(house => {
			res.send({message: 'Updated house'})
		})
		.catch(next)
})

router.delete('/:houseId', function (req, res, next) {
	var houseId = req.params.houseId
	Houses.findByIdAndRemove(houseId)
		.then(house => {
			res.send({message: 'Removed house'})
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