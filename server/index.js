const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000; 

app.get('/api', (req, res)=>{

    res.json({message: "ok from server"});

});

app.listen(PORT, ()=>{ console.log(`Server listening on port ${PORT}`)});