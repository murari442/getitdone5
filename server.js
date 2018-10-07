const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./server/routes/api');
const api1 = require('./server/routes/api1');

//const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/dist/getitdone5')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api',api);
app.use('/api1',api1);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/getitdone5/index.html'));
});

app.listen(process.env.PORT || 8080);
// app.listen(port,function(){
//     console.log('Server Running on localhost: '+port);
// });