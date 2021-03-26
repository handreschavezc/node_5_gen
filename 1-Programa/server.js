//CORE MODULE
const http = require('http');

const port = 3000;

const server = http.createServer( (req,res) => {


  console.log(req.method);

  if(req.method=='GET'){
    res.write("Hola GET")
  }else if(req.method=='DELETE'){
    res.write("Hola DELETE")
  }
  
  
  res.end();

} );  

server.listen(port, ()=>{
  console.log("Server ok port 3000");
  
});