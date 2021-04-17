const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        password: "", 
        user: "root",
        database: "seta_cursos",
        host: "localhost"   
    }

);


module.exports = connection;
