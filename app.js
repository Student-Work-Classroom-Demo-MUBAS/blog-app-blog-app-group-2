//We are importing libraries using require method
const express = require('express');
//an app istance of the express module
const app = express();
const PORT = 3000;


//starting the server on declared port
app.listen(PORT, () =>{
    console.log('Server running at http://localhost' + PORT);
});