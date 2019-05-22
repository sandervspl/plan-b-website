import * as i from 'types';
import React from 'react';
import { useSelector } from 'react-redux';
import { theme } from 'styles';
import { Heading } from 'common';
import ClassList from './components/ClassList';
import { RecruitmentBlockContainer, ApplyNow, Disclaimer } from './styled';

const RecruitmentBlock: React.FC = () => {
  const recruitment = useSelector((state: i.ReduxState) => state.recruitment);

  if (!recruitment.data) return null;
  if (!recruitment.data.active) return null;

  return (
    <RecruitmentBlockContainer>
      <Heading capeColor={theme.color.primary.dark}>
        {recruitment.data.title || 'We are recruiting!'}
      </Heading>
      <ClassList />
      {recruitment.data.disclaimer && (
        <Disclaimer>
          * {recruitment.data.disclaimer}
        </Disclaimer>
      )}
      <ApplyNow to="apply">Apply now</ApplyNow>
    </RecruitmentBlockContainer>
  );
};

export default RecruitmentBlock;
