import React from "react";
import { useData } from "../contextFolder/dataContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function ChildCarousel()
{
    const {imageUrl,mname,mdesc,useremail}=useData();
    const navigate=useNavigate()
    function handleBook()
    {
       alert('BOOKED SUCCESSFULLY!!!')
    }
    function handleClick()
    {
        navigate('/signin')
    }
    return(
        <div className="childExplore">
           
            <h1 style={{textAlign:'center', fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>{mname}</h1>
            
            <div className="about2">
            <div className="abtpic1">
            <img src={imageUrl} alt={mname} width={400} height={325} />
            </div>
            <div className="aboutpara1">
            <h5><i>
            {mdesc}
            </i>
            </h5>
            <div className="booklogbtn">
                <Button variant="contained" disabled={useremail === ''} onClick={handleBook} color="success">BOOK</Button>
                <Button variant="contained" disabled={useremail !== ''} onClick={handleClick} color="info">LOGIN</Button>
            </div>
            </div>
            </div> 
        </div>
    )
}