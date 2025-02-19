const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async(req,res) =>{
    console.log('New request received');
    res.writeHead(200,{'Content-Type': 'text/html'});
    const response = await axios.get("https://api.github.com/users");
    const datas = await response.data;
    const pdata = await axios.get("https://api.github.com/search/users",{
        params:{
            q:"location:ghaziabad"
        }
    });
    const newdata = pdata.data.items;
    let frontdata = `<html><head></head><body>`
    newdata.forEach((data)=>{
        frontdata += `<div><img src ="${data.avatar_url}"></div>`
    });
    frontdata += `</body></html>`
    res.end(frontdata);




});

server.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});