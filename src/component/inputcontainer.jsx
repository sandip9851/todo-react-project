import React from "react";

function inputcontainer({taskHandel,dateHandel,assembelData}) {
  return (
    <div  className ="container text-center m-2">
    <div className ="row">
      <div className ="col">
        <input
          className ="bg-white"
          type="text"
          placeholder="Enter Your Todo"
          id="task"
          onChange={(e)=>{taskHandel(e)}}
        ></input>
      </div>
      <div className ="col">
        <input type="date" onChange={(e)=>{dateHandel(e)}}></input>
      </div>
      <div className ="col">
        <button className ="btn btn-success" onClick={assembelData}>Add</button>
      </div>
    </div>
  </div>
  );
}

export default inputcontainer;
