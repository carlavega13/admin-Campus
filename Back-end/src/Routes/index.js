const { Router } = require("express");
const login=require("../Routes/login");
const createDomain = require("./dbRoutes/createDomain");
const createUser = require("./dbRoutes/createUser");
// const courses = require("./courses");

const router=Router()

router.post("/login",login)
router.post("/postDomain",createDomain)
router.post("/postUser",createUser)
// router.post("/getCourses",courses)
module.exports=router