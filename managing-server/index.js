const http = require('http');
var express = require('express');
var app = express();
const cors = require('cors');
var bodyParser = require('body-parser')
app.use(bodyParser.json())

const hostname = '127.0.0.1';
const port = 3005;
var measurement1 = 5;
var measurement2 = 5;
var measurement3 = 5
app.use(cors());


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


app.get('/measurement/device/1', (req, res) => {
    console.log(`Sending 1: ${measurement1}`)
    res.send({
        deviceId: 1,
        measurement: measurement1,
        date: new Date()
    })
})
app.get('/measurement/device/2', (req, res) => {
    console.log(`Sending 2: ${measurement2}`)
    res.send({
        deviceId: 2,
        measurement: measurement2,
        date: new Date()
    })
})
app.get('/measurement/device/3', (req, res) => {
    console.log(`Sending 3: ${measurement3}`)
    res.send({
        deviceId: 3,
        measurement: measurement3,
        date: new Date()
    })
})

app.post('/measurement/device/1', (req, res) => {
    measurement1 = req.body.measurement
    console.log(`Received 1: ${measurement1}`)
    res.send();
})
app.post('/measurement/device/2', (req, res) => {
    measurement2 = req.body.measurement
    console.log(`Received 2: ${measurement2}`)
    res.send();
})
app.post('/measurement/device/3', (req, res) => {
    measurement3 = req.body.measurement
    console.log(`Received 3: ${measurement3}`)
    res.send();
})