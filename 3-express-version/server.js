const express = require('express');


const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());

app.use(express.json())






//----------
//post usuario
//------------
app.post('/usuarios', (req, res) => {

  console.log(req.body);


  return res.json(
    {
      result: true
    }
  )
})

app.listen(8080, (req, res)=>{
  console.log("Server Ok 8080");
  
})