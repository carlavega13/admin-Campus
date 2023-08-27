const loginController=require("../Controllers/loginController")
const login=(req,res)=>{
try {
    res.status(200).send("si")
} catch (error) {
    res.status(400).send(error.message)    
}
}
module.exports=login