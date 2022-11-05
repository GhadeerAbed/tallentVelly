import "./App.css";
import React from 'react';
import {Routes,Route} from  'react-router-dom'
import Loginpage from './pages/loginPages/Loginpage'
import Signuppage from './pages/loginPages/Signuppage'
import Home from './pages/Home.js'
import ForgetPassPage  from './pages/loginPages/ForgetPassPage.js'
import {Container,Container1}  from "./styled/Container";
import Emailpage from "./pages/loginPages/Emailpage";
import Resetpage from './pages/loginPages/Resetpage'
import RePassPage from './pages/loginPages/RePassPage'
import ProfilePage from "./pages/loginPages/ProfilePage";


function App() {
  // const token = localStorage.getItem("token");
  // if (token) {
  //     setAuthToken(token);
  // }

  return (
    <div>
      <Container>
    <Container1>
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route path='/signup' element={<Signuppage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path ="/ForgetPasswoed"  element={<ForgetPassPage />} />
            <Route path ="/Emailpage"  element={<Emailpage />} />
            <Route path ='/RePassPage'  element={<RePassPage/> }/>
            <Route path ='/Resetpage'  element={<Resetpage/> }/>
        </Routes>

    </Container1>         
  </Container>
      
    </div>
  );
}

export default App;
