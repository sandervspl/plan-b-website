import React from 'react';
import { useSelector, useGetFirebaseImage } from 'hooks';
import ArrowRightIcon from 'vectors/arrow-right.svg';
import { Heading, Small, EmptyStateText } from 'common';
import ClassList from './components/ClassList';
import { RecruitmentBlockContainer, ApplyNow, RecruitmentInner, EmptyStateContainer } from './styled';

const RecruitmentBlock: React.FC = () => {
  const recruitment = useSelector((state) => state.recruitment);
  const emptyStateImg = useGetFirebaseImage('general', 'empty-state-cover.png');

  if (!recruitment.data) return null;

  return (
    <RecruitmentBlockContainer>
      <RecruitmentInner>
        <Heading as="h2">
          {recruitment.data.title || 'We are recruiting!'}
        </Heading>

        {recruitment.data!.classes && recruitment.data!.classes.length > 0 ? (
          <>
            <ClassList />
            {recruitment.data.disclaimer && (
              <Small>
                * {recruitment.data.disclaimer}
              </Small>
            )}
          </>
        ) : (
          <EmptyStateContainer>
            <img src={emptyStateImg} alt="" loading="lazy" />
            <EmptyStateText>{recruitment.data.empty_state_text}</EmptyStateText>
          </EmptyStateContainer>
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
