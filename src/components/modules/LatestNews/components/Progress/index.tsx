import * as i from 'types';
import React from 'react';
import { ProgressContainer, ProgressBar, ProgressSlider } from './styled';

const Progress: React.FC<Props> = ({ slides, activeId, progress }) => {
  return (
    <ProgressContainer>
      {Array.from({ length: slides }).map((_, i) => (
        <ProgressBar key={i} isActive={i === activeId}>
          <ProgressSlider
            progress={progress}
            isActive={i === activeId}
            isDone={activeId > i}
          />
        </ProgressBar>
      ))}
    </ProgressContainer>
  );
};

export type Props = {
  slides: number;
  activeId: number;
  progress: i.Percentage;
};

export default Progress;
