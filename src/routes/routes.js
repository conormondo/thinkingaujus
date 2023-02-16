const { json } = require('body-parser');
const express = require('express');

const router = express.Router();

// Base Navigation
router.get('/', (req, res) => {
    res.render('index')
});
router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router