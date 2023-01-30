const express = require("express");
const { createTask,getTasks,getTaskbyId,deleteTask,updateTask} = require("../controller/taskController.js");
const Task = require("../model/taskModel.js");



const router = express.Router();

//creating task in database
router.post("/", createTask)

//get all tasks
router.get("/", getTasks)

//get sing Task by Id

router.get("/:id",getTaskbyId);

// delete task
router.delete("/:id",deleteTask);

//update a Task
router.put("/:id",updateTask)

module.exports = router;