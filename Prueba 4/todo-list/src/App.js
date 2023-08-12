import logo from './logo.svg';
import { useState } from 'react';
import Form from './Components/form';
import ListTasks from './Components/listTasks';
import "./styles/main.css"
function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <div className="container">

      <Form taskList={taskList} setTaskList={setTaskList} />
      <ListTasks taskList={taskList} setTaskList={setTaskList}
      />
      
    </div>
  );
}

export default App;
