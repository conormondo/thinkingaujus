const { query } = require("express");

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