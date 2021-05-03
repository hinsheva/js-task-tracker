import { useState } from 'react';

const AddTask = ({onAdd}) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!name){
            alert('Please add task name...')
            return;
        }
        onAdd({name, date, reminder});
        setName('');
        setDate('');
        setReminder(false);
    }

    return (
        <form className='form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Add new task</label>
                <input className='input' placeholder="Add new task..." value={name} onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input className='input' type="text" placeholder="Add Day & Time" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            </div>
             <div className="form-control-checkbox">
                <label className='form-control-checkbox label'>Set reminder</label>
                <input className='form-control-checkbox input' type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
             </div>
             <input className='button submit' type="submit" value="Save"></input>
        </form>
    )
}

export default AddTask;