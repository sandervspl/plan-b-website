import * as i from 'types';
import React from 'react';
import img1 from 'images/recruitment/WoWScrnShot_060409_194034.jpg';
import img2 from 'images/recruitment/WoWScrnShot_060709_214610.jpg';
import img3 from 'images/recruitment/WoWScrnShot_060709_221845.jpg';
import SendIcon from 'vectors/send.svg';
import { Paragraph } from 'common';
import { useSelector } from 'react-redux';
import QuestionHeader from '../QuestionHeader';
import TiltImages from '../TiltImages';
import { QuestionContentHeader, QuestionContent, RecruitmentContainerInner } from '../styled';
import { SubmitButton, Name } from './styled';

const CompleteApplication: React.FC<i.QuestionComponentProps> = ({ tiltStyle }) => {
  const character: i.CharacterData | null = useSelector(
    (state: i.ReduxState) => state.character.data
  );
  const name = character ? character.name : 'unknown';

  return (
    <RecruitmentContainerInner small>
      <TiltImages images={[img1, img2, img3]} tiltStyle={tiltStyle} />

      <QuestionHeader>
      That's it!
      </QuestionHeader>

      <QuestionContent>
        <QuestionContentHeader>
        Thank you, <Name>{name}</Name>.
        </QuestionContentHeader>

        <Paragraph>
        You can review your application before sending it in. <br />
        An officer will contact you in-game if we think you are a match for Plan B.
        </Paragraph>

        <SubmitButton>
          <span>Send</span>
          <SendIcon />
        </SubmitButton>
      </QuestionContent>
    </RecruitmentContainerInner>
  );
};

export default CompleteApplication;
