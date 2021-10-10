const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "client/build")));
}

//ROUTES


//post meter data

app.post("/send", async(req, res) => {
    try {
        
        const { ID,  token, units, gasalert, tamper, battery, latitude, longitude } = req.body;
       
        console.log(req.body);
        

        const newTodo = await pool.query(
            "UPDATE accounts SET token = $2, units = $3, gasalert = $4, tamper = $5, battery = $6, latitude = $7, longitude = $8 WHERE serial = $1 RETURNING *",
            [ ID,  token, units, gasalert, tamper, battery, latitude, longitude ]           
        );
        {/*const respose = await pool.query("SELECT account_num FROM accounts WHERE serial = $1",
        [ID]
        );
        res.json(respose.rows[0]); */}
        
        
        res.json("done");
    } catch (err) {
       console.error(err.message); 
    }
});





//create new user

app.post("/users", async(req, res) => {
    try {
        
        const [ description,  description1, description2, description3, description4, description5, description6, description7 ] = req.body;
        
        
        

        const newUser = await pool.query(
            "INSERT INTO accounts (firstname, lastname, mobile, location_detail, district, serial, nin, account_num) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [description, description1, description2, description3, description4, description5, description6, description7]

           
        );
        
        res.json("added");
    } catch (err) {
       console.error(err.message); 
    }
});


//get all users


app.get("/users", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT user_id, firstname, lastname, mobile, location_detail, serial FROM accounts");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
    
});


//get a user

app.get("/users/view/:id", async(req, res) => {
    try {
        const {id} = (req.params);
        const todo = await pool.query("SELECT firstname, lastname, mobile, location_detail, nin, account_num, units, battery FROM accounts WHERE serial = $1",
        [id]);     
        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
        
    }
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});



app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});