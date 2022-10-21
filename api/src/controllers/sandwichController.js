const fs = require('fs');

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
    async function get_sandwich_data () {
        let response = await fetch('/data');
        let json = await response.json()
        res.render('sandwichTable', {recommendations: json});
    }
    get_sandwich_data()
};

module.exports = {
    sandwichOverview,
    randomView,
    tableView
};