const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "lao_gps",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.get("/customeremail", (req, res) => {
  db.query("SELECT * FROM customeremail", (err, result) => {
    if (err) {
      console.error("Error fetching customer emails:", err);
      res.status(500).send("An error occurred while fetching customer emails");
    } else {
      res.send(result);
    }
  });
});

app.post("/create", (req, res) => {
  const email = req.body.email;

  db.query(
    "INSERT INTO customeremail (email) VALUES (?)",
    [email],
    (err, result) => {
      if (err) {
        console.error("Error adding customer email:", err);
        res.status(500).send("An error occurred while adding customer email");
      } else {
        res.send("Customer email added successfully");
      }
    }
  );
});

app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
