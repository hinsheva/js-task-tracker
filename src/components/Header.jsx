import Button from '../components/Button';

const Header = ({ title, onAddButtonClick, showAddTaskSection }) => {
    console.log(showAddTaskSection)
    return (
        <header className='header'> 
        <h1>{title} </h1>
        <Button text={showAddTaskSection ? "Close" : "Add"} color={showAddTaskSection ? "rgb(0, 0, 0, 0.6)" : ""} onClick={onAddButtonClick}/>
        </header>
    )
}

export default Header;