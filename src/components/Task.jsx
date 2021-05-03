import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <div className='task-title' key={task.id}>{task.name}
                <FaTimes style={{color:'red', cursor: 'pointer'}} 
                onClick={()=>onDelete(task.id)}/>
            </div>
            <div className='task-date'>{task.date}</div>
            <div className='task.reminder'>{task.reminder}</div>
        </div>
    )
}

export default Task;