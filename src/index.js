const express = require('express');
require('./database/db');
const galleryController = require('./controllers/gallerController');
const Image = require('./models/gallery');
const app = express();

app.get('/', galleryController.getImages);

app.listen(5000, ()=>{
    console.log('connected at 5000')
});