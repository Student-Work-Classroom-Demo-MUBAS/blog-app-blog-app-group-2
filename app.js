//We are importing libraries using require method
const express = require('express');
const path = require('path'); //imported path module to handle file paths
const bodyParser = require('body-parser'); // module to handle form submissions

const app = express(); //an app istance of the express module
const PORT = 3000;

// -----In-Memory storage setup
let posts = [
    {id:1, title: "Feature Selection 🚀", content: 'Feature selection is the process of identifying and choosing the most important input variables that contribute to the prediction or classification task in a machine learning model. Since real-world datasets often contain irrelevant, redundant, or noisy features, selecting the right ones not only improves model accuracy but also reduces complexity, training time, and the risk of overfitting. Common techniques include filter methods (like correlation tests), wrapper methods (such as recursive feature elimination), and embedded methods (like feature importance from decision trees). By focusing on the most meaningful features, we ensure that machine learning models are both efficient and reliable, ultimately leading to better insights and smarter decisions.'},
    {id:2, title: "Data Preprocessing", content: 'Data preprocessing is a crucial first step in any machine learning project, as raw data is often messy, incomplete, and inconsistent. Before feeding data into algorithms, it must be cleaned, transformed, and prepared so that models can learn effectively. This process includes handling missing values, removing duplicates, encoding categorical variables, scaling numerical features, and even reducing dimensionality for efficiency. By ensuring that the dataset is accurate and well-structured, preprocessing improves both the performance and reliability of machine learning models. In short, good data preprocessing sets the foundation for building intelligent systems that produce meaningful and trustworthy results.'},
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
app.get('/', (req, res) => {
    // Makes a copy of posts and sort them by ID in descending order (newest first)
    const sortedPosts = [...posts].sort((a, b) => b.id - a.id);
    const success = req.query.success; // homepages gets any success message from the query string
    res.render('index', { posts: sortedPosts, success });    //we will render the index ejs file, and success message
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
  const { title, content } = req.body;
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).send('Post not found'); //checks if post exists, sends 404 error if not
  //to ensure title and content are not empty
  if (!title || !content) {
    return res.render('edit', { post, error: 'Title and content cannot be empty.' });
  }
  post.title = title;
  post.content = content;
  res.redirect('/post/' + post.id);
});

//route to delete post
app.post('/delete/:id', (req, res) => {
  const index = posts.findIndex(p => p.id === parseInt(req.params.id));
  //check if no post was found, stops execution and sends a 404
  if (index === -1) return res.status(404).send('Post not found');
  posts.splice(index, 1); // removes element
  res.redirect('/?success=Post+successfully+deleted'); //query string declared in the '/' route for success
});






//starting the server on declared port
app.listen(PORT, () =>{
    console.log('Server running at http://localhost:' + PORT);
});