const pino = require('pino')()
const cluster = require('cluster')
const numCPUs = require('os').cpus().length;

pino.info(`Started using Node ${process.version} forking ${numCPUs} child`)
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
    require('./expressinit')
}