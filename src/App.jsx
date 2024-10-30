// src/App.jsx
import React from 'react';
import { useThemeContext } from './components/theme/ThemeContext';
import { Button } from '@mui/material';
import ChipsExample from './components/chips';
import AutoSuggest from "./components/autoSuggest";

const sampleOptions = ["Apple", "Banana", "Cherry"];
const App = () => {
    const { toggleTheme } = useThemeContext();

    return (
        <div >
            <h1>Hello, World!</h1>
            <Button variant="contained" onClick={toggleTheme}>
                Toggle Theme
            </Button>
            
            
            <h1>Chips Example</h1>
            <ChipsExample />

            

            <h1>Auto suggest Example</h1>
            <AutoSuggest options={sampleOptions} label="Select " />
        </div>
    );
};

export default App;
