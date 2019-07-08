import React, { useState } from 'react';
import { useInterval } from 'hooks';
import { GlitchContainer } from './styled';

const MIN_TIME = 2000;
const MAX_TIME1 = 4500;
const MAX_TIME2 = 5500;

const Glitch: React.FC<GlitchProps> = ({ children }) => {
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

  return React.Children.only(
    <GlitchContainer>
      {React.cloneElement(children, { animtime: timeProps.randomTime1 })}
      {children}
      {children}
      {children}
      {React.cloneElement(children, { animtime: timeProps.randomTime1 })}
      {React.cloneElement(children, { animtime: timeProps.randomTime1 })}
    </GlitchContainer>
  );
};

type GlitchProps = {
  children: React.ReactElement;
}

export default Glitch;
