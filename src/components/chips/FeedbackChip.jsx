// components/chips/FeedbackChip.jsx
import React, { useState } from 'react';
import { Chip, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const FeedbackChipContainer = styled('div')({
    position: 'fixed',
    right: '1rem',

    display: 'flex',
    alignItems: 'center',
});

const FeedbackChipStyled = styled(Chip)(({ theme, hover }) => ({
    cursor: 'pointer',
    transform: hover ? 'translateX(-10px)' : 'none', // Slide left on hover
    transition: 'transform 0.3s ease',
    maxWidth: hover ? '250px' : '120px', // Expand on hover
    overflow: 'hidden', // Hide overflow text
    whiteSpace: 'nowrap', // Prevent wrapping
    padding: hover ? '0 12px' : '0 8px', // Adjust padding for hover effect
}));

const FeedbackChip = () => {
    const [hover, setHover] = useState(false);

    return (
        <FeedbackChipContainer>
            <FeedbackChipStyled
                avatar={<Avatar sx={{ bgcolor: 'green', color: 'white' }}>E</Avatar>}
                label={hover ? "Efficiency Very good" : "Very good"} // Show full label on hover
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                hover={hover}
            />
        </FeedbackChipContainer>
    );
};

export default FeedbackChip;
