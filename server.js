var http = require('http'),
    server = http.createServer(),
    PORT = process.env.PORT || 3000,
    os = require('os'),
    name = os.hostname(),
    roundToDecimal = function(num, dec){
        return +num.toFixed(dec);
    };

server
    .on('request', function(res, res){
        var total = os.totalmem(),
            usage = total - os.freemem(),
            perc = roundToDecimal(usage / total *100, 2),
            awakeHrs = roundToDecimal(os.uptime() / (60 * 60), 2);

        res.end(`I am ${name}. I have been up for ${awakeHrs} hrs using ${perc}% memory right now. O_o`);
    })
    .listen(PORT, function(){
        console.log('pi-server running..');
    });

