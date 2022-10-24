import "./App.css";
import React  from 'react';
import {Routes,Route} from  'react-router-dom'
import Loginpage from './pages/Loginpage.js'
import Signuppage from './pages/Signuppage'
import Home from './pages/Home.js'
import ForgetPassPage  from './pages/ForgetPassPage.js'
import  {Container,Container1}  from "./styled/Container";
import Emailpage from "./pages/Emailpage";
import Resetpage from './pages/Resetpage'
import RePassPage from './pages/RePassPage'
function App() {
  // const [token, setToken] = useState();
  // if(!token){
  //   <Loginpage setToken={setToken}></Loginpage>
  // }
  // function requireAuth(nextState, replace, next) {
  //   if (!authenticated) {
  //     replace({
  //       pathname: "/login",
  //       state: {nextPathname: nextState.location.pathname}
  //     });
  //   }
  //   next();
  // }
  //onEnter={requireAuth}
  return (
    <div>
      <Container>
    <Container1>
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/signup" element={<Signuppage/>} />
            <Route path ="/home"  element={<Home/>}  />
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
