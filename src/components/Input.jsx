const Input = () => {
    return (
        <form className='form'>
            <div className='form-control'>
                <label>Add new task</label>
                <input className='input' placeholder="Add new task..."></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input className='input' type="text" placeholder="Add Day & Time"></input>
            </div>
             <div className="form-control-checkbox">
                <label className='form-control-checkbox label'>Set reminder</label>
                <input className='form-control-checkbox input' type="checkbox"></input>
             </div>
        </form>
    )
}

export default Input;