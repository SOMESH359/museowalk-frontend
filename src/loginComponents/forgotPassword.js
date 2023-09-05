import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../uicomponents/snackbar";
import { TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
export default function Forgotpassword(){
    const [email,setEmail]=useState('');
    const navigate=useNavigate()
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
       
      };
    function handleOtp()
    {
       if(email.length!==0)
       {
        if(validateEmail(email))
        {
            navigate('/resetpassword')
        }
        else
        {
            setSnackbarMessage('Provide Valid Email Id!');
            setSnackbarSeverity('warning');
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
         <h1 style={{fontFamily:` Georgia, 'Times New Roman', Times, serif`}}>FORGOT PASSWORD</h1>
         </div>
         <div className="card">
         <div className="card-body newBody">
         <TextField id="standard-basic" label="Email"  variant="standard" color="secondary" onChange={(e)=>{setEmail(e.target.value)}}/>
         <Button variant="contained" endIcon={<SendIcon />} onClick={handleOtp}>
                  Send OTP
          </Button>
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