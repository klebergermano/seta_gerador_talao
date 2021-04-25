const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();
const generate_pdf = require('./generate_pdf');
const connection = require('./configDB/connection');



app.get('/create-pdf', (req, res)=>{

  const result = new Promise((resolve, reject)=>{

    connection.query("SELECT * FROM vw_folha_pagamento where id_talao = 1", (err, results)=>{
      if(err) reject();
        resolve(results)
      });
  })
  .then((res)=>{ 
    return generate_pdf(res);
  })
  .then(console.log)
  .then(()=>{
    res.sendFile(__dirname + "/generate_pdf/pdf_result/result.pdf");
  })
  .catch((err)=>{
    console.log(err)
  });
  



 

})








app.listen(PORT, ()=>{
  console.log(`Server listening ${PORT}`);
});