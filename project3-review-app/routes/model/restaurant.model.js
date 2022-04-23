const mongoose = require('mongoose');

const RestaurantSchema = require('../schema/restaurant.schema');

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

function createRestaurant(restaurant) {
    return RestaurantModel.create(restaurant);
}

function getRestaurantByName(name) {
    return RestaurantModel.find({
        name: name
    }).exec();
}

function getAllRestaurants() {
    return RestaurantModel.find().exec();
}

function getHomeByCuisine(cuisine) {
    return RestaurantModel.find(cuisine).exec();
}

module.exports = {
    createRestaurant,
    getAllRestaurants,
    getHomeByCuisine,
    getRestaurantByName,
}