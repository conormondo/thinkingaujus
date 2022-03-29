const fs = require('fs');
let recommendationFile = fs.readFileSync('../recs.json');
let recsJson = JSON.parse(recommendationFile);

const sandwichController = {
    async getRandom(req, res) {
        let choice = Math.floor(Math.random() * recsJson.length - 1);
        console.log('Randomly selected number: ', choice + 1)
        console.log(recsJson[choice])
    }
}

sandwichController.getRandom()