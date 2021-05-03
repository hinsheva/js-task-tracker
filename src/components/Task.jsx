const Task = ({task}) => {
    return (
        <div className='task'>
            <div className='task-title' key={task.id}>{task.name}</div>
            <div className='task-date'>{task.date}</div>
            <div className='task.reminder'>{task.reminder}</div>
        </div>
    )
}

export default Task;