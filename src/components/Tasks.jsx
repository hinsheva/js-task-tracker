
import Task from '../components/Task';

const mockedTasks = [
  {
    id: 1,
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dictum dui laoreet, sollicitudin purus quis, faucibus massa. Pellentesque rutrum scelerisque ornare.',
    date: '01-01-01',
    reminder: false,
  },
  {
    id: 2,
    name: 'Nulla leo orci, luctus non odio et, tempus molestie leo. Duis molestie aliquam ex eget porttitor. Suspendisse potenti.',
    date: '01-01-01',
    reminder: true,
  },
  {
    id: 3,
    name: 'In vehicula viverra purus, vel rutrum nisl.',
    date: '01-01-01',
    reminder: true,
  },
]

const Tasks = () => {
    return (
      <>
        {mockedTasks.map((task) => (<Task task={task}/>))}
      </>
    )
}

export default Tasks;