import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'
const HomeDesktop= () => {
  const [value, setValue] = useState(0);
  const navigate=useNavigate()
  const theme = useTheme();
  
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
 console.log(isMatch)
function handleClick(tab)
{
    navigate(`/${tab}`)
}
  return (
    <React.Fragment >
      <AppBar sx={{ background: "transparent" }} >
        <Toolbar>
      
       <img src="https://img.freepik.com/free-photo/majestic-architecture-illuminated-dusk-history-generated-by-ai_188544-38546.jpg?t=st=1693811506~exp=1693815106~hmac=5603e041eee7a328f546bf1eb1146e93c9f7dd7c347cbef98e77f73805c5a897&w=1060"
        alt="sample" className="circular-image" width={60} height={60}/>
      
          <h1 style={{fontFamily:`Georgia, 'Times New Roman', Times, serif`,color:'white'}}>&nbsp;&nbsp;MuseoWalk</h1>
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="HOME" onClick={()=>handleClick("")} />
                <Tab label="ABOUT" onClick={()=>handleClick('about')}/>
                <Tab label="EXPLORE" onClick={()=>handleClick("explore")} />
                <Tab label="LOGIN" onClick={()=>handleClick('signin')}/>
              </Tabs>
              
            </>
         
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HomeDesktop;