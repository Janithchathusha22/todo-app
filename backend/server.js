
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
    host: "mysql",
    user: "todo_user",
    password: "todo_password",
    database: "todo_app",
    port: 3306,
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: ", err);
        return;
    }
    console.log("Connected to MySQL");
});

// API routes
app.get("/tasks", (req, res) => {
    db.query(
        "SELECT * FROM task WHERE is_completed = FALSE ORDER BY created_at DESC LIMIT 5",
        (err, results) => {
            if (err) res.status(500).json(err);
            else res.json(results);
        }
    );
});

app.post("/tasks", (req, res) => {
    const { title, description } = req.body;
    db.query(
        "INSERT INTO task (title, description) VALUES (?, ?)",
        [title, description],
        (err, result) => {
            if (err) res.status(500).json(err);
            else res.status(201).json({ id: result.insertId });
        }
    )
});

app.patch("/tasks/:id", (req, res) => {
    const { id } = req.params;
    db.query("UPDATE task SET is_completed = TRUE WHERE id = ?", [id], err => {
        if (err) res.status(500).json(err);
        else res.status(204).send();
    });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));