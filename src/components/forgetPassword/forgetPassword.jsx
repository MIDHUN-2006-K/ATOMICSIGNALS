import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import AtomicSignalsLogoWithName from "../../assets/atomicSignalsLogoWithName";
import TextInput from "../inputField/inputField";
import ButtonComponent from "../button/button";
import { NavLink } from "react-router-dom";
import BackgroundImage from "../../assets/backgroundImage";
const ForgotPassword = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "#EFEEFB",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box sx={{ position: "absolute", height: "100", zIndex: 0 }}>
        <BackgroundImage />
      </Box>
      <Box
        sx={{
          width: 400,
          bgcolor: "white",
          padding: 4,
          borderRadius: 3,
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <AtomicSignalsLogoWithName />
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{
            textAlign: "left",
            font: "normal normal 600 20px/30px Poppins",
            letterSpacing: "0px",
            color: "#0E1824",
            opacity: 1,
            marginTop: "26px",
          }}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          mt={1}
          mb={3}
          sx={{ textAlign: "left" }}
        >
          Provide us the registered email to reset your password.
        </Typography>

        <Box mb={3}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "left", mb: 1 }}
          >
            Email
          </Typography>
          <TextInput breadth={340} />
          <NavLink to="/reset" >
          <ButtonComponent breadth={340} text={"Get Link"} />
          </NavLink>
        </Box>

        <Box display="flex" justifyContent="center" mt={3}>
          <Typography variant="body2" color="text.secondary">
            Remembered the password?{" "}
          </Typography>
          <NavLink to="/login">
            <Typography
              sx={{
                textAlign: "left",
                textDecoration: "underline",
                font: "normal normal 600 14px/21px Poppins",
                letterSpacing: "0px",
                color: "#353448",
                opacity: 1,
              }}
            >
              Log in
            </Typography>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
