const fs = require("fs/promises");
const read = async () => {
    const data = await fs.readFile("./data.txt", "utf-8");
    console.log(data);
}
const write = async () => {
    const newdata = "This is my new work"
    await fs.writeFile("./data.txt", newdata,"utf-8")
}

read();

write();
