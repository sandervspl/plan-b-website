import React from 'react';
import { Paragraph } from 'common/typography';
import { ProgressBarContainer, ProgressIndicator } from './styled';

export const ProgressBar: React.FC<Props> = ({ current, max, label }) => {
  const progress = current != null && current > 0 && max > 0
    ? current / max
    : 0;

  return (
    <ProgressBarContainer>
      <ProgressIndicator progress={progress} />
      {label && (
        <Paragraph>{label}</Paragraph>
      )}
    </ProgressBarContainer>
  );
};

type Props = {
  current: number;
  max: number;
  label?: string | number;
};
