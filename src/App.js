import React from 'react';
import { useState } from 'react';
import './App.css'
import ToDoTask from './ToDoTask';


function App() {
  //for taking input from the user 
  const [inputTask, setInputTask] = useState("");
  //for storing and displaying the input in the array
  const [arrayOfTask, setArrayOfTask] = useState([]);




  const displayTask = (event) => {


    setInputTask(event.target.value);


  };

  const displayArrayOfTasks = (event) => {

    const input = inputTask;
    event.preventDefault();
    if (input === "") {    //Validate Input
      alert("The task cannot be blank. Enter a valid task");
    }
    else {
      setArrayOfTask((oldTasks) => { return [...oldTasks, inputTask] });//merging old input with the new input
      // to empty the input field 
      setInputTask("");

    }
  };

  const deleteTask = (id) => {
    console.log("deleted");
    setArrayOfTask((oldTasks) => {
      return oldTasks.filter((arrayval, arrayindex) => {
        return arrayindex !== id;
      })
    })
  }


  return (
    <>
      <div className='main-div'>
        <div className='center-div'>
          <br />
          <h1>ToDo App</h1>
          <br />
          <form>
            <input type="text" placeholder="Enter a Task" value={inputTask} onChange={displayTask} />
            &nbsp; &nbsp;
            <button onClick={displayArrayOfTasks}>+</button>
          </form>
          <ol>

            {
              arrayOfTask.map((arrayval, arrayindex) => {
                return <ToDoTask text={arrayval} key={arrayindex} id={arrayindex} onSelect={deleteTask}
                />
              })
            }

          </ol>

        </div>

      </div>
    </>
  )
}

export default App;