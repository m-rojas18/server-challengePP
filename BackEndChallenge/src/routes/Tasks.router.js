const express =  require('express');
const router = express.Router();

const tasksController = require("../controllers/TasksCRUD");

router.get("/", tasksController.getAllTasks);
router.post("/savetask", tasksController.saveNewTask);
router.delete("/deleteAllTasks", tasksController.deleteAllTasks);
router.delete("/deleteSelectedTasks", tasksController.deleteSelectedTasks);