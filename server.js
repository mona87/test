var express = require('express');
var app = express();
var path = require('path');


/* view at http://localhost:8080 */
var port = process.env.PORT || 8080;
app.use(express.static('public'));

app.get('/', function(req, res) {
	// res.sendFile(path.join(__dirname + '/public/pdf.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
    
});

app.listen(port, function(){
    console.log('Service started on port:' + port);
});

// app.listen(8080);




// app.listen(port, function() {
//   console.log('Node app is running on port', port);
// });
