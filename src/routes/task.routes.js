const express = require("express");
const router = express.Router();

const{
  getTasks,
  addTask
} = require("../controllers/task.controller");

// routes
router.get("/",getTasks);
router.post("/",addTask);


module.exports = router;