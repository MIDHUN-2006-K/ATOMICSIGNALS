// File: src/components/signupPage/signupPage.jsx

import React from 'react';
import { Box, Typography, TextField, Button, Divider, Stack } from '@mui/material';
import AtomicSignalsLogoWithName from '../../assets/atomicSignalsLogoWithName';
import GoogleIcon from '../../assets/googleIcon'; 
import OutlookIcon from '../../assets/outlookIcon';

const SignupPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#F3F4FB"
      padding="16px"
    >
      {/* Main Card Container */}
      <Box
        width="100%"
        maxWidth="400px"
        padding="32px"
        borderRadius="12px"
        bgcolor="#FFFFFF"
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
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
            fontFamily: 'Poppins',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '30px',
            color: '#353448', // your preferred color
            marginBottom: 1,
          }}
        >
          Sign up
        </Typography>
        <Typography variant="body2" color="#71707E" align="left" marginBottom={3}>
          You're just a few details away to set up a culture of feedback and a thriving environment
        </Typography>

        {/* Sign Up with Google */}
        <Button
          variant="outlined"
          startIcon={<GoogleIcon style={{ marginRight: '8px' }} />}
          fullWidth
          sx={{
            textTransform: 'none',
            marginBottom: 1.5,
            color: '#353448', // Change this color as needed to match "Sign up with Outlook"
            borderColor: '#E0E0E0',
            backgroundColor: '#FFFFFF',
            '&:hover': { backgroundColor: '#F7F7F7' },
            justifyContent: 'flex-start', // Align text to the left
            gap:"60px"

          }}
        >
          <Typography sx={{ color: '#353448' }}>Sign up with Google</Typography>
        </Button>

        {/* Sign Up with Outlook */}
        <Button
          variant="outlined"
          startIcon={<OutlookIcon style={{ marginRight: '8px' }} />}
          fullWidth
          sx={{
            textTransform: 'none',
            marginBottom: 3,
            color: '#49C792', // Make sure this color is the same as above for consistency
            borderColor: '#E0E0E0',
            backgroundColor: '#FFFFFF',
            '&:hover': { backgroundColor: '#F7F7F7' },
            justifyContent: 'flex-start', // Align text to the left
            gap:"60px"
          }}
        >
            <Typography sx={{ color: '#353448' }}>Sign up with Outlook</Typography>
          
        </Button>

        {/* Divider with "or" text */}
        <Stack direction="row" alignItems="center" spacing={1} marginBottom={3} justifyContent={'center'}>
            <Divider flexItem style={{ flexGrow: 1 }} />
                <Typography variant="body2" color="textSecondary" sx={{ lineHeight: 'normal'  }}>
                 or
                </Typography>
            <Divider flexItem style={{ flexGrow: 1 }} />
        </Stack>

        {/* Email Input Field */}
        <TextField
          label="Work Email"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            style: { color: '#000' },
          }}
          sx={{
            marginBottom: 2,
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#E0E0E0' },
              '&:hover fieldset': { borderColor: '#CACACA' },
              '&.Mui-focused fieldset': { borderColor: '#49C792' },
            },
          }}
        />

        {/* Sign Up Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            textTransform: 'none',
            backgroundColor: '#49C792',
            '&:hover': { backgroundColor: '#3DAC78' },
          }}
        >
          Sign up
        </Button>

        {/* Login Link */}
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          marginTop={3}
        >
          Already have an account?{' '}
          <Typography component="span" color="#49C792" fontWeight="bold">
            Log in
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupPage;
