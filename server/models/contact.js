const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = Schema({
    name: String,
    email: String,
    phone: String,
    sub: String,
    msg: String
});

module.exports = mongoose.model('contact', contactSchema, 'contacts');