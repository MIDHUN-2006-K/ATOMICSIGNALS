// src/App.jsx
import React from 'react';
import { useThemeContext } from './components/theme/themeContext';
import { Button } from '@mui/material';
import Chips from './components/chips';
import AutoSuggest from "./components/autoSuggest/index";
import SignupPage from './components/signupPage/signupPage';


const sampleOptions = ["Apple", "Banana", "Cherry"];
const App = () => {
    const { toggleTheme } = useThemeContext();

    return (
        <div >
        <Chips />
        <AutoSuggest suggestions={["CEO", "Manager", "C", "COO", "CFO"]} />

        </div>
    );
};

export default App;
