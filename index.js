var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var port = 8080

// MIDDLEWARE
server.use(express.static(__dirname + '/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

var houses = [{
  description: 'A Sweet House',
  sqft: '1500',
  price: 105000,
  img: '//placehold.it/200x200'
}]

var autos = [{
  make: 'Toyota',
  model: 'Tundra',
  price: 45000,
  img: '//placehold.it/200x200'
}]

var jobs = [{
  description: 'Web Developer',
  hours: 40,
  salary: 120000,
  img: '//placehold.it/200x200'
}]

function House(description, sqft, price, img) {
  this.description = description
  this.sqft = sqft
  this.price = price
  this.img = img
}

function Auto(make, model, price, img) {
  this.make = make
  this.model = model
  this.price = price
  this.img = img
}

function Job(description, hours, salary, img) {
  this.description = description
  this.hours = hours
  this.salary = salary
  this.img = img
}

function addHouse(description, sqft, price, img) {
  var house = new House(description, sqft, price, img)
  houses.push(house)
}

function addAuto(make, model, price, img) {
  var auto = new Auto(make, model, price, img)
  autos.push(auto)
}

function addJob(description, hours, salary, img) {
  var job = new Job(description, hours, salary, img)
  jobs.push(job)
}

server.get('/api/houses', function (req, res) {
  res.send(houses)
})

server.get('/api/autos', function (req, res) {
  res.send(autos)
})

server.get('/api/jobs', function (req, res) {
  res.send(jobs)
})

server.post('/api/houses', function (req, res) {
  var house = req.body
  addHouse(house.description, house.sqft, house.price, house.img)
  res.send(houses)
})

server.post('/api/autos', function (req, res) {
  var auto = req.body
  addAuto(auto.make, auto.model, auto.price, auto.img)
  res.send(autos)
})

server.post('/api/jobs', function (req, res) {
  var job = req.body
  addJob(job.description, job.hours, job.salary, job.img)
  res.send(jobs)
})

server.listen(port, () => {

  console.log(`
    Starting up node,
    Available on:
    http://127.0.0.1:${port}
    Hit CTRL-C to stop the server`)

})