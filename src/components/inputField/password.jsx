import * as React from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import lightTheme from "../theme/lightTheme"; // Make sure this path is correct
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// Ensure lightTheme includes `shape` with `borderRadius`:
const theme = createTheme({
  ...lightTheme,
  shape: {
    borderRadius: 4, // Default or your preferred radius
  },
});

function Password({ breadth }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant="outlined" sx={{ width: "250px" }}>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          sx={{
            width: `${breadth}px`,
            height: "40px",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          size="small"
          error={false} // Change to true to show error styling
          disabled={false} // Change to true to show disabled styling
        />
      </FormControl>
    </ThemeProvider>
  );
}

export default Password;
