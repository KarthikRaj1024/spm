//require('dotenv').config();

const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package
const app = express();




app.use(express.json());
app.use(cors());


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});



app.get('/', (req, res) => {
  res.send("Welcome to project Tech?H");
});

app.get('/gf', (req, res) => {
  res.send("Welcome to project Tech?Hostel");
});




app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
