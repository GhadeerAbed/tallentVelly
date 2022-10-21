import "./App.css";
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
  return (
    <div>
      <Container>
    <Container1>
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/signup" element={<Signuppage/>} />
            <Route path ="/home"  element={<Home/>} />
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
