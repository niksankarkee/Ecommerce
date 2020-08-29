const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const get404Controller = require('./controllers/error');

const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRouts = require('./routes/admin');

const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouts);

app.use(shopRoutes);

app.use('/', get404Controller.get404);

app.listen(3000);