const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res,next) =>{
    res.send('<form action="/product" method="POST">' +
    '<input type="text" name="Title" placeholder="Enter Product Title">' +
    '<input type="text" name="Size" placeholder="Enter Product Size">' +
    '<button type="submit">Add Product</button>' +
 '</form>')
});

router.post('/product', (req, res,next) =>{
    const title = req.body.Title;
    const size = req.body.Size;
    console.log('Product Title:', title);
    console.log('Product Size:', size);
    res.redirect('/')
});

module.exports = router;