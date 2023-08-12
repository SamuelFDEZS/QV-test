import { useState } from "react"

const Form = ({ taskList, setTaskList }) => {
    const initial_state = {
        name: "",
        state: ""
    }

    const [error, setError] = useState("")


    const [name, setName] = useState("")

    const storageNewTask = (event) => {
        setError("")
        setName(event.target.value)
        console.log(name)
    }
    const addTask = () => {
        if (name !== "") {

            const newTask = {
                name: name,
                state: "Pending"
            };

            setTaskList([...taskList, newTask]);
            setName(""); // Limpiar el campo de entrada
        } else {
            setError("Error: you did not type a new task");
        }

    }
    return (
            <div className="form-box">
            <h2 className="form-title">Escribe una nueva tarea</h2>
                <input type="text" className="task-name" onInput={storageNewTask} value={name}/>
                <p className="error-field">{error}</p>
                <button type="button" onClick={addTask} className="add">Add Task</button>
            </div>
    )
}

export default Form;