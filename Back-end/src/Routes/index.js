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
const postCourse = require("./postCourse");
const postUserMoodle = require("./postUserMoodle");
const putUserMoodle = require("./putUserMoodle");
const postEnrolUser = require("./postEnrolUser");

const router=Router()


router.post("/postDomain",createDomain)
router.post("/postUser",createUser)
router.post("/login",login)
router.post("/getCourses",getCourses)
router.post("/getUSer",getUser)
router.post("/postMail",postMail)
router.post("/getAllUsers",getAllUsers)
router.post("/getGrades",getGrades)
router.post("/postCourse",postCourse)
router.post("/postUserMoodle",postUserMoodle)
router.put("/putUser", putUser)
router.put("/putUserMoodle",putUserMoodle)
router.post("/enrolUser",postEnrolUser)
router.get("/",(req,res)=>{
    const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Soy un web service</title>
</head>
<body>
    <h1>Soy un web service</h1>
    <!-- El contenido de tu página web puede ir aquí -->
</body>
</html>
`;
    res.status(200).send(html)})
module.exports=router