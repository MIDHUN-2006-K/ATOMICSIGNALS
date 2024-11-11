import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import SignupPage from "./components/signupPage/signupPage";
import SignUpDetails from "./components/signupDetails/signupDetails"; // Ensure the path is correct
import SetUpPage from "./components/setupPage/setupPage";
import LoginPage from "./components/welcomPage/welcomePage";
import ForgotPassword from "./components/forgetPassword/forgetPassword";
import ResetPassword from "./components/forgetPassword/resetPassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/signup" element={<SignUpDetails />} />
        <Route path="/setup" element={<SetUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword/>}/>
      </Routes>
    </Router>
    
  );
};

export default App;
