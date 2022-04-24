//const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: String,
}, {
   collection: 'users',
}
)
module.exports = mongoose.model("user", UserSchema);