////////// Mock Database //////////////////
const vehicles = [
    {id: 1, make: "Tesla", model: "X"},
    {id: 2, make: "Tesla", model: "Y"},
    {id: 3, make: "Tesla", model: "3"},
    {id: 4, make: "Tesla", model: "Cybertruck"},
    {id: 5, make: "Tesla", model: "Semi"},
    {id: 6, make: "Tesla", model: "Roadster"},
];


//////////////////////////////


// load dependencies 
const express = require("express");

// create the express app
const app = express();

// configure settings - app.set() for setting, 
app.set('view engine', "ejs"); 

// mount middleware - appe.use()

// mount routes  app.get(), app.post(), app.put(), app.delete()

app.get('/', function(req, res) {
    console.log('req.query: ', req.query.model);
    //res.send('Hello World');
    res.render('home', { vehicles});
}); 

app.get('/about', function(req, res) {
    res.render('about');
});

// tell the app to listen on a port 
const port = 3000

app.listen(port, function() {
    console.log(`Express is listening ${port}`);
});
