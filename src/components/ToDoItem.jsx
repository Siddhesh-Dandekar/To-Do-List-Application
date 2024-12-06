import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPenToSquare , faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';

function ToDoItem(props) {
    // function deleteElement(e){
    //     let item = e.target;
    //     let parent = item.parentElement.parentElement.parentElement;
    //     parent.remove(parent)
    // }
    const [edit, setEdit] = useState(false);
    const [editname , setEditName] = useState('')

    const [completed, setCompleted] = useState(props.list.status)

    function deleteElement(data){
        
       const arr = [props.list];
       console.log(arr.filter(x => x.id == data));
    }

    function editElement(){
        if(editname){
            props.list.taskname = editname;
        }
        setEdit(false);
    }

    return (
        <div id={props.list.id} className="bg-white border-2 my-1 border-lime-600 rounded-md flex items-center p-2 justify-between">
            <div className='flex items-center'>
                {completed ? <FontAwesomeIcon className='text-3xl mr-2'  icon={faCheckCircle} /> :  <FontAwesomeIcon className='text-3xl mr-2 cursor-pointer' icon={faCircle} onClick={() => setCompleted(true)}/>}
                <h3 className="text-2xl text-black font-serif mx-2">{completed ? <del>{props.list.taskname}</del> : edit ? <input type="text" className='border-2 border-black' defaultValue={props.list.taskname} onChange={(e) => setEditName(e.target.value)} /> : props.list.taskname }</h3>
            </div>

            
            <div className='flex items-center'>
            {completed ? '' : edit ? <FontAwesomeIcon icon={faPenToSquare} className='text-3xl mr-4 cursor-pointer' onClick={editElement}/> : <FontAwesomeIcon icon={faPenToSquare} className='text-3xl mr-4 cursor-pointer' onClick={() => setEdit(true)}/> }
                <FontAwesomeIcon icon={faTrashCan} className='text-3xl mr-2 cursor-pointer'  onClick={() => deleteElement(props.list.id) } />
            </div>

        </div>
    )
}

export default ToDoItem;