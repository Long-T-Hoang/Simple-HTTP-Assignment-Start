const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image.png' });
  response.write(image);
  response.end();
};

// export functions
module.exports.getImage = getImage;
