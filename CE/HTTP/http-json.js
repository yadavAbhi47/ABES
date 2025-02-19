const http = require('http');
const fs = require('fs/promises');
// const users = [
//     {id:1, name:"Rahul", email: 'rahul@getMaxListeners.com'},
//     {id:2, name:'Raj', email: 'raj@gmail.com'},
//     {id:3, name: 'sun', email:'sun@gmail.com'}
// ]

const server = http.createServer(async(req, res) => {
    res.writeHead(200,{'Content_Type': 'application/json'});
    const filedata = await fs.readFile("./aa.json",'utf8');
    const parsedata = JSON.parse(filedata);

    res.end(JSON.stringify(parsedata));
    // const newdata = users.map((users) =>{
    //     return users.name
    // });
    // let newdata = "";
    // users.forEach((users) =>{
    //     newdata += '$(users.name)'
    // });
    // res.end(newdata);
    // res.end(JSON.stringify(newdata))
    
});

PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});