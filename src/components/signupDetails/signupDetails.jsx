import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AtomicSignalsLogoWithName from "../../assets/atomicSignalsLogoWithName";
import FeedBackTool from "../../assets/feedBackTool";
import TextInput from "../inputField/inputField";
import Password from "../inputField/password";
import InfoIcon from "../../assets/infoIcon";
import ButtonComponent from "../button/button";
import { NavLink } from "react-router-dom";

function SignUpDetails() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeBox, setActiveBox] = useState(1); // Tracks the selected box

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBoxClick = (boxNumber) => {
    setActiveBox(boxNumber);
  };

  const feedbackText = (() => {
    if (activeBox === 1) {
      return "Only reporting managers can give feedback";
    } else if (activeBox === 2) {
      return "Team members can give feedback to another team member except the reporting manager";
    } else if (activeBox === 3) {
      return "Team members can give feedback to another team member including the reporting manager";
    }
    return ""; // Default text when no box is selected
  })();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        backgroundColor: "#F8F8F8",
        padding: 4,
      }}
    >
      {/* Left Box */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
        }}
      >
        <AtomicSignalsLogoWithName />
        <FeedBackTool sx={{ my: 4 }} />
        <Typography
          sx={{
            width: "468px",
            textAlign: "center",
            fontSize: "16px",
            color: "#353448",
            mb: 2,
          }}
        >
          “I think it’s very important to have a feedback loop, where you’re
          constantly thinking about what you’ve done and how you could be doing
          it better.”
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            color: "#353448",
          }}
        >
          - Elon Musk
        </Typography>
      </Box>

      {/* Right Box */}
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingX: 8,
          paddingY: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "#353448", mb: 2 }}
        >
          Almost there!
        </Typography>

        {/* Form Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography sx={{ fontSize: "12px", color: "#484759" }}>
              Your name<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextInput breadth={389} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "12px", color: "#484759" }}>
              Your designation<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextInput breadth={389} />
          </Box>

          {/* Password Input with Visibility Toggle */}
          <Box>
            <Typography sx={{ fontSize: "12px", color: "#484759" }}>
              Set password<span style={{ color: "red" }}>*</span>
            </Typography>
            <Password breadth={389} />
          </Box>

          <Box>
            <Typography sx={{ fontSize: "12px", color: "#484759" }}>
              Workspace name<span style={{ color: "red" }}>*</span>
            </Typography>
            <TextInput breadth={389} />
          </Box>

          {/* Feedback Structure Options */}
          <Typography
            sx={{
              fontSize: "12px",
              color: "#484759",
              mt: 2,
              width: "389px",
              opacity: 1,
            }}
          >
            What type of feedback structure would you like to implement?
            <span style={{ color: "red" }}>*</span>
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              onClick={() => handleBoxClick(1)}
              sx={{
                display: "flex",
                width: "119px",
                height: "109px",
                borderRadius: "4px",
                border:
                  activeBox === 1 ? "2px solid #00C48C" : "1px solid #EBEBEB",
                backgroundColor: "white",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Reporting to</Typography>
            </Box>
            <Box
              onClick={() => handleBoxClick(2)}
              sx={{
                width: "119px",
                display: "flex",
                height: "109px",
                borderRadius: "4px",
                border:
                  activeBox === 2 ? "2px solid #00C48C" : "1px solid #EBEBEB",
                backgroundColor: "white",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>Peer to peer</Typography>
            </Box>
            <Box
              onClick={() => handleBoxClick(3)}
              sx={{
                display: "flex",
                width: "119px",
                height: "109px",
                borderRadius: "4px",
                border:
                  activeBox === 3 ? "2px solid #00C48C" : "1px solid #EBEBEB",
                backgroundColor: "white",
                cursor: "pointer",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>360° </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", height: "12px" }}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#484759",
                opacity: 0.6,
                width: "389px",
              }}
            >
              <span style={{ marginRight: "8px", left: "0" }}>
                <InfoIcon />
              </span>
              {feedbackText}
            </Typography>
          </Box>
        </Box>

        {/* Submit Button */}
        <Box
          sx={{
            marginTop: "15px",
          }}
        >
         <NavLink to="/setup"><ButtonComponent
            text={"Let's dive in"}
            breadth={389}
            
          ></ButtonComponent></NavLink>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUpDetails;
