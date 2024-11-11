import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Link,
} from "@mui/material";
import Password from "../inputField/password";
import { display, styled } from "@mui/system";
import AtomicSignalsLogoWithName from "../../assets/atomicSignalsLogoWithName";
import TextInput from "../inputField/inputField";
import ButtonComponent from "../button/button";
import BackgroundImage from "../../assets/backgroundImage";
import { NavLink } from "react-router-dom";

const BackgroundContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#EFEEFB",
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const LoginBox = styled(Box)({
  padding: "2rem",
  maxWidth: "400px",
  width: "100%",
  textAlign: "center",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
});

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <BackgroundContainer>
      <Box sx={{ position: "absolute", height: "100", zIndex: 0 }}>
        <BackgroundImage />
      </Box>
      <LoginBox>
        <Box>
          <Box display="flex" flexDirection="column" alignItems="left">
            <AtomicSignalsLogoWithName />
          </Box>

          <Typography
            variant="h5"
            fontWeight="bold"
            marginY={1}
            sx={{
              textAlign: "left",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              fontFamily: "Poppins, sans-serif", // Ensure Poppins is imported or available
              letterSpacing: "0px",
              color: "#0E1824",
              opacity: 1,
            }}
          >
            Welcome!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              textAlign: "left",
              fontWeight: "normal",
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "0px",
              color: "#71707E",
              opacity: 1,
              marginBottom: "20px",
            }}
          >
            One positive feedback per day or week can make us grow exponentially
          </Typography>

          <Typography
            sx={{ display: "flex", alignItems: "left", fontSize: "12px" }}
          >
            Email
          </Typography>
          <TextInput breadth={348}></TextInput>
          <Box textAlign="left">
            <Typography
              sx={{
                fontSize: "12px",
                color: "#484759",
                mb: 0.5,
                marginTop: "16px",
              }}
            >
              Password
            </Typography>
            <Password breadth={348} />
          </Box>

          <NavLink to="/forgot">
          <Link
            href=""
            variant="body2"
            color="#353448"
            marginY={1}
            sx={{ justifyContent: "right", display: "flex", marginTop: "16px" }}
          >
            Forgot Password?
          </Link>
          </NavLink>

          <ButtonComponent breadth={348} text={"Log in"}></ButtonComponent>
        </Box>
      </LoginBox>
    </BackgroundContainer>
  );
}

export default LoginPage;
