// src/components/autoSuggest/Autosuggest.jsx
import React, { useState } from 'react';
import { Autocomplete, TextField, Typography } from '@mui/material';

const Autosuggest = () => {
  const [error, setError] = useState(false);

  // Example suggestions
  const suggestions = ["CEO", "Manager", "CTO", "COO", "CFO"];

  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        freeSolo
        options={suggestions}
        onInputChange={(event, value) => {
          // Show error message if no matching suggestion
          if (value && !suggestions.some(suggestion => suggestion.toLowerCase().startsWith(value.toLowerCase()))) {
            setError(true);
          } else {
            setError(false);
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Label name"
            placeholder="CEO, Manager, etc"
            variant="outlined"
            error={error}
            helperText={error ? "No results found" : ""}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        style={{ marginBottom: 16 }}
      />
      {error && (
        <Typography color="error" variant="caption">
          No results found
        </Typography>
      )}
    </div>
  );
};

export default Autosuggest;
