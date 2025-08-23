//We are importing libraries using require method
const express = require('express');
//an app istance of the express module
const app = express();
const PORT = 3000;

//initializing a set up of ejs template to successfully render the html files
app.set('view engine', 'ejs');

//the views folder has an index.ejs for homepage, it will list all posts
app.get('/', (req, res)=>{
    res.render('index');    //we will render the index ejs file
});

//starting the server on declared port
app.listen(PORT, () =>{
    console.log('Server running at http://localhost:' + PORT);
});