import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';

function ToDoItem(props) {
    const [edit, setEdit] = useState(false);
    const [editname, setEditName] = useState('')
    const [completed, setCompleted] = useState(props.list.status)

    // function deleteElement(data){

    //    const arr = [props.list];
    //    console.log(arr.filter(x => x.id == data));
    // }
    function editkey(e){
        if(e.keyCode == 13){
            editElement();
        }
    }
    function editElement() {
        if (editname) {
            props.list.taskname = editname;
        }
        setEdit(false);
    }

    return (
        <div id={props.list.id} className="bg-white border-2 my-1 border-lime-600 rounded-md flex items-center p-2 justify-between w-full">
            <div className='flex items-center w-4/5'>
                {completed ? <FontAwesomeIcon className='text-3xl mr-2' icon={faCheckCircle} /> : <FontAwesomeIcon className='text-3xl mr-2 cursor-pointer' icon={faCircle} onClick={() => setCompleted(true)} />}
                <p className="text-xl sm:text-2xl text-black font-serif mx-2 sm:w-5/6 w-3/5 break-words">{completed ? <del>{props.list.taskname}</del> : edit ? <input type="text" className='border-2 border-black w-full' defaultValue={props.list.taskname} onKeyDown={e => editkey(e)} onChange={(e) => setEditName(e.target.value)} /> : props.list.taskname}</p>
            </div>


            <div className='flex items-center w-1/5 justify-end'>
                {completed ? '' : edit ? <FontAwesomeIcon icon={faPenToSquare} className='text-3xl mr-4 cursor-pointer' onClick={editElement} /> : <FontAwesomeIcon icon={faPenToSquare} className='text-3xl mr-4 cursor-pointer' onClick={() => setEdit(true)} />}
                <FontAwesomeIcon icon={faTrashCan} className='text-3xl mr-2 cursor-pointer' onClick={() => props.deleteTask(props.list.id)} />
            </div>

        </div>
    )
}

export default ToDoItem;