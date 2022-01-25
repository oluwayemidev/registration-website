const http = require("http");
const { readFileSync } = require('fs');

// files
const homepage = readFileSync('./index.html');
const scripts = readFileSync('./scripts/script.js');
const style = readFileSync('./style/style.css');
const logicScript = readFileSync('./browser-app.js');

const server = http.createServer(function (req, res) {

    // homepage
    const url = req.url
    if (url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(homepage);
        res.end();
    }

    // style
    else if (url === '/style/style.css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(style);
        res.end();
    }
    
    // script
    else if (url === './scripts/script.js'){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(scripts);
        res.end();
    }
    
    // logic script
    else if (url === './myHeader.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(logicScript);
        res.end();
    }

    // 404
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write("<h1>Page not found</h1>");
        res.end();
    };
})

server.listen(8080)