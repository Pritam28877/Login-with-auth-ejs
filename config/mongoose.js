const mongoose = require('mongoose');
// Here I have provided the mongoDb to the cloud, so that anyone can acces the form anywhere.
const DB = `mongodb+srv://user123:wbhQSRUB1a4fTCHt@auth.jvcdleu.mongodb.net/?retryWrites=true&w=majority`

// These set of line can be written in async await fashion, but I have followed the documentation. 
mongoose.connect(DB).then(() => {
    console.log('connection successful');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;  