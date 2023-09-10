const { Schemas,  model } = require('mongoose');

const contactSchema = new Schemas ({ 
    fullName: String,
    phoneNumber: Number,
    email: {
        type: email,
        default: false,
    },
    message: String,

});

module.exports = model('Contact', contactSchema);