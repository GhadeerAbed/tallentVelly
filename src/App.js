import "./App.css";
import React from 'react';
import {Routes,Route} from  'react-router-dom'
import Loginpage from './pages/loginPages/Loginpage'
import Signuppage from './pages/loginPages/Signuppage'
import Home from './pages/Home.js'
import ForgetPassPage  from './pages/loginPages/ForgetPassPage.js'
import {Container}  from "./styled/Container";
import Emailpage from "./pages/loginPages/Emailpage";
import Resetpage from './pages/loginPages/Resetpage'
import RePassPage from './pages/loginPages/RePassPage'
import ProfilePage from "./pages/loginPages/ProfilePage";
import VerficationPage  from './pages/VerificationPages/VerficationPage'
import EmailVerifiPage from "./pages/VerificationPages/EmailVerifiPage";
import PhoneVerificPage from './pages/VerificationPages/PhoneVerificPage'
import IDVerifiPage from './pages/VerificationPages/IDVerifiPage'
import AddressVerifiPage from './pages/VerificationPages/AddressVerifiPage'
import EmailCheckPage  from './pages/VerificationPages/EmailCheckPage'
import PhoneCheckPage from './pages/VerificationPages/PhoneCheckPage'
function App() {


  return (
    <div>
      <Container>
         <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route path='/signup' element={<Signuppage/>} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path ="/ForgetPasswoed"  element={<ForgetPassPage />} />
            <Route path ="/Emailpage"  element={<Emailpage />} />
            <Route path ='/RePassPage'  element={<RePassPage/> }/>
            <Route path ='/Resetpage'  element={<Resetpage/> }/>
            <Route path ='/Resetpage'  element={<Resetpage/> }/>
            <Route path ='/Verfication'  element={<VerficationPage/> }/>
            <Route path ='/EmailVerifypage'  element={<EmailVerifiPage/> }/>
            <Route path ='/EmailCheckpage'  element={<EmailCheckPage/> }/>
            <Route path ='/PhoneVerifiypage'  element={<PhoneVerificPage/> }/>
            <Route path ='/PhoneCheckpage'  element={<PhoneCheckPage/>}/>
            <Route path ='/IDVerifiPage'  element={<IDVerifiPage/> }/>
            <Route path ='/AddressVerifiPage'  element={<AddressVerifiPage/> }/>
        </Routes> 

  </Container>
      
    </div>
  );
}

export default App;
