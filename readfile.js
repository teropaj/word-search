//var http = require('http');
var fs = require('fs');
var kurssit;
var startingPoint=0;
//http.createServer(function (req, res) {
  fs.readFile('kurssit.html', 'utf-8',function(err, data) {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(data);
    // res.end();
    kurssit=data;
    //console.log("DATA   "+data)
    console.log('kurssit on tyyppiä '+typeof kurssit);
    console.log('iili if found '+kurssit.search('iili'))
    //var startingPoint=kurssit.search('Siili Solutions');

     var newSP=0,kursL=kurssit.lenght;
     var company="Marimekko";
          //var startingPoint=kurssit.search('Nokia');
          while(newSP!=-1 || startingPoint-50<kursL){
            newSP=kurssit.indexOf(company,startingPoint);
            newSlice=kurssit.slice(newSP,newSP+200)
            if(newSlice.search('num')!=-1) console.log(newSlice)
            startingPoint=newSP+1;
            //console.log(newSP);

            //console.log(kurssit.slice(startingPoint,startingPoint+100))
          }
          // console.log(`StartingPoint is ${startingPoint}`)
          // console.log(`StartinP ${startingPoint}`)
          // var beforeSign='num\">'
          // var startP=kurssit.indexOf(beforeSign,startingPoint-2);
          // var endP=kurssit.indexOf("num",startingPoint);
          // console.log(`startP ${startP} endP ${endP}`)
          // console.log('rate '+kurssit.slice(startP+5,startP+10))

  });
// }).listen(3000);
