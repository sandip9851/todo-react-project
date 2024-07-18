import React from "react";

function todoitem({work,date,deleteTodo}) {
  
  
  return (
    <div className="container text-center m-2">
      <div className="row">
        <div className="col todoDetails" >{work}</div>
        <div className="col todoDetails">{date}</div>
        <div className="col">
          <button className="btn btn-danger" onClick={deleteTodo}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default todoitem;
