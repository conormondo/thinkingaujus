const config = require('./config.js');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
var favicon = require('serve-favicon');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());

const port = config.PORT;

app.use('/', routes);

// Starts Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
    console.log(__dirname)
})