const pino = require('pino')();
// const pino = pinolib();
const cluster = require('cluster');
const numCPUs = 1//require('os').cpus().length;

pino.info(`Started using Node ${process.version} forking ${numCPUs} child`)
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
    require('./expressinit')
}