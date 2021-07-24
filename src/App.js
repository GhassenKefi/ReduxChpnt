import './App.css';
import Addtask from './Components/Addtask';
import {ListTask} from './Components/ListTask';
import {useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import Filter from './Components/Filter';

function App() {

  const [taskList,setTaskList]= useState([])
  const [filter,setFilter]=useState()
  const [filterused,setfilterused]=useState(false)

  var tasks = useSelector(state => state.task) 

  const handlefilterApp = (val) =>{
    setFilter(val);
    setfilterused(true);
  }

  const handlelistchange=(x)=>{
    setTaskList(x)
  }

  useEffect(() => {
    if(filter==="All"){
      handlelistchange(tasks)
    }
    else 
      if(filter==="Done"){
        let list=tasks.filter(e=>e.isDone)
        handlelistchange(list)
      }
      else{
        let list= tasks.filter(e=>!e.isDone)
        handlelistchange(list)
      }
  },[filter,tasks]);

  return (
    <div className="App">
      <div className="content">
      <Addtask/>
      <Filter handleFilter={handlefilterApp}/>
      <ListTask tasks={filterused?taskList:tasks}/>
      </div>
    </div>
  );
}

export default App;
