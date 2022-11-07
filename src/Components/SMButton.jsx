import Button from '@mui/material/Button';
// import CircularProgress from '@mui/material/CircularProgress';


const SMbuttons = ({label, onClick, loading, disabled, id, type}) => {

    return (
        // <button>A button</button>
        type=="submit" ? 
        <Button id={id} type={type} disabled={disabled || loading}
            variant="outlined">{label}</Button>
        :
        <Button id={id} onClick={onClick} disabled={disabled || loading}
            variant="outlined">{label}</Button>
        
    )
}


export default SMbuttons