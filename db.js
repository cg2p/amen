// db.js
const mongoose = require('mongoose');
const config = require('./config');

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.set('useNewUrlParser', true);
mongoose.connect(connectionString);