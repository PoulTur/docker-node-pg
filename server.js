'use strict';

const express = require('express');
const dbAccess = require('./dbAccess');


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
    dbAccess.readFromDb().then(function(result){
        res.json(result);
    });  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
