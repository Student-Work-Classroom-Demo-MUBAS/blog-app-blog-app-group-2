//We are importing libraries using require method
const express = require('express');
const path = require('path'); //imported path module to handle file paths
//an app istance of the express module
const app = express();
const PORT = 3000;
// -----In-Memory storage setup
let posts = [
    {id:1, title: "Welcome to Our Blog", content: 'First Post'},
];

//--MIDDLEWARE-- 
//initializing a set up of ejs template to successfully render the html files
app.set('view engine', 'ejs');
//initializing the code to serve static files contained in folder public
app.use(express.static(path.join(__dirname, public)));
//the views folder has an index.ejs for homepage, it will list all posts


app.get('/', (req, res)=>{
    res.render('index', {posts});    //we will render the index ejs file
});

//starting the server on declared port
app.listen(PORT, () =>{
    console.log('Server running at http://localhost:' + PORT);
});