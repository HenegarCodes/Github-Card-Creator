const express = require ('express')
const mongoose = require('mongoose')
const path = require('path')
require("dotenv").config();
const cors = require('cors')


const PORT = 3001;



//express app
const app = express();

// Static middleware pointing to the public folder
app.use(express.static('public'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
  
  /*{// Serve React frontend in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
  }
}*/
// Default route
app.get('/', (req, res) => {
    res.send('Hello from Github Searcher API');
  });
//listen for requests
app.listen(PORT, () =>
    console.log(` app listening at http://localhost:${PORT}`)
  );
  
  