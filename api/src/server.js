const config = require('./config.js');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.set('view engine', 'ejs')
app.use(express.static('src/public'));
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.json());

const port = config.PORT;

app.use('/', routes);

// Starts Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})