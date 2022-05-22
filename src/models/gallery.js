const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    name: [{
        type: String,
        required: true
    }],
    imagePath: [{
        path: {
            type: String,
            required: true
        },
    }]
});

const Image = mongoose.model('Images', gallerySchema);
module.exports = Image;