import React, { useState } from 'react';
import { useInterval } from 'services/hooks';
import { LogoContainer, Logo } from './styled';

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
  }, Math.max(timeProps.randomTime1, timeProps.randomTime2));

  return (
    <LogoContainer>
      <Logo animTime={timeProps.randomTime1} />
      <Logo />
      <Logo />
      <Logo />
      <Logo animTime={timeProps.randomTime1} />
      <Logo animTime={timeProps.randomTime1} />
    </LogoContainer>
  );
};

export default GlitchLogo;
