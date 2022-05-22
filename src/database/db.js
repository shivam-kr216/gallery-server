const mongoose = require('mongoose');

const connectionURL = 'mongodb://127.0.0.1:27017/gallery';
mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected!"))
    .catch(err => console.log(err));