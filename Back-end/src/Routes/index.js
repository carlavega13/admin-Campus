const { Router } = require("express");
const login=require("../Routes/login");
const createDomain = require("./dbRoutes/createDomain");
const createUser = require("./dbRoutes/createUser");
const getCourses = require("./getCourses");
const putUser= require("./putUser");
const getUser = require("./getUser");
const postMail = require("./dbRoutes/postMail");
const getAllUsers = require("./getAllUsers");
const getGrades = require("./getGrades");

const router=Router()

router.post("/postDomain",createDomain)
router.post("/postUser",createUser)
router.post("/login",login)
router.post("/getCourses",getCourses)
router.put("/putUser", putUser)
router.post("/getUSer",getUser)
router.post("/postMail",postMail)
router.post("/getAllUsers",getAllUsers)
router.post("/getGrades",getGrades)
router.get("/",(req,res)=>res.status(200).json("LISTO"))
module.exports=router