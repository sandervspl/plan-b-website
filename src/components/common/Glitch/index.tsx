import React, { useState } from 'react';
import { useInterval } from 'hooks';
import { GlitchContainer } from './styled';

const MIN_TIME = 2000;
const MAX_TIME = 4500;

const Glitch: React.FC<GlitchProps> = ({ children }) => {
  const [time, setTime] = useState(MIN_TIME + Math.random() * MAX_TIME);

  useInterval(() => {
    setTime(MIN_TIME + Math.random() * MAX_TIME);
  }, time);

  return React.Children.only(
    <GlitchContainer>
      {React.cloneElement(children, { animtime: time })}
      {children}
      {children}
      {children}
      {React.cloneElement(children, { animtime: time })}
      {React.cloneElement(children, { animtime: time })}
    </GlitchContainer>
  );
};

type GlitchProps = {
  children: React.ReactElement;
}

export default Glitch;
