const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
require('./environment/settings');

const isProduction = global.config.isProduction;

if (isProduction)
    db(`mongodb://${global.config.USER}:${global.config.PASS}@ds159235.mlab.com:59235/db-store`);
else
    db('mongodb://localhost/db-store');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'src', verbose: false })
    .include('models')
    .then('api/routes')
    .into(app);

module.exports = app;