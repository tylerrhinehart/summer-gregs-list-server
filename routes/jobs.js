var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

// WHAT IS A HOUSE?

// SCHEMA === CLASS

var jobSchema = new mongoose.Schema({
	description: { type: String, required: true },
	hours: { type: Number, required: true },
	salary: { type: Number, required: true },
	img: { type: String }
})

var Jobs = mongoose.model('Job', jobSchema)

router.get('/', function (req, res, next) {
	Jobs.find({})
		.then((jobs) => {
			res.send(jobs)
		})
		.catch(next)
})

router.post('/', function (req, res, next) {
	Jobs.create(req.body) // PROMISE
		.then((job) => {
			res.send(job)
		})
		.catch(next)
})


router.get('/:jobId', function (req, res, next) {

	var jobId = req.params.jobId;
	Jobs.findById(jobId)
		.then(job => {
			if (job) {
				res.send(job)
			}
			else {
				next({ message: 'No job' })
			}
		})
		.catch(next)

});

router.put('/jobId', function (req, res, next) {
	var jobId = req.params.jobId
	var updatedJobObj = req.body
	Jobs.findByIdAndUpdate(jobId, updatedJobObj)
		.then(job => {
			res.send({ message: 'Updated job' })
		})
		.catch(next)
})

router.delete('/:jobId', function (req, res, next) {
	var jobId = req.params.jobId
	Jobs.findByIdAndRemove(jobId)
		.then(job => {
			res.send({ message: 'Removed house' })
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