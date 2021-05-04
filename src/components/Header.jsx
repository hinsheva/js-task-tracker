import Button from '../components/Button';
import {useLocation} from 'react-router-dom';

const Header = ({ title, onAddButtonClick, showAddTaskSection }) => {
    const locationHome = useLocation().pathname;
    return (
        <header className='header'> 
            <h1>{title} </h1>
            { locationHome==='/' && <Button text={showAddTaskSection ? "Close" : "Add"} color={showAddTaskSection ? "rgb(0, 0, 0, 0.6)" : ""} onClick={onAddButtonClick}/>}
        </header>
    )
}

export default Header;