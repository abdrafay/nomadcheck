import Button from '@mui/material/Button';
// import CircularProgress from '@mui/material/CircularProgress';


const SMbuttons = ({label, onClick, loading, disabled, id, type}) => {

    return (
        // <button>A button</button>
        type ? 
        <Button id={id} type={type}
            variant="outlined">{label}</Button> : <Button id={id}
            variant="outlined">{label}</Button>  
    )
}


export default SMbuttons