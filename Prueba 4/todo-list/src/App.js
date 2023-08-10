import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/form';
import ListTasks from './Components/listTasks';
function App() {

  const [taskList, setTaskList] = useState([])

  return (
    <div className="App-header">
    <Form taskList={taskList} setTaskList={setTaskList}/>
    <ListTasks taskList={taskList} setTaskList={setTaskList}
    />
    </div>
  );
}

export default App;
