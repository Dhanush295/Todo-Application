<<<<<<< HEAD
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function CreateTodo(){
=======
function createTodo(){




>>>>>>> master

    return <div>
    <center>
        <Card variant="outlined" style={{width:500, padding:5, margin:150, backgroundColor:"#f6f5f7"}}><br/>
        <Typography style={{fontSize: 25, padding:10, fontFamily:"Copperplate"}}>
            Create Todo
        </Typography>
        <TextField id="outlined-basic" label="Title" variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="Description" variant="outlined" /><br/><br/>
        <Button variant="contained">Create</Button><br/><br/>
        </Card>
    </center>
</div>

}

<<<<<<< HEAD
export default CreateTodo;
=======

export default createTodo;
>>>>>>> master
