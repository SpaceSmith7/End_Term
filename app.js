var http = require('http');
var fs = require('fs');

function setFileRoute(res, path, contentType, resCode) {
    if(!resCode) {resCode = 200;}
    fs.readFile(__dirname + path, function(err, data) {
        if (err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("500 - Internal Error");
        }
        else {
            res.writeHead(resCode, {'Content-Type': contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '':
            setFileRoute(res, "/index.html", "text/html");
            break;
        case '/about':
            setFileRoute(res, '/about.html', 'text/html');
            break;
        case '/img/welcome.jpg':
            setFileRoute(res, '/img/welcome.jpg', 'image/jpeg');
            break;
        case '/img/about.jpg':
            setFileRoute(res, '/img/about.jpg', 'image/jpeg');
            break;
        case '/img/cry.jpg':
            setFileRoute(res, '/img/cry.jpg', 'image/jpeg');
            break;
        case '/img/gallery/graduation.jpg':
            setFileRoute(res, '/img/gallery/graduation.jpg', 'image/jpeg');
            break;
        case '/img/gallery/study.jpg':
            setFileRoute(res, '/img/gallery/study.jpg', 'image/jpeg');
            break;
        case '/style.css':
            setFileRoute(res, '/style.css', 'text/css');
            break;
        case '/video/students/memes.mp4':
            setFileRoute(res, '/video/students/memes.mp4', 'MPEG-4');
            break;
        default:
            setFileRoute(res, '/error.html', 'text/html');
            break;
    }
}).listen(3000);
