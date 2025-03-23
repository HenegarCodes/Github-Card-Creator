const express = require ('express')
//const mongoose = require('mongoose')
const path = require('path')
const PORT = 3001;
//express app
const app = express();

// Static middleware pointing to the public folder
app.use(express.static('public'));




//listen for requests
app.listen(PORT, () =>
    console.log(` app listening at http://localhost:${PORT}`)
  );
  
  