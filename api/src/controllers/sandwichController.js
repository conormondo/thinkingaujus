const fs = require('fs');

// To view
const randomView = (req, res) => {
    res.render('sandwiches', {});
};

// Gallery View

module.exports = {
    randomView
};