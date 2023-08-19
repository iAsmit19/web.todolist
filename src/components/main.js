import "../sheets/main.css";
import { useState } from "react";

export const Main = () => {
    // Creating the Task Array
    const [task, setTask] = useState([]);
    
    // Creating New Task Array
    const [newTask, setNewTask] = useState("");
    
    // Adding Task from Input Filed
    const handleChange = (event) => {
        event.target.value !== " " && setNewTask(event.target.value);
        event.target.value !== "  " && setNewTask(event.target.value);
        event.target.value !== "   " && setNewTask(event.target.value);
    };
    
    // Adding Task to the Task Array from the Add Button
    const addTask = () => {
        const addNewTask = [...task, newTask];
        setTask(addNewTask);
    };

    // Adding Task to the Task Array by pressing the Enter Key
    const keyDownHandle = (event) => {
        event.key === "Enter" && addTask();
    };

    // Deleting the Task
    const deleteTask = (taskName) => {
        const newToDoList = task.filter((theTask) => {
            return theTask !== taskName;
        });

        setTask(newToDoList);
    };

    // On Checked Task will be Cut
    const [check, setCheck] = useState(false);
    const checkHandle = (task) => {
        check ? setCheck(false) : setCheck(true); 
        return (
            <p style={{textDecoration: check ? "line-through" : "none", color: check && "rgb(135, 135, 135)"}}>{task}</p>);
    };

    return (
        <div className="main">
            <div className="takeTask">
                <input type="text" placeholder="Add your task . . ." onChange={handleChange} onKeyDown={keyDownHandle} />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="showTask">
                {task.map((task) => {
                    return (
                        <div className="task">
                            <div className="taskInput">
                                <input type="checkbox" onChange={() => checkHandle(task)} />
                            </div>
                            <div className="division">
                            </div>
                            <div className="taskP">
                                <p>{task}</p>
                            </div>
                            <div className="division">
                            </div>
                            <div className="delete" onClick={() => deleteTask(task)}>
                                <button>Del</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};