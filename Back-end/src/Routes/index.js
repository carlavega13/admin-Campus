const { Router } = require("express");
const login=require("../Routes/login");
const createDomain = require("./dbRoutes/createDomain");
const createUser = require("./dbRoutes/createUser");
const getCourses = require("./getCourses");


const router=Router()

router.post("/postDomain",createDomain)
router.post("/postUser",createUser)
router.post("/login",login)
router.post("/getCourses",getCourses)
module.exports=router