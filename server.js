var http = require('http'),
    server = http.createServer(),
    PORT = process.env.PORT || 3000,
    os = require('os'),
    name = os.hostname();

server
    .on('request', function(res, res){
        var total = os.totalmem(),
            usage = total - os.freemem(),
            perc = +(usage / total *100).toFixed(2); 
        res.end(`I am ${name}. Using ${perc}% memory right now. O_o`);
    })
    .listen(PORT, function(){
        console.log('pi-server running..');
    });

