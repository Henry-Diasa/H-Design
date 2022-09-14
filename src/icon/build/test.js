const fs = require('fs-extra');
fs.outputFile('./index.es.js', 'hello', (err) => {
  if (err) return;
  fs.readFile('./index.es.js', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log(data); // => hello!
  });
});
