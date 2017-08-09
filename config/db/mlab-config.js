var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://test:test@ds039155.mlab.com:39155/gregslist', {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
})

connection.on('error', (err) =>{
  console.log('SOMETING FAILED WHEN CONNECTING TO MLAB', err)
});

connection.once('open', () => {
  console.log('HEY WE ARE CONNECTED TO MLAB')
});