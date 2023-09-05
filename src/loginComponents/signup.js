import React,{useState} from "react";
import Password from "../uicomponents/password";
import CustomSnackbar from "../uicomponents/snackbar";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const [user,setUser]=useState('')
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const handlePassword = (newPassword) => {
        setPassword(newPassword);
      };
      
      const handleSnackbarClose = () => {
        setOpenSnackbar(false);
       
      };
      function handleSignup(){
       if(user.length!==0 )
       {
        if(email.length!==0& password.length>=8){
            if(validateEmail(email))
            {
             
              navigate('/')
            }
            else{
              setSnackbarMessage('Provide Valid Email Id!');
              setSnackbarSeverity('warning');
              setOpenSnackbar(true);
            }
          }
          else{
            setSnackbarMessage('Please provide proper credentials!');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
          }
       }
       
       else{
        setSnackbarMessage('Please provide required data!');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
       }
      }
     
     
      function validateEmail(email)
      {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    
    return(
        <div className="row loginScreen-container">
        <div className="loginCard-container">
        <div>
        <h1 style={{fontFamily:` Georgia, 'Times New Roman', Times, serif`}}>USER REGISTRATION</h1>
        </div>
        <div className="card">
            <div className="card-body">
            <TextField id="standard-basic1" label="User Name"  variant="standard" color="secondary" onChange={(e)=>{setUser(e.target.value)}}/>
            <TextField id="standard-basic" label="Email"  variant="standard" color="secondary" onChange={(e)=>{setEmail(e.target.value)}}/>
            <Password onPasswordChange={handlePassword}idVal="password2"/>
            <Button variant="contained" color="success"onClick={handleSignup}>SIGN UP</Button>
           
            
            </div>
        </div>
        <CustomSnackbar
                            open={openSnackbar}
                            message={snackbarMessage}
                            severity={snackbarSeverity}
                            onClose={handleSnackbarClose}   
                           
                         />
            
        </div>
    </div>

    )
}