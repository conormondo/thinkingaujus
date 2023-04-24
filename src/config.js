const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve('../.env') // Second arg for second .env file
});

module.exports = {
    PORT: process.env.PORT || 3000,
}
