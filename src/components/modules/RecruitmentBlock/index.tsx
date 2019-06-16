import React from 'react';
import { theme } from 'styles';
import { useSelector } from 'hooks';
import { Heading } from 'common';
import ClassList from './components/ClassList';
import { RecruitmentBlockContainer, RecruitmentBlockInner, ApplyNow, Disclaimer } from './styled';

const RecruitmentBlock: React.FC = () => {
  const recruitment = useSelector((state) => state.recruitment);

  if (!recruitment.data) return null;
  if (!recruitment.data.active) return null;

  return (
    <RecruitmentBlockContainer>
      <RecruitmentBlockInner>
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
      </RecruitmentBlockInner>
    </RecruitmentBlockContainer>
  );
};

export default RecruitmentBlock;
