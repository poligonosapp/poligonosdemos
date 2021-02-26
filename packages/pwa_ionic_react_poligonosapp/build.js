// Inside of build.js:
const {generateSW} = require('workbox-build');

const { crashReporter } = require('electron')

crashReporter.start({ submitURL: 'https://poligonosapp.herokuapp.com/' })


const swDest = 'build/sw.js';
generateSW({
  swDest,
  compress:true
}).then(({count, size}) => {
  console.log(`Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`);
});