var compress = require('compression');
var express = require('express');
var app = express();
var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;
var uuid = require('node-uuid');

app.set('port', (process.env.PORT || 5000));
// app.set('port', (process.env.NODE_ENV = 'production'));

// console.log(process.env.NODE_ENV);

// app.use(compress());
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, response) {
 
    if (req.query.num_agents && req.query.training_days && req.query.percent_churn && req.query.cost_per_hour) {
		var myGuid = uuid.v1();
		var childArgs = [
		  path.join(__dirname, '/rasterize.js'),
		  'http://fast-wave-27813.herokuapp.com/pdf.html?num_agents=' + req.query.num_agents + '&training_days=' + req.query.training_days + '&percent_churn=' + req.query.percent_churn + '&cost_per_hour=' + req.query.cost_per_hour + '', 'pdfreport_' + myGuid + '.pdf', '1786px*2560px', '1.0'
		];
		console.log(binPath);
		console.log(path.join(__dirname, '/rasterize.js'));
		childProcess.execFile(binPath, childArgs, {encoding: 'buffer', maxBuffer: 5000*1024}, function(err, stdout, stderr) {
		  // handle results 
			if (err) {
				console.log(stderr);
				response.writeHead(500, {"Content-Type": "text/plain"});
				response.end(stderr);
			} else {
				var fs = require('fs');
				var data = fs.readFileSync('/tmp/pdfreport_' + myGuid + '.pdf');
				response.writeHead(200,{"Content-Type": "application/pdf"});
				response.write(data);
				fs.unlinkSync('/tmp/pdfreport_' + myGuid + '.pdf');
				response.end();

			  //response.writeHead(200,{"Content-Type": "application/pdf"});
			  //response.end(stdout);
			}
		  //res.send(new Buffer(stdout, 'binary'));
		  //res.end;
		});
    
    } else {
    	response.writeHead(500, {"Content-Type": "text/plain"});
		response.end("ERROR: INCORRECT URL PARAMS");
    }


});


app.get('/test/', function(request, response) {

	var html5pdf = require("html5-to-pdf");
	var fs = require("fs");
 
 

	console.log('Loading a web page');
	var page = require('webpage').create();
	var url = 'http://en.wikipedia.org/';
	page.open(url, function (status) {
	  console.log('Page loaded');
	  page.render('wikipedia.org.png');
	  phantom.exit();
	});


	fs.createReadStream(__dirname + "/public/pdf.html")
	  .pipe(html5pdf())
	  .pipe(fs.createWriteStream(__dirname + "/public/pdf.pdf"));
 
	// --- OR --- 
 /*
	html5pdf().from("/path/to/document.html").to("/path/to/document.pdf", function () {
	  console.log("Done")
	});
*/
  	response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


