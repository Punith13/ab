const express = require('express');
const app = express(); 
const server = require('http').createServer(app); 
const fs = require('fs'); 
const port = 80; // changing port to 80
const bodyParser = require('body-parser'); 
const compression = require('compression'); 

server.listen(port); 


//enable compression of resources

app.use(compression());

const routes = require('./routes/routes'); 
app.use(bodyParser.json());
routes(app); 

//connect to mongodb 
const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/timelineservice');


//use static files in ROOT/public folder
app.use(express.static(__dirname + '/public')); 

app.get("/", function(req, res){ 
   res.writeHead(200,{"Context-Type":"text/html"});
	fs.createReadStream("index.html").pipe(res);
});


