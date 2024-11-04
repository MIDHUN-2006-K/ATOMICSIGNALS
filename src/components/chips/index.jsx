// components/chips/ChipsExample.jsx
import React, { useState } from 'react';
import SelectionChip from './selectionChip';
import FeedbackChip from './feedbackChip';

function Chips() {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (chipLabel) => {
    setSelectedChip(chipLabel);
  };

  return (
    <div>
      <SelectionChip
        label="Chips"
        selected={selectedChip === 'Chips'}
        onClick={() => handleChipClick('Chips')} />
                
      <FeedbackChip
        defaultLabel="Very good"
        hoverLabel="Efficiency Very good"
        avatarText="E"
        avatarStyle={{ bgcolor: 'green', color: 'white' }}/>
    </div>
  );
}

export default Chips;
