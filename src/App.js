import "./App.css";
import {Routes,Route} from  'react-router-dom'
import Loginpage from './pages/Loginpage.js'
import Signuppage from './pages/Signuppage'
function App() {
  return (
    <div>
      <div className="min-h-full h-screen flex  justify-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-100 Segoe UI">
    <div className="max-w-xl w-full space-y-8 bg-white rounded-2xl">
        <Routes>
            <Route path="/" element={<Loginpage/>} />
            <Route path="/signup" element={<Signuppage/>} />
        </Routes>
    </div>
  </div>
      
    </div>
  );
}

export default App;
