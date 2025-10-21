// Create a new router
const express = require("express");
const router = express.Router();
// Get the current date
const now = new Date();


// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get('/contact', (req, res) => res.send ('<h1>Email: zoby.khokhar@gmail.com</h1>'));

//apply date route from now variable
router.get('/date', (req, res) => res.send (`<h1>${now.toDateString()}</h1>`));

//extention tasks

//name route
router.get('/welcome/:name', (req, res) => {const name = req.params.name; res.send(`<h1>Welcome ${name}</h1>`)});

//next handling route
router.get('/chain', (req, res, next) => { console.log('First handler');
    next();},
    (req, res) => {console.log('Second handler');});

//a.html route
router.get('/file', (req, res) => {res.sendFile(__dirname + '/pages/a.html');});

// Export the router object so index.js can access it
module.exports = router;
