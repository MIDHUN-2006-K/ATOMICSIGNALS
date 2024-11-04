// components/chips/FeedbackChip.jsx
import React, { useState } from 'react';
import { Chip, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const FeedbackChipContainer = styled('div')({
    position: 'fixed',
    right: '1rem',
    top: '1rem',
    display: 'flex',
    alignItems: 'center',
});

const FeedbackChipStyled = styled(Chip)(({ hover }) => ({
    cursor: 'pointer',
    transform: hover ? 'translateX(-10px)' : 'none',
    transition: 'transform 0.3s ease',
    maxWidth: hover ? '250px' : '120px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    padding: hover ? '0 12px' : '0 8px',
}));

const FeedbackChip = ({ defaultLabel, hoverLabel, avatarText, avatarStyle }) => {
    const [hover, setHover] = useState(false);

    return (
        <FeedbackChipContainer>
            <FeedbackChipStyled
                avatar={<Avatar sx={avatarStyle}>{avatarText}</Avatar>}
                label={hover ? hoverLabel : defaultLabel}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                hover={hover}
            />
        </FeedbackChipContainer>
    );
};

export default FeedbackChip;
