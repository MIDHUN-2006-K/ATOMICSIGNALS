import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, Button, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AtomicSignalsLogoWithName from '../../assets/atomicSignalsLogoWithName';
import Password from '../inputField/password';
import ButtonComponent from '../button/button';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f4f8',
        backgroundImage: 'url(/path-to-your-background-icons.png)', // Replace with the actual path
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'left', mb: 3 }}>
          {/* Logo */}
          <AtomicSignalsLogoWithName/>
          <Typography variant="h5" fontWeight="bold" sx={{marginBottom:"10px"}}>
            Reset Password
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Please provide a new password for your account
          </Typography>
        </Box>
        {/* New Password Field */}
        <Box mb={3} width="100%">
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', mb: 1 }}>
            New password
          </Typography>
          <Password breadth={340} />
        </Box>
        
        {/* Confirm New Password Field */}
        <Box mb={3} width="100%">
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', mb: 1 }}>
            Confirm new password
          </Typography>
          <Password breadth={340} />
        </Box>
        
        {/* Reset Password Button */}
        <NavLink to="/login">
        <ButtonComponent text={"Reset password"} breadth={348}/>
          
        </NavLink>
      </Box>
    </Box>
  );
};

export default ResetPassword;
