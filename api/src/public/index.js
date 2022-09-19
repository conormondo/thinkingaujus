const fs = require('fs');

// Grabs age date
function getAge() {
    const bd = new Date(1994, 03, 12);
    let elapsed = Date.now() - bd
    let age = elapsed / 1000 / 60 / 60 / 24 / 365
    return Math.floor(age)
}
// Updates age element
function updateAge() {
    document.body.querySelector('#age').innerText = getAge();
}

// Random sandwich call
function getRandomSandwich() {
    // TODO: Make work
    let recommendationFile = fs.readFileSync('../recs.json');
    let recsJson = JSON.parse(recommendationFile);
    let choice = Math.floor(Math.random() * recsJson.length - 1);
    console.log('Randomly selected number: ', choice + 1)
    console.log(recsJson[choice])
    return recJson[choice];
};