const fs = require('fs');
const request = require('request');

let slicedArgs = process.argv.slice(2);

const content = slicedArgs[0];
const localPath = slicedArgs[1];

request(content, (error, response, body) => {

  fs.writeFile(localPath, content, err => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});
