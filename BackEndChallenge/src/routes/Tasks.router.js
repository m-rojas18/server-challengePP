const express =  require('express');
const router = express.Router();

const tasksController = require("../controllers/TasksCRUD");

router.get("/", tasksController.getAllTasks);
router.post("/api/savetask", tasksController.saveNewTask);
router.delete("/api/deleteAllTasks", tasksController.deleteAllTasks);
router.delete("/api/deleteSelectedTasks", tasksController.deleteSelectedTasks);

module.exports = router;