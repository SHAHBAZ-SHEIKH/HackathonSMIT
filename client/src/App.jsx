import Signup from "./pages/signup/Signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/login/Login";
import ForgetPassword from "./pages/forgetPassword/ForgetPassword";
import ForgotPasswordSentPage from "./pages/verifyEmail/VerifyEmail";
import OTPverification from "./pages/otpVerification/OTPverification";
import  "./index.css";


function App() {
  

  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route path="/" element={<Signup  /> } />
        <Route path="/login" element={<Login />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/verify-email' element={<ForgotPasswordSentPage />} />
        <Route path="/otp-verification" element={<OTPverification />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
