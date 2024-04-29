//********************************* Importing required libararies ***********************
import express from 'express';
const router = express.Router();
import Task from '../models/task.js';


//********************************** Create a new task *********************************
router.post('/tasks', async (req, res) => {
    // console.log('Received data:', req.body);
    if (!req.body.title) {
        console.error('Required fields are missing');
        return res.status(400).send({ error: 'Required fields: title and id must be provided.' });
    }
    try {
        const { title, description, status } = req.body;
        const task = new Task({ title, description, status });
        await task.save();
        console.log('Task added successfully!');
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send({ error: error.message });
        console.error('Failed to add task:', error.message);
    }
});



//********************************** Retrieve all tasks **********************************
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        console.log("All tasks retrieves successfully!");
        res.send(tasks);
    } catch (error) {
        res.status(500).send();
        console.error('Failed to retrieves all task:', error.message);
    }
});

//********************************** Retrieve a single task by its ID *********************
router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
        console.log('Task retrive successfully!');
    } catch (error) {
        res.status(500).send();
        console.error('Failed to retrieve task:', error.message);
    }
});

//*********************************** Update a task by its ID *****************************
router.patch('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        console.log('Task updated successfully!');
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
        console.error('Failed to update task:', error.message);
    }
});

//************************************ Delete a task by its ID ****************************
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        console.log('Task deletede successfully!');
        res.send(task);
    } catch (error) {
        res.status(500).send();
        console.error('Failed to delete task:', error.message);
    }
});

export default router;