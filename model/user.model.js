const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: Number,
    uFirstName: String,
    uLastName: String,
    uEmailId: String,
    uMobileNo: String,
    uAddress: String,
    uPassword: String,
},
    {
        collection: "User",
        timestamps: true
    });

module.exports = mongoose.model('User', userSchema);
