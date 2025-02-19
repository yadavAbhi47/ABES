const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/") {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const filedata = await fs.readFile("./HTTP/aa.json", 'utf8');
      const parsedata = JSON.parse(filedata);
      res.end(JSON.stringify(parsedata));
    } 
    else if (req.url === "/home") {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      const homePage = await fs.readFile("./home.html", 'utf8');
      res.end(homePage);
    } 
    else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      const errorPage = await fs.readFile("./error.html", 'utf8');
      res.end(errorPage);
    }
  } catch (error) {
    res.end("Internal Server Error");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});