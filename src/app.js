const express = require('express');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();
//carrega banco
mongoose.connect('mongodb://localhost:27017/ndstr');

//carrega Models
const Product = require('./models/product')

//carrega Rotas
const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/products');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));
 

app.use('/',indexRoutes);
app.use('/products', productsRoutes);

module.exports = app;

