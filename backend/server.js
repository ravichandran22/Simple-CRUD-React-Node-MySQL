const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(express.json());
app.use(cors());


//mysqlconnection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ravi220799@',
    database: 'crud'
});

db.connect(err => {
    if (err) {
      console.error('Error connecting to MySQL database:', err.message);
      return;
    }
    console.log('Connected to MySQL database');
  });


app.get('/', (req, res) => {
    const sql = 'SELECT * FROM employees';
    db.query(sql, (err, data) => {
      if (err){
        console.error("Error executing query:", err);
        return res.status(500).json({ error: "Error executing query" });
      }
      return res.json(data);
    });
  });

  //Create
app.post('/create', (req, res) => {
    const sql = "INSERT INTO EMPLOYEES (`NAME`, `EMAIL`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
});

//Update
app.put('/update/:id', (req, res) => {
    const sql = "update employees set `NAME` = ?, `EMAIL` = ? where ID = ?";
    const values = [
        req.body.name,
        req.body.email
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
});

//Delete
app.delete('/students/:id', (req, res) => {
    const sql = "Delete from employees where ID = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");
        return res.json(data);
    })
});

const port = 5000;
app.listen(port);