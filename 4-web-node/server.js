const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine', 'hbs');
app.use( express.static('public') );


data = [
  { id: 1, categoria: "Polos", producto: "Leevy", },
  { id: 2, categoria: "Polos", producto: "Rambo", },
  { id: 3, categoria: "Polos", producto: "Addidas", },
]

app.get('/productos', (req, res) => {

  res.render('productos', {
    data : data
  });

})



app.listen(8080, () => {
  console.log("Server Ok 8080");
  
})