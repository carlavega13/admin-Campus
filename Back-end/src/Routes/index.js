const { Router } = require("express");
const login=require("../Routes/login");
// const courses = require("./courses");

const router=Router()

router.post("/",login)
// router.post("/getCourses",courses)
module.exports=router