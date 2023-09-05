import React,{useState} from "react";
import Avatar from '@mui/material/Avatar';
import {Chip, TextField,Button} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import CustomSnackbar from "./snackbar";
import { useData } from "../contextFolder/dataContext";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export default function CustomChip()
{
 const [username,setUser]=useState('')
  const [password,setPassword]=useState("");
  const {useremail}=useData();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      function handleSubmit()
      {
       if( username.length!==0 && password.length >=8 ) 
       {
        handleClose();
        setSnackbarMessage('Changes Updated Successfully!!!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true)
           
       }
       else{
       handleClose();
        setSnackbarMessage('Please fill entire form!!!');
        setSnackbarSeverity('error');
        setOpenSnackbar(true)
       }
      }
      const handleSnackbarClose = () => {
        setOpenSnackbar(false);
      };
    
      const [open, setOpen] = React.useState(false);

      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
       setPassword('');
       setUser('');
      };
    
      
    return(
        <div>
    <Chip
                avatar={<Avatar alt="chef" src="https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&ga=GA1.2.2047273959.1682233859&semt=ais"  sx={{ width: 56, height: 56 }}/>}
                label={useremail}
                variant="contained"
                color="error"
                onClick={handleOpenUserMenu}     
                />
                <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem key="Edit" onClick={handleClickOpen} >
                  <Typography textAlign="center">Edit</Typography>
                </MenuItem>
                <MenuItem key="Close" onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Close</Typography>
                </MenuItem>
            </Menu>
           
            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>EDIT USER PROFILE</DialogTitle>
        <DialogContent>
        <TextField id="standard-basic" label="User Name"  variant="standard" color="secondary" onChange={(e)=>{setUser(e.target.value)}}/><br/>
        <TextField id="standard-basic1" label="Password" variant="standard" color="secondary" onChange={(e)=>{setPassword(e.target.value)}}/>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleSubmit}>Edit User Profile</Button>
        </DialogActions>
      </Dialog>
            <CustomSnackbar
                            open={openSnackbar}
                            message={snackbarMessage}
                            severity={snackbarSeverity}
                            onClose={handleSnackbarClose}   
                           
            />
    </div>
)
}