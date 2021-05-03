import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>onToggle(task.id)}>
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