import { Button } from "@mui/material";

function ButtonComponent({ text, breadth,onSignUpCLick }) {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        fontSize:"16px",
        width: `${breadth}px`,
        textTransform: "none",
        backgroundColor: "#49C792",
        "&:hover": { backgroundColor: "#3DAC78" },
        marginTop: "20px",
      }}
    >
      {text}
    </Button>
  );
}

export default ButtonComponent;
