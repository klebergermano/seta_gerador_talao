const express = require("express");
const connection = require("./configDB/connection");
const app = express();
const PORT = process.env.PORT || 5000; 

const connecton = require("./configDB/connection");

connection.query("SELECT * FROM responsavel", (err, rows)=>{
    if(err) throw err;
    console.log(rows);
});


app.get('/api', (req, res)=>{

    res.json({message: "GET API "});

});

app.listen(PORT, ()=>{ console.log(`Server listening on port ${PORT}`)});