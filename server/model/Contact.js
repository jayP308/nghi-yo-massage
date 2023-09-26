const { Schema, model } = require('mongoose');

const ContactPage = new Schema ({
    fullName: String,
    phoneNumber: String,
    email: {
        type: email,
        default: 'example@email.com',
    },
    message: String,
});

module.exports = model("Contact", ContactPage);