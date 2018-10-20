var request = require("request");
var fs = require('fs');
var html;

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



    request(
        { uri: "http://www.example.com" },
        function(error, response, body) {
    	html=body;
            console.log(body);
            fs.appendFile('kurssit.html', body, function (err) {
              if (err) throw err;
              console.log('Saved!');
            });


        }
    );
