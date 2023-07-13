const express = require('express');
const app = express();

const db = require('./config/mongoose')
//this is to read the body of the given page
app.use(express.urlencoded({ extended: false }));


// middleware
app.use(express.static('public'));

//add the ejs to render the html in dynamice order 
app.set('view engine', 'ejs');

//all the routes 


app.get('/', (req, res) => {
    res.render("index")
})

//the route for the 
app.get('/login',(req,res)=>{

})

// lisening from the port 5000
app.listen(5000, (e) => {
    if (e) {
        console.log(e);
    }
    console.log(`app is running port 5000`)
})