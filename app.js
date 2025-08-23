//We are importing libraries using require method
const express = require('express');
const path = require('path'); //imported path module to handle file paths
const bodyParser = require('body-parser'); // module to handle form submissions

const app = express(); //an app istance of the express module
const PORT = 3003;

// -----In-Memory storage setup
let posts = [
    {id:1, title: "Welcome to Our Blog", content: 'First Post'},
];

//--MIDDLEWARE-- 
//initializing the code to serve static files contained in folder public
app.use(express.static(path.join(__dirname, 'public')));
//initinalizing middleware for bodyparser to handle complex forms
app.use(bodyParser.urlencoded({extended:true}));
//initializing a set up of ejs template to successfully render the html files
app.set('view engine', 'ejs');
// Telling Express where the EJS files are located
app.set('views', path.join(__dirname, 'views'));

//--ROUTES--

//the views folder has an index.ejs for homepage, it will list all posts
app.get('/', (req, res)=>{
    res.render('index', {posts});    //we will render the index ejs file
});

//route to display the form for creating posts
app.get('/create', (req, res)=>{
    res.render('create', {error: null, old: {}}); //passing an object where no err on first form show, and old for no input previously
});

//route to save new posts created
app.post('/create', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.render('create', { error: 'Title and content required', old: req.body });
  }
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.redirect('/');
});
//route to show a post as full content: fetches a existing blog post by id
app.get('/post/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));   //looks for the post with the matching id in your posts array
  if (!post) return res.status(404).send('Post not found');     //send errorif no match is available
  res.render('post', { post });
});

//route to  edit post form
app.get('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found');
  res.render('edit', { post, error: null });
});

//route to handle edited form submission
app.post('/edit/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect('/post/' + post.id);
});

//route to delete post
app.post('/delete/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  posts.splice(index, 1);
  res.redirect('/');
});





//starting the server on declared port
app.listen(PORT, () =>{
    console.log('Server running at http://localhost:' + PORT);
});