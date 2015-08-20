var yargs = require('yargs').argv;
var rsync = require('rsyncwrapper').rsync;

var secrets = require('./secrets.json');


try
{
    var server = secrets.servers[yargs.server];

    var rsyncDest = server.user+'@'+server.host+':'+server.path;

    console.log("Deploying to " + server.host  + "\n");

    rsync({
        ssh: true,
        src: './www/',
        dest: rsyncDest,
        recursive: true,
        syncDest: true,
        args: ['--verbose'],
        exclude: ['.git', '.DS_Store'],
        onStdout: function(data) {
            console.log(data.toString());
        }
    }, function(error, stdout, stderr, cmd) {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Deployed to ' + rsyncDest);
            process.exit();
            return;
        }
    });
}
catch (e)
{
    console.log('No server found');
    process.exit();
}


