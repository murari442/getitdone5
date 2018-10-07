const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = Schema({
    name: String,
    email: String,
    phone: String,
    add: String,
    work: String
});

module.exports = mongoose.model('booking', bookingSchema, 'bookings');