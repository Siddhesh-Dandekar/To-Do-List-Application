import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
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
        }
    }

    return (
        <>
            <div className="bg-white w-full md:w-fit p-4 rounded-md border-black border-2 flex justify-between">
                <input type="text" placeholder="Add New Task" className="md:w-96 border-black border-2 p-2 text-xl h-9" onChange={(e) => setTask(e.target.value)} />
                <button className="bg-blue-600 text-white anton-sc-regular px-3 text-3xl h-9 mx-5" onClick={handleclick} >ADD TASK</button>
            </div>
            <br />
            {tasks.map((item) => <ToDoItem key={item.id} list={item} />)}
        </>
    )
}

export default ToDoList;