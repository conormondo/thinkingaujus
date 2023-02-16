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
    res.render('sandwichTable', {});
};

module.exports = {
    sandwichOverview,
    randomView,
    tableView
};