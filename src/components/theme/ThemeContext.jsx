import React, { createContext, useContext, useState } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./index";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme); // Set initial theme

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === lightTheme ? darkTheme : lightTheme
        );
    };

    const muiTheme = createTheme(theme); // Create MUI theme from selected theme

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MUIThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
