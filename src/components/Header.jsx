import Button from '../components/Button';

const Header = ({title}) => {
    return (
        <header className='header'> 
        <h1>{title} </h1>
        <Button text="Add" color=""/>
        </header>
    )
}

export default Header;