import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function Navbar(){

    return <div style={{display:"flex", margin: 5,justifyContent:"space-between" }}>
        <div style={{margin:5}}>
            <Typography>ToDo App</Typography>
        </div>

        <div style={{display:"flex"}}>
            <div style={{display: "flex", marginRight:10}}>
                <Button variant="contained">CreateTodo</Button>
            </div>
            <div style={{display: "flex", marginRight:10}}>
                <Button variant="contained">SignUp</Button>
            </div>
            <div style={{marginRight:10}}>
                <Button variant="contained">Login</Button>
            </div>
        </div>
       
        

        </div>

}

export default Navbar;