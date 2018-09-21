
var http  = require("http");

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/plain'});
    response.end("This is simple code");
}).listen(8080);

console.log("Server started");