const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

//Imports Routes
const productRoute = require('./routes/products');
const categoryRoute = require('./routes/category');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//Connect to DB
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(productRoute, categoryRoute);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running at port ${port}`);
});