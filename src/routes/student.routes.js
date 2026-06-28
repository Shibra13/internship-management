const express = require("express");
const router = express.Router();

const{
  getStudents,
  addStudent
}= require("../controllers/student.controller");

// routes
router.get("/",getStudents);
router.post("/",addStudent);


module.exports = router;