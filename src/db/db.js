const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/adc-api', {
    useCreateIndex: true
}).then(() => {
    console.log('Mongo Connected')
}).catch(err => {
    console.log(err)
})

module.exports = mongoose
