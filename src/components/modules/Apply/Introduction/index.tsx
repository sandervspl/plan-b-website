import React from 'react';
import { Header, Paragraph } from 'common';
import { NextButton } from '../Question/styled';

const Introduction: React.FC<props> = ({ data }) => (
  <>
    {data.title && (
      <Header>
        {data.title}
      </Header>
    )}

    {data.text && (
      <Paragraph>
        {data.text}
      </Paragraph>
    )}

    <NextButton>
      <span>Get Started!</span>
    </NextButton>
  </>
);

export type props = {
  data: {
    title?: string;
    text?: string;
  };
};

export default Introduction;
