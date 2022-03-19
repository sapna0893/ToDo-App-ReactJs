
import React from "react";
import './App.css';

const ToDoTask = (props) => {


    return (<div className="toDo_style">
        <button className="deletebuttonstyle" onClick={() => props.onSelect(props.id)}>X</button>
        <li> {props.text} </li><br />
    </div>);
}

export default ToDoTask;