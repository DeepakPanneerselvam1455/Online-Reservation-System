const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Welcome123', 
  database: 'reservation_system'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/reserve', (req, res) => {
  const { name, email, phone, date, time, seats } = req.body;

  const query = 'INSERT INTO reservations (name, email, phone, date, time, seats) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, date, time, seats], (err, result) => {
    if (err) throw err;
    res.send({ message: 'Reservation confirmed', id: result.insertId });
  });
});

app.get('/reservations', (req, res) => {
  const query = 'SELECT * FROM reservations';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
