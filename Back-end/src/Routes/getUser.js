const getUserController = require("../Controllers/getUserController")

const getUser=(req,res)=>{
try {
    const response=getUserController(req.body)
    res.status(200).json(response)
} catch (error) {
    res.status(200).json(error.message)
}
}
module.exports=getUser