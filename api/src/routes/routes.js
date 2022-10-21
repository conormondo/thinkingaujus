const { json } = require('body-parser');
const express = require('express');
const fs = require('fs');
const { randomView, sandwichOverview, tableView} = require('../controllers/sandwichController');

const filepath = '/Users/conor.manning/projects/portfolio-site/api/src/recs.json';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
});
router.get('/about', (req, res) => {
    res.render('about')
});
router.get('/sandwiches', sandwichOverview);

router.get('/sandwiches/random', randomView);
router.get('/sandwiches/all', tableView);

router.get('/data', (req, res) => {
    fs.readFile(filepath, 'utf8', (err,data) => {
        if (err) {
            throw err;
        }
        res.send(JSON.parse(data));
    });
});
module.exports = router