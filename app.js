const { text } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended : "false"}));

app.use('/add-product', (req, res,next) =>{
    res.send('<form action="/product" method="POST">' +
    '<input type="text" name="Title" placeholder="Enter Product Title">' +
    '<input type="text" name="Size" placeholder="Enter Product Size">' +
    '<button type="submit">Add Product</button>' +
 '</form>')
});

app.use('/product', (req, res,next) =>{
    const title = req.body.Title;
    const size = req.body.Size;
    console.log('Product Title:', title);
    console.log('Product Size:', size);
    res.redirect('/')
});

app.use('/', (req, res,next) =>{
    res.send("<h1> Hello from express js</h1>")
});



app.listen(3000);