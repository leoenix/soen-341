const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// post method to add new users

app.post("/users", async(req, res) => {
    try{
        const { email } = req.body;
        const userExists = await pool.query("SELECT * FROM Users WHERE email = $1", [email], async function (error, results, fields) {
            if (results.rows.length < 1){
                const newUser = await pool.query("INSERT INTO Users (email) VALUES($1) RETURNING *",
                    [email]);
                res.json(newUser.rows[0]);
            } else {
                console.log('user already registered');
                res.sendStatus(200);
            }
        });

    } catch (e) {
        console.error(e.message);
    }

});

// get method to get all users

app.get("/users", async (req, res) => {
    try{
        const allUsers = await pool.query("SELECT * FROM Users");
        res.json(allUsers.rows);
    } catch (e) {
        console.error(e.message);
    }
})

app.get("/users/:email", async (req, res) => {
    try{
        console.log('we here' + req + res);
        const specificUser = await pool.query("SELECT * FROM Users WHERE email = $1", [req.params.email]);
        res.json(specificUser.rows[0]);
        console.log(res.json(specificUser.rows[0]));
    } catch (e) {
        console.error(e.message);
    }
})

// get method to get user with specific id
app.get("/users/:id", async (req, res) => {
    try{
        const specificUser = await pool.query("SELECT * FROM Users WHERE userid = $1", [req.params.id]);
        res.json(specificUser.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
});