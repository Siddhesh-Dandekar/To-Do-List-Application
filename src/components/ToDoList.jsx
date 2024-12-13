import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [idgenerate, setIdgenerate] = useState(0);
    function handleclick() {
        if (task) {
            setIdgenerate(idgenerate + 1);
            setTasks([...tasks, {
                id: idgenerate,
                taskname: task,
                status: false
            }])
            setTask('')
        }
    }

    function checkkey(e){
        if(e.keyCode === 13){
            handleclick();
        }
    }

    function deleteTask(id){
        setTasks(tasks.filter(item => item.id !== id));
    }

    return (
        <>
            <div className="bg-white w-full p-2  md:w-fit sm:p-4 sm:flex-row flex-col gap-2 rounded-md border-black border-2 flex justify-between">
                <input type="text" placeholder="Add New Task" className="md:w-96 border-black border-2 p-2 text-xl h-9" value={task} onKeyDown={e => checkkey(e)} onChange={(e) => setTask(e.target.value)} />
                <button className="bg-blue-600 text-white anton-sc-regular px-3 text-2xl sm:text-3xl h-9 sm:mx-5" onClick={handleclick} >ADD TASK</button>
            </div>
            <br />
            {tasks.map((item) => <ToDoItem key={item.id} list={item} deleteTask={deleteTask} />)}
        </>
    )
}

export default ToDoList;