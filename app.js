var http= require("http");
http.createServer(function(req,res){
    res.end("olá");
}).listen(9091);
console.log("Sevidor aberto");

