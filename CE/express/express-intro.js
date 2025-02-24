import express from 'express';

const app =express();

app.get('/',(request,respond) =>{
    respond.send("Hello CE Students");
});

app.get('/api/:name',(req,res) =>{
    try{
        const data = req.params;
    res.send(`Hello dear CE Students ${data.name}`);
    } catch(error){
        console.log((error.message))
    }
});

//http://localhost:3000/api?name=Rahul&rollno=789
app.get('/api',(request,respond) =>{
    try{
        const {name = "Guest", rollno = 100} = request.query;
    if(!name){
        response.send({
            status:404, message:"Name is required"
        });
        response.status(404).send("Name to dena hi hoga")
    }else{
    //const data = request.query;
    respond.send(`Hello Dear ${name} and Roll no. is${rollno}`);
    }

    } catch(error){
        console.log((error.message))

    }
});

const port = 3000;
app.listen(port,() =>{
    console.log(`Server running at http://localhost:${port}`);
});


