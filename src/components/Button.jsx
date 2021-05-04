const Button = ({text, color}) => {
    return(
        <button 
        type='button'
        className='button'
        style={{ backgroundColor: color }}
        >{text}</button>
    )
}

export default Button;