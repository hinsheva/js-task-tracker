
import Task from '../components/Task';

const Tasks = ({tasks, onDelete}) => {
    return (
      <>
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete}/>
        ))}
      </>
    )
}

export default Tasks;