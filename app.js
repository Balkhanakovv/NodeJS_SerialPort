const express = require("express");
const SerialPort = require('serialport')

const port = new SerialPort('COM5') 
const app = express();
const jsonParser = express.json();

let STATUS = undefined;

app.post('/', jsonParser, function (request, response) {
    //let ledStatus = request.body.status ? '1' : '0';
    STATUS = request.body.status ? '1' : '0';
    let ledStatus = STATUS;
    port.write(ledStatus);
});

app.get("/", function(request, response){
     
    response.sendFile(__dirname + '/public/index.html');
});
 
app.listen(3000, '0.0.0.0');