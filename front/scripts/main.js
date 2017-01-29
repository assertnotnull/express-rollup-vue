// Import syles (automatically injected into <head>)
import '../styles/main.css';

// Import a couple modules for testing.
import { sayHelloTo } from './modules/mod1';
import addArray from './modules/mod2';

// Import a logger for easier debugging.
//import debug from 'debug';
//const log = debug('app:log');
import pino from 'pino';
const log = pino();

// The logger should only be disabled if we’re not in production.
if (ENV !== 'production') {

  // Enable the logger.
//  debug.enable('*');
  log.info('Logging is enabled!');
  log.error('oh');
  // Enable LiveReload
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
} else {
  log.disable();
}

// Run some functions from our imported modules.
const result1 = sayHelloTo('Jason');
const result2 = addArray([1, 2, 3, 4]);

// Print the results on the page.
const printTarget = document.getElementsByClassName('debug__output')[0];

printTarget.innerText = `sayHelloTo('Jason') => ${result1}\n\n`;
printTarget.innerText += `addArray([1, 2, 3, 4]) => ${result2}`;
