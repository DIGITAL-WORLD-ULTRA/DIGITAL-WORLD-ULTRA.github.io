var http = require('http')
var fs = require('fs')

http.createServer((req,res) => {
    switch(req.url){
        case '/': fs.readFile('./app-store.htm',(err,data) => res.end(data));
        break;
        case '/store': fs.readFile('./app-store.htm',(err,data) => res.end(data));
        break;
        case '/home': fs.readFile('./app-store.htm',(err,data) => res.end(data));
        break;
        case '/spp.css': fs.readFile('./spp.css',(err,data) => res.end(data));
        break;
        case '/img/shadow.png': fs.readFile('./img/shadow.png',(err,data) => res.end(data));
        break;
        case '/img/chinese.png': fs.readFile('./img/chinese.png',(err,data) => res.end(data));
        break;
        case '/favico.ico': fs.readFile('./favico.ico',(err,data) => res.end(data));
        break;
        case '/img/coc.png': fs.readFile('./img/coc.png',(err,data) => res.end(data));
        break;
        case '/img/web.png': fs.readFile('./img/web.png',(err,data) => res.end(data));
        break;
        case '/img/vscode.ico': fs.readFile('./img/vscode.ico',(err,data) => res.end(data));
        break;
        case '/img/shadow3.png': fs.readFile('./img/shadow3.png',(err,data) => res.end(data));
        break;
        case '/app.js': fs.readFile('./app.js',(err,data) => res.end(data));
        break;
        default: res.end('404 not found ('+req.url+')')
        break;
        case '/img/shadow-fight-2-switch-hero.jpg': fs.readFile('./img/shadow-fight-2-switch-hero.jpg',(err,data) => res.end(data))
        break;
        case '/game/shadowfight2': fs.readFile('./shadowfight2.htm',(err,data) => res.end(data))
    }
}).listen(1000,'127.0.0.1')