import React from 'react';
import { Paragraph } from 'common/typography';
import { ProgressBarContainer, ProgressIndicator } from './styled';

export const ProgressBar: React.FC<Props> = ({ current, max, label }) => {
  return (
    <ProgressBarContainer>
      <ProgressIndicator width={current / max} />
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
