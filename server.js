const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const { generateMyth } = require('./storyEngine');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mythos_engine'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to mythos_engine database');
});
