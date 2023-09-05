const postMailController = require("../../Controllers/sendGridControllers/postMailController")

const postMail=(req,res)=>{
try {
     const response=postMailController(req.body)
    res.status(200).json("si")
} catch (error) {
    res.status(200).json(error.message)
}
}
module.exports=postMail