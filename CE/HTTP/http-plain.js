const http = require('http');
const fs = require('fs/promises');

const server =  http.createServer(async (req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');
   res.write("<H1>Hello, worldddddddddddddd!</H1>");
   const data = await fs.readFile("./index.html", "utf-8");
   res.end(data);
       
});
PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})