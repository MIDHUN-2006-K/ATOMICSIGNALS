// src/components/signupPage/signupPage.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AtomicSignalsLogoWithName from "../../assets/atomicSignalsLogoWithName";
import GoogleIcon from "../../assets/googleIcon";
import OutlookIcon from "../../assets/outlookIcon";
import TextInput from "../inputField/inputField";
import BackgroundImage from "../../assets/backgroundImage";
import ButtonComponent from "../button/button";
import { NavLink } from "react-router-dom";

const SignupPage = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        backgroundColor: "#EFEEFB",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", height: "100", zIndex: 0 }}>
        <BackgroundImage />
      </Box>

      <Box
        width="100vh"
        maxWidth="400px"
        padding="24px"
        borderRadius="12px"
        bgcolor="#FFFFFF"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        sx={{ position: "relative", zIndex: 1, height: "524px" }}
      >
        {/* Logo */}
        <Box display="flex" justifyContent="left" marginBottom={2}>
          <AtomicSignalsLogoWithName />
        </Box>

        {/* Title and Description */}
        <Typography
          variant="h5"
          align="left"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#353448",
            marginBottom: 1,
          }}
        >
          Sign up
        </Typography>
        <Typography
          variant="body2"
          color="#71707E"
          align="left"
          marginBottom={3}
        >
          You're just a few details away from setting up a culture of feedback
          and a thriving environment.
        </Typography>

        {/* Sign Up with Google */}
        <Button
          variant="outlined"
          startIcon={<GoogleIcon style={{ marginRight: "8px" }} />}
          fullWidth
          sx={{
            textTransform: "none",
            marginBottom: 1.5,
            color: "#353448",
            borderColor: "#E0E0E0",
            backgroundColor: "#FFFFFF",
            "&:hover": { backgroundColor: "#F7F7F7" },
            justifyContent: "flex-start",
            gap: "60px",
          }}
        >
          <Typography sx={{ color: "#353448", fontWeight: "medium" }}>
            Sign up with Google
          </Typography>
        </Button>

        {/* Sign Up with Outlook */}
        <Button
          variant="outlined"
          startIcon={<OutlookIcon style={{ marginRight: "8px" }} />}
          fullWidth
          sx={{
            textTransform: "none",
            marginBottom: 3,
            color: "#49C792",
            borderColor: "#E0E0E0",
            backgroundColor: "#FFFFFF",
            "&:hover": { backgroundColor: "#F7F7F7" },
            justifyContent: "flex-start",
            gap: "60px",
          }}
        >
          <Typography sx={{ color: "#353448", fontWeight: "medium" }}>
            Sign up with Outlook
          </Typography>
        </Button>

        {/* Divider with "or" text */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              width: "130px",
              height: "0px",
              border: "1px solid #EBEBEB",
              marginLeft: "35.75px",
            }}
          ></Box>
          <Typography sx={{ textAlign: "center" }}>or</Typography>
          <Box
            sx={{
              width: "130px",
              height: "0px",
              border: "1px solid #EBEBEB",
              marginRight: "35.75px",
            }}
          ></Box>
        </Box>

        {/* Email Input Field */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ fontSize: "12px", color: "#484759" }}>
              Work Email
            </Typography>
            <Typography sx={{ color: "red", fontSize: "12px" }}>*</Typography>
          </Box>
          <TextInput breadth={352} />
        </Box>

        {/* Sign Up Button */}
        <NavLink to="/signup">
          <ButtonComponent text={"Sign up"} breadth={352}></ButtonComponent>
        </NavLink>

        {/* Login Link */}
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          marginTop={4}
        >
          Already have an account?{" "}
          <NavLink to="/login">
          <Typography
            component="span"
            fontWeight="medium"
            sx={{ textDecoration: "underline", cursor: "pointer",color:"#353448" }}
          >
            Log in
          </Typography>
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupPage;
