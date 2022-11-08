const fs = require('fs');
const filepath = '/Users/conor.manning/projects/portfolio-site/src/MOCK_DATA.json';

const apiServe = (req, res) => {
    const filters = req.query;
    // console.log(filters);

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        let jsonData = JSON.parse(data);
        if (filters.recommended) {
            mask = filters.recommended;
            var isTrueSet = (mask.toLowerCase() === 'true');
            let mapped = jsonData.filter(
                elem => elem.recommended == isTrueSet
            )
            res.send(mapped);
        } else {
            res.send(jsonData);
        }
    });
};

module.exports = {
    apiServe
};