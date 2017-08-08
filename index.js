var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var port = 3000

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

function House(description, sqft, price, img) {
  this.description = description
  this.sqft = sqft
  this.price = price
  this.img = img
}

function addHouse(description, sqft, price, img) {
  var house = new House(description, sqft, price, img)
  houses.push(house)
}

server.get('/api/houses', function (req, res) {
  res.send(houses)
})

server.post('/api/houses', function (req, res) {
  var house = req.body
  addHouse(house.description, house.sqft, house.price, house.img)
  res.send(houses)
})

server.listen(port, () => {

  console.log(`
    Starting up node,
    Available on:
    http://127.0.0.1:${port}
    Hit CTRL-C to stop the server`)

})