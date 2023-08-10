import { useState } from "react"

const Form = ({ taskList, setTaskList }) => {
    const initial_state = {
        name: "",
        state: ""
    }

    const [error, setError] = useState("")

    const [newTask, setNewTask] = useState(initial_state)

    const storageNewTask = (event) => {
        setNewTask({
            name: event.target.value,
            state: "Pending"
        })
    }
    const addTask = () => {
        newTask !== "" ? setTaskList([...taskList, newTask]) : setError("Error: you did not type a new task")
        console.log(taskList)
    }
    return (
        <>
            <div className="form-box">
                <input type="text" className="task-name" onInput={storageNewTask} />
                <button type="button" onClick={addTask}>Add Task</button>
            </div>

            <p className="error-field">{error}</p>
        </>
    )
}

export default Form;