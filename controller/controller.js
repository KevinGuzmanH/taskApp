const Task = require('../model/taskmodel');

//array en el servidor.
let tasks = [];

const getAllTasks = (req, res) => {
    res.json(tasks);
};

const getTaskById = (req, res) => {
    const id = req.params.id;
    const task = tasks.find(task => task.id === id);
    if (!task) {
        //Utilizar códigos de estado HTTP apropiados en las respuestas
        res.status(404).json({ message: "Task not found" });
    } else {
        res.json(task);
    }
};

const createTask = (req, res) => {
    const { name, description, dueDate } = req.body;
    // Validación de datos de entrada opcional
    if (!name || !dueDate) {
        return res.status(400).json({ message: "Name and due date are required" });
    }
    const id = tasks.length.toString();
    const createdDate = new Date().toISOString();
    const status = "Pending";
    const task = new Task(id, name, description, createdDate, dueDate, status);
    tasks.push(task);
    res.status(201).json(task);
};

const updateTask = (req, res) => {
    const id = req.params.id;
    const { name, description, dueDate, status } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }
    // Validación de datos de entrada opcional
    if (!name || !dueDate) {
        return res.status(400).json({ message: "Name and due date are required" });
    }
    tasks[taskIndex] = { ...tasks[taskIndex], name, description, dueDate, status };
    res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
    const id = req.params.id;
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
