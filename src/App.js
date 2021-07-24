import './App.css';
import Addtask from './Components/Addtask';
import {ListTask} from './Components/ListTask';
import {useState} from 'react'
import { useSelector } from 'react-redux'
import Filter from './Components/Filter';

function App() {

  const [taskList,setTaskList]= useState([])
  const [filterused,setfilterused]=useState(false)

  var tasks = useSelector(state => state.task) 

  const handlefilterApp = (val) =>{
    setTaskList(val)
    setfilterused(true);
  }

  return (
    <div className="App">
      <div className="content">
      <Addtask/>
      <Filter tasks={tasks} handleFilter={handlefilterApp}/>
      <ListTask tasks={filterused?taskList:tasks}/>
      </div>
    </div>
  );
}

export default App;
