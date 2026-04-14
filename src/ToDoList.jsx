import React, {useState} from 'react'

function ToDoList() {

      const [tasks, setTasks] = useState(["Pray to God", "Eat Biryani", "Sleep well"]);
      const [newTask, setNewTask] = useState("");

      function handleInputChange(event){
        setNewTask(event.target.value);
      }

      function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        
      }

      function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
      }

      function moveTaskUp(index){
        if(index >0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
      }

      function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
      }


    return( <>
            <h4>*4) Learnt Updated functions and built <b><i><u>TO-DO-LIST</u> in REACT</i></b>*</h4>
            <div className='to-do-list-parent'>
            <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input  type="text" 
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange} />
                <button 
                    className=' button1 add-button'
                    onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button
                            className=' button1 delete-button'
                            onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className=' button1 move-button'
                            onClick={() => moveTaskUp(index)}>
                            UP
                        </button>
                        <button
                            className=' button1 move-button'
                            onClick={() => moveTaskDown(index)}>
                            DOWN
                        </button>
                    </li>)}
                </ol>
            </div>
        </div>
        </>
    );
}

export default ToDoList;