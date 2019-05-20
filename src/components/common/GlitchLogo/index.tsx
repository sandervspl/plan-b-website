import React, { useState } from 'react';
import LogoSvg from 'vectors/logo.svg';
import { useInterval } from 'services/hooks';
import { LogoContainer } from './styled';

const MIN_TIME = 2000;
const MAX_TIME1 = 4500;
const MAX_TIME2 = 5500;

const GlitchLogo: React.FC = () => {
  const [timeProps, setTimeProps] = useState({
    randomTime1: MIN_TIME + Math.random() * MAX_TIME1,
    randomTime2: MIN_TIME + Math.random() * MAX_TIME2,
  });

  useInterval(() => {
    setTimeProps({
      randomTime1: MIN_TIME + Math.random() * MAX_TIME1,
      randomTime2: MIN_TIME + Math.random() * MAX_TIME2,
    });
  }, timeProps.randomTime2);

  return (
    <LogoContainer {...timeProps}>
      {Array.from({ length: 6 }).map((_, i) => (
        <LogoSvg key={i} />
      ))}
    </LogoContainer>
  );
};

export default GlitchLogo;
