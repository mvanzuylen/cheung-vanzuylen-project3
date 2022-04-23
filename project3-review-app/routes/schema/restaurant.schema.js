const Schema = require('mongoose').Schema;

const RestaurantSchema = new Schema({
    name: String,
    address: String, 
    cuisine: String,
}, {
    collection: 'restaurants',
})

module.exports = RestaurantSchema;