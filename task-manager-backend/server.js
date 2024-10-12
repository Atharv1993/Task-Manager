// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

let tasks = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Node.js API', completed: false }
];

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const task = { id: tasks.length + 1, title: req.body.title, completed: false };
    tasks.push(task);
    res.json(task);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
    res.json({ message: 'Task deleted' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
