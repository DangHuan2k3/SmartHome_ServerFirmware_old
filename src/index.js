const path = require('path');
const express = require('express');
const morgan = require('morgan');
const db = require('./config/db');
const ngrok = require('@ngrok/ngrok');
const methodOverride = require('method-override')
const app = express();
const port = 4000;

const route = require('./routes');
// Connect to DB

db.connect();

//apply middleware
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// Static file: directory of Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// override with [GET] having ?_method=...
app.use(methodOverride('_method', {
    methods: ['GET']
}))


// Routes init
route(app);

app.listen(port, () => {
    console.log(`My app listening on port http://localhost:${port}`);
});

// ngrok http --scheme=http 4000 --host-header=localhost:4000

