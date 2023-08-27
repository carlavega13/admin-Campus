const server=require("./src/index")
const { conn } = require("./src/db.js");
conn.sync({ force: false }).then(() => {
    console.log(" db conectada");
server.listen(3001,()=>{
    console.log(" listening at 3001");
})

})
