const express = require('express');
const app = express();
require("dotenv").config();
var cors = require("cors");
const { connection } = require('./config/db');
const dataRouter = require('./routes/data.Route');
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("users page");
  });


app.use('/dashboard', dataRouter);



app.listen(4000, async () => {
    try {
      await connection;
      console.log("connected to DB");
    } catch (error) {
      console.log(error);
    }
  
    console.log(`server running on 4000`);
  });
  