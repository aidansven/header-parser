var http = require('http');
var useragent = require('useragent');

var server = http.createServer(function(req, res){
    
    var agent = useragent.parse(req.headers['user-agent']);
    var browser = agent.toAgent();
    var ip = req.headers['x-forwarded-for'];
    var os = agent.os.toString();
    var language = req.headers['accept-language'];
    
    var obj = {'browser': browser, 'ip': ip, 'operating system': os, 'language': language};
    
    
    res.writeHead(200, 'Everything is OK!');
    res.write('<style>body {text-align: center}</style><title>Header-Parser</title><h4>Stealing your computer\'s top-secret information!</h4>');
    res.write(JSON.stringify(obj));
    res.end();
    
});

server.listen(process.env.PORT, process.env.IP);