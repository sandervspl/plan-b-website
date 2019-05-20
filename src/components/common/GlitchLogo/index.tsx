import React, { useState } from 'react';
import LogoSvg from 'vectors/logo.svg';
import { useInterval } from 'services/hooks';
import { LogoContainer } from './styled';

const GlitchLogo: React.FC = () => {
  const [timeProps, setTimeProps] = useState({
    randomTime1: 1000 + Math.random() * 3500,
    randomTime2: 500 + Math.random() * 4500,
  });

  useInterval(() => {
    setTimeProps({
      randomTime1: 1000 + Math.random() * 3500,
      randomTime2: 500 + Math.random() * 4500,
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
