const fs = require('fs');
const recommendations = require('../MOCK_DATA.json')
// OverView
const sandwichOverview = (req, res) => {
    res.render('sandwiches', {});
};
// Random View
const randomView = (req, res) => {
    res.render('randomSandwich', {});
};

// Gallery View
const tableView = (req, res) => {
    res.render('sandwichTable', { data: recommendations });
    // console.log(recommendations)
};

module.exports = {
    sandwichOverview,
    randomView,
    tableView
};