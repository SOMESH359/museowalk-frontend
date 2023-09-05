import React ,{useState} from "react";
import { useData } from "../contextFolder/dataContext";
import { Button, TextField } from "@mui/material";
import CustomSnackbar from "../uicomponents/snackbar";
import { useNavigate } from "react-router-dom";
import Password from "../uicomponents/password";
export default function Signin(){
    const {setUser}=useData()
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    function validateEmail(email)
    {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    const handlePassword = (newPassword) => {
        setPassword(newPassword);
      };
      const handleSnackbarClose = () => {
        setOpenSnackbar(false);
       
      };
      function handleSignup(){
        navigate('/newusersignup')
      }
      function handleForgot()
      {
        navigate('/forgotpassword')
      }
      function handleLogin()
      {
        if(email.length!==0& password.length>=8){
          if(validateEmail(email))
          {
           setUser(email)
           navigate('/explore')
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
    
    
    return(
        <div className="row loginScreen-container">
        <div className="loginCard-container">
        <div>
        <h1 style={{fontFamily:` Georgia, 'Times New Roman', Times, serif`}}>LOGIN PAGE</h1>
        </div>
        <div className="card">
            <div className="card-body">
            <TextField id="standard-basic" label="Email"  variant="standard" color="secondary" onChange={(e)=>{setEmail(e.target.value)}}/>
            <Password onPasswordChange={handlePassword} idValue="pass1"/>
            <Button variant="contained" color="success"onClick={handleLogin}>LOGIN</Button>
            <Button variant="text" color="secondary" onClick={handleForgot}>Forgot Password</Button>
            <div className="new-user">
              <h6 style={{textAlign:'center'}}>Are you new User?</h6>
              <Button variant="text"  onClick={handleSignup}>Click here</Button>
              
            </div>
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