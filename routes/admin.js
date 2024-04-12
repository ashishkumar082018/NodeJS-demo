const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res,next) =>{
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/product', (req, res,next) =>{
    const title = req.body.Title;
    const size = req.body.Size;
    console.log('Product Title:', title);
    console.log('Product Size:', size);
    res.redirect('/')
});

module.exports = router;