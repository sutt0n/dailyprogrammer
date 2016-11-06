var fs = require('fs');

/* process cli args */
var fileName = process.argv[2];
var numSpaces = process.argv[3];

/* read file */
fs.readFile(fileName, 'utf8', function(err, data) {
  /* throw exception(s), if necessary */
  if(err) {
    throw err;
  }

  /* prepend spaces before lines */
  var lines = data.split(/\r\n/);
  lines.forEach(function(line, idx, arr) {
    arr[idx] = ' '.repeat(numSpaces) + line;
  });

  lines = lines.join('\r\n');

  /* print */
  console.log(
    lines
  );
});
