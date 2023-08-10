import { useState } from "react"

const ListTasks = ({taskList, setTaskList}) => {

    const [checkedTasks, setCheckedTasks] = useState([])
    const [listClass, setListClass] = useState("")
    const handleCheck = (task) => {

        console.log(task)
        const updatedCheckedList = checkedTasks.includes(task) ? checkedTasks.filter((checkedTask) => checkedTask !== task) : [...checkedTasks, task]

        setCheckedTasks(updatedCheckedList)

        const updatedTaskList = taskList.map((t) => {
            if (t === task){
                debugger
                t.state = updatedCheckedList.includes(task) ? "Completed" : "Pending"
            }
            return t
        })
        setTaskList = updatedTaskList

        if(task.state === "Completed") {
            setListClass("list-item checked")
        } else {
            setListClass("list-item");
            console.log(listClass)
        }

        console.log(checkedTasks)
        console.log(taskList)
    }

    const deleteTask = (task) => {
        setTaskList(taskList.filter((t) => t !== task))
        console.log(task)
    }
    return(
        <div className="task-list">
        <ul className="div-ul">
            {taskList.map((task, i) => {
                return (
                    <li key={i} className={listClass}> <input type="checkbox" checked = {checkedTasks.includes(task)} onChange={() => handleCheck(task)}/> {task.name} <button type="button" onClick={() => deleteTask(task)}>-</button></li>
                )
            })}
            </ul>
        </div>
    )
}

export default ListTasks;