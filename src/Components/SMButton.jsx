import Button from '@mui/material/Button';
// import CircularProgress from '@mui/material/CircularProgress';


const SMbuttons = ({label, id, type, className}) => {

    return (
        // <button>A button</button>
        type ? 
        <Button id={id} type={type} className={className}
            variant="outlined">{label}</Button> : <Button className={className} id={id}
            variant="outlined">{label}</Button>  
    )
}


export default SMbuttons