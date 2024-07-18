import logo from './logo.svg';
import './app.css';
import Heading from './component/heading';
import Inputcontainer from './component/inputcontainer';
import Item from './component/item';
import { useState } from 'react';



function App() {
  const[todoList,setTodoList] = useState([])

 

  const [work,setWork] = useState ("")
  const [date,setDate] = useState ("")


  function taskHandel(e){
    
   setWork(e.target.value)
   
   
   
  }

  function dateHandel(e){

    setDate(e.target.value)
  }

  function assembelData (){
    if(work !== "" && date !== ""){
      setTodoList([...todoList,{work : work, date : date}])
    }

    setWork("")
    setDate ("")
  
 

  }

  function deleteTodo(index) {
    const newTodoList = todoList.filter((_, i) => i !== index);
    setTodoList(newTodoList);
  }

  

  return (
    <center className ='todo-container'>
      <Heading/>
     

   <Inputcontainer taskHandel = {taskHandel} dateHandel = {dateHandel} assembelData = {assembelData} />

   
   <Item todoList = {todoList} deleteTodo = {deleteTodo}/>
  

  
 
    </center>
  );
}

export default App;
