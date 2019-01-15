var express = require('express');
var application = express();
var fileSystem = require('fs');


var server = application.listen(80, function(){
  var host = server.address().address;
  var port = server.address().port;
});

application.get('/listRooms', function (req, res) {
  fileSystem.readFile( __dirname + "/" + "rooms.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
  })
});

application.post('/addRoom', function (req, res) {
  fileSystem.readFile( __dirname + "/" + "rooms.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    data["user4"] = user["user4"];
    console.log( data );
    res.end( JSON.stringify(data));
  })
});

application.get('/getRoom/:id', function (req, res) {
  fileSystem.readFile( __dirname + "/" + "rooms.json", 'utf8', function (err, data) {
    var rooms = JSON.parse( data );
    var room = rooms["room" + req.params.id];

    console.log( room );
    res.end( JSON.stringify(room));
  })
});

application.delete('/deleteRoom/:id', function(req, res) {
  fileSystem.readFile( __dirname + "/" + "rooms.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    delete data["room" + req.params.id];

    console.log( data );
    res.end( JSON.stringify(data));
  })
});
