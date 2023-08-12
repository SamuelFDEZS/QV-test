import { useState } from "react"
const ListTasks = ({ taskList, setTaskList }) => {

    const [checkedTasks, setCheckedTasks] = useState([])


    const handleCheck = (task) => {

        const updatedCheckedList = checkedTasks.includes(task) ? checkedTasks.filter((checkedTask) => checkedTask !== task) : [...checkedTasks, task]

        setCheckedTasks(updatedCheckedList)

        const updatedTaskList = taskList.map((t) => {
            if (t === task) {
                t.state = updatedCheckedList.includes(task) ? "Completed" : "Pending"
            }
            return t
        })

        setTaskList = updatedTaskList

        console.log(checkedTasks)
        console.log(taskList)
    }

    const deleteTask = (task) => {
        setTaskList(taskList.filter((t) => t !== task))
        console.log(task)
    }
    return (
        <div className="task-list">
            <ul className="div-ul">
                {taskList.map((task, i) => {
                    const isChecked = checkedTasks.includes(task);
                    console.log(isChecked)
                    const taskClass = isChecked ? "list-item checked" : "list-item"
                    return (
                        <li className="list-item">
                            <input type="checkbox" className ="check" checked={checkedTasks.includes(task)} onChange={() => handleCheck(task)} />
                            <span key={i} className={taskClass}>{task.name}
                            </span>

                            <button type="button" onClick={() => deleteTask(task)}>-</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListTasks;