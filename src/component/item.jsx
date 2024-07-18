import React from 'react'
import Todoitem from './todoitem'



function item({todoList, deleteTodo}) {

  function handelDl (e){
    console.log("click")
    console.log(e)
  
  }
  
  return (
    <>
    {todoList.map((item,index)=>{
      return <Todoitem work = {item.work} date = {item.date} deleteTodo = {()=>deleteTodo(index)} />
    })}
    </>
  )
}

export default item