const mongoose = require('mongoose') 

const configureSH = () => {
    mongoose.connect('mongodb://localhost:27017/url-shortener', {
         useNewUrlParser: true,
          useUnifiedTopology: true
         })
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log('error', err)
        })
}

module.exports = configureSH