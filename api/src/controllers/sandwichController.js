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


module.exports = {
    randomView,
    sandwichOverview
};