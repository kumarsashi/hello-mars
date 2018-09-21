var http = require('http');
var fs = require('fs');

function sendResponse(response)
{
    response.writeHead(404,{'content-type':'text/html'});
    response.write("Error 404 : Resource not found");
    response.end();

}

var server = http.createServer(function(request,response){
    console.log(request.method);
    console.log(request.url);
    if(request.method == "GET" && request.url == "/"){
        response.writeHead(200,{'content-type':'text/html'}) ;
        fs.createReadStream('index.html').pipe(response);
    }
    else{
        sendResponse(response);
    }
}).listen(3000);

console.log("Server started");