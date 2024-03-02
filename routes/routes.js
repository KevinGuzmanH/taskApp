const express = require('express');
const router = express.Router();
const taskController = require('../controller/controller');

//Las rutas deberán manejar solicitudes HTTP para listar todas las tareas,
//obtener una tarea por su ID, agregar una nueva tarea, actualizar una tarea
//existente y eliminar una tarea.

// Obtener todas las tareas
router.get('/tasks/getall/', taskController.getAllTasks); // GET /api/v1/tasks/getall
// Obtener una tarea por su ID
router.get('/tasks/getbyid/:id', taskController.getTaskById); // GET /api/v1/tasks/getbyid/:id
// Crear una nueva tarea
router.post('/tasks/new/', taskController.createTask); // POST /api/v1/tasks/new
// Actualizar una tarea existente
router.put('/tasks/update/:id', taskController.updateTask); // PUT /api/v1/tasks/update/:id
// Eliminar una tarea por su ID
router.delete('/tasks/delete/:id', taskController.deleteTask); // DELETE /api/v1/tasks/delete/:id

module.exports = router;


module.exports = router;
