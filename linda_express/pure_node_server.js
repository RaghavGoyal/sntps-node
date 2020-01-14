const http = require('http');
const url = require('url');

function handler(request, response)
{
    const parsedUrl=url.parse(request.url, true);
    // console.log(parsedUrl)
    response.setHeader('x-server-date', new Date());

    if(parsedUrl.pathname === '/')
    {
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write("hello from pure node server");
        return response.end();
    }
    else if (parsedUrl.pathname === '/time'){
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write(new Date().toString());
        return response.end();
    }
    else if(parsedUrl.pathname==='/hello'){
        const name = parsedUrl.query.name;
        if(!name){
            response.writeHead(404, {'Content-type':'text/plain'});
            return response.end();
        }
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write(`hello ${name}`);
        return response.end();
    }
    else if(parsedUrl.pathname.startsWith('/user/')){
        const regex =new RegExp('\/user\/(.+)');
        const matches= regex.exec(parsedUrl.pathname);
        if(!matches|| !matches[1]){
            response.writeHead(404, {'Content-type':'text/plain'});
            return response.end();
        }
        response.writeHead(200, {'Content-type':'text/plain'});
        response.write(`user profile of ${matches[1]}`);
        return response.end();
    }
    else{
        response.writeHead(404, {'Content-type':'text/plain'});
        return response.end();
    }
    
}

const server=http.createServer(handler);

server.listen(8080);
console.log("server running")