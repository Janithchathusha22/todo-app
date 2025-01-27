import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const createTask = async () => {
        try {
            await axios.post("/tasks", newTask);
            setNewTask({ title: "", description: "" });
            fetchTasks();
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    const markAsCompleted = async id => {
        try {
            await axios.patch(`/tasks/${id}`);
            fetchTasks();
        } catch (error) {
            console.error("Error marking task as completed:", error);
        }
    };

    return (
        <div className="container">
            <h1 className="display-4 text-center">Todo App</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={newTask.title}
                    onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                />
                <textarea
                    className="form-control mt-2"
                    placeholder="Description"
                    value={newTask.description}
                    onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                ></textarea>
                <button className="btn btn-primary mt-2" onClick={createTask}>Add Task</button>
            </div>
            <div>
                {tasks.map(task => (
                    <div key={task.id} className="task-card bg-light p-3 mb-2">
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <button className="btn btn-success" onClick={() => markAsCompleted(task.id)}>
                            <FontAwesomeIcon icon={faCheck} /> Done
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
