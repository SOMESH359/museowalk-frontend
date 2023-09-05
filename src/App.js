import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import HomeDesktop from './components/desktopHome';
import Mobilehome from './components/mobileHome';
import Explore from './components/explore';
import Museoinfo from './components/museoinfo';
import Signin from './loginComponents/signin'
import Signup from './loginComponents/signup'
import Forgotpassword from './loginComponents/forgotPassword';
import Resetpassword from './loginComponents/resetPassword';
import AboutContent from './childComponents/aboutContent';
import ChildCarousel from './childComponents/childCarousel';
import { DataProvider } from './contextFolder/dataContext';
function App() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Update the isDesktop state based on the screen size
  const updateScreenSize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
  };

  // Add an event listener to update the screen size on resize
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  return (
    <div className="App">
   <DataProvider>
   <Router>
    <div className='navbar'>
    {isDesktop?<HomeDesktop/>:<Mobilehome/>}
    </div>
    <div className='route-component'>
    <Routes>
      <Route exact path='/' element={<Museoinfo/>}/>
      <Route exact path='/about' element={<AboutContent/>}/>
      <Route exact path='/explore' element={<Explore/>}/>
      <Route exact path='/signin' element={<Signin/>} />
      <Route exact path='/newusersignup' element={<Signup/>}/>
      <Route exact path='/forgotpassword' element={<Forgotpassword/>}/>
      <Route exact path='/resetpassword' element={<Resetpassword/>}/>
      <Route exact path='/explore/museum' element={<ChildCarousel/>}/>
    </Routes>
    </div>
   </Router>
   </DataProvider>
    </div>
  );
}

export default App;
