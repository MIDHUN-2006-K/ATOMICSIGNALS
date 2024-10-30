// components/chips/SelectionChip.jsx
import React from 'react';
import { Chip } from '@mui/material';
import { styled } from '@mui/system';

const StyledChip = styled(Chip)(({ theme }) => ({
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "4px",
    backgroundColor: theme.palette.background.paper,
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        borderColor: theme.palette.divider,
    },
    '&.Mui-selected': {
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.main,
    },
    '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        color: theme.palette.action.disabled,
    },
}));

const SelectionChip = ({ label, onClick, selected, disabled }) => (
    <StyledChip
        label={label}
        onClick={onClick}
        clickable
        className={selected ? 'Mui-selected' : ''}
        disabled={disabled}
    />
);

export default SelectionChip;
