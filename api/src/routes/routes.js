const { json } = require('body-parser');
const express = require('express');
const { randomView, sandwichOverview, tableView} = require('../controllers/sandwichController');
const { apiServe } = require('../controllers/apiController');

const router = express.Router();

// Base Navigation
router.get('/', (req, res) => {
    res.render('index')
});
router.get('/about', (req, res) => {
    res.render('about')
});

// Sandwich Section
router.get('/sandwiches', sandwichOverview);
router.get('/sandwiches/random', randomView);
router.get('/sandwiches/all', tableView);

// API Endpoint
router.get('/data', apiServe);

module.exports = router