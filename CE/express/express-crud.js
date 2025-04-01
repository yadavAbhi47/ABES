import express from 'express';

const users = [{
    id:1,
    name: 'Abhishek',
    age: 21
}]

const app = express();
const port = 3000;
app.get("/",(req,res) =>{
    res.send(users)
});
app.use(express.json());
app.post("/",(req,res) =>{
    const bodydata = req.body;
    console.log(bodydata)
    res.send("Serer is sending this datThis is post request data from server")
});

app.post("/api/createUser",(req,res) =>{
    const {name,age} = req.body;
    const newId = users.length>0? users[users.length-1].id+1:1;
    users.push({id: newId,name,age})
    res.send("New user object is created succesfully")
});

app.get("/api/user/:id",(req,res)=>{
    const {id} = req.params;
    const user = users.find(user => user.id == id);
    res.send(user)
});

app.patch("/api/updateUser/:id", (req,res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id ==id);
    const{name} = req.body;
    users[index].name = name;
    res.send("User is updated Succesfully")
});

app.delete("/api/deleteUser/:id", (req,res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id ==id);
    users.splice(index,1);
    res.send("User is delete Succesfully")
});

//complete
app.listen(port,() =>{
    console.log(`Server is running at ${port}`)
});