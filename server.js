//Creating a server, wrote for node
//Myla Fairchild

var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.write('You will see this text');
    response.end();
}


http.createServer(onRequest).listen(3000);
