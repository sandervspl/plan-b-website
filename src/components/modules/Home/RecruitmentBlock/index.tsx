import React from 'react';
import { useSelector } from 'hooks';
import ArrowRightIcon from 'vectors/arrow-right.svg';
import { Heading, Small } from 'common';
import ClassList from './components/ClassList';
import { RecruitmentBlockContainer, ApplyNow, RecruitmentInner } from './styled';

const RecruitmentBlock: React.FC = () => {
  const recruitment = useSelector((state) => state.recruitment);

  if (!recruitment.data) return null;
  if (!recruitment.data.active) return null;

  return (
    <RecruitmentBlockContainer>
      <RecruitmentInner>
        <Heading as="h2">
          {recruitment.data.title || 'We are recruiting!'}
        </Heading>
        <ClassList />
        {recruitment.data.disclaimer && (
          <Small>
            * {recruitment.data.disclaimer}
          </Small>
        )}
      </RecruitmentInner>
      <ApplyNow to="apply">
        Apply now
        <ArrowRightIcon />
      </ApplyNow>
    </RecruitmentBlockContainer>
  );
};

export default RecruitmentBlock;
