// components/chips/ChipsExample.jsx
import React, { useState } from 'react';
import SelectionChip from './SelectionChip';
import FeedbackChip from './FeedbackChip';

const ChipsExample = () => {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (chipLabel) => {
    setSelectedChip(chipLabel);
  };

  return (
    <div>
      <SelectionChip
        label="Chips"
        selected={selectedChip === 'Chips'}
        onClick={() => handleChipClick('Chips')}
      />
      <FeedbackChip /> {/* No changes needed here */}
    </div>
  );
};

export default ChipsExample;
