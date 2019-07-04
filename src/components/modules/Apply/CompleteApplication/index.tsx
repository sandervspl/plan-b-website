import * as i from 'types';
import React from 'react';
import SendIcon from 'vectors/send.svg';
import { Paragraph, Link, Button } from 'common';
import { getUploadsUrl } from 'services';
import { useSelector } from 'hooks';
import QuestionHeader from '../QuestionHeader';
import TiltImages from '../TiltImages';
import { QuestionContentHeader, QuestionContent, RecruitmentContainerInner } from '../styled';
import { SubmitButton, SubmitLabel, Name } from './styled';

const images = [
  `${getUploadsUrl('recruitment_imgs/outro_top-left.jpg')}`,
  `${getUploadsUrl('recruitment_imgs/outro_bottom-left.jpg')}`,
  `${getUploadsUrl('recruitment_imgs/outro_right.jpg')}`,
];

const CompleteApplication: React.FC<i.QuestionComponentProps> = ({ tiltStyle }) => {
  const form = useSelector((state) => state.form);
  const character = useSelector((state) => state.character.data);
  const name = character ? character.name : 'unknown';

  return (
    <RecruitmentContainerInner small>
      <TiltImages images={images} tiltStyle={tiltStyle} />

      {form.sending.success ? (
        <>
          <QuestionHeader>
            Thank you!
          </QuestionHeader>

          <QuestionContent>
            <Link to="home" style={{ width: '100%' }}>
              <Button>
                Return to home
              </Button>
            </Link>
          </QuestionContent>
        </>
      ) : form.sending.failed ? (
        <>
          <QuestionHeader>
            Whoops, something went wrong.
          </QuestionHeader>

          <QuestionContent>
            <SubmitLabel htmlFor="submit_application">
              <SubmitButton disabled={form.sending.loading}>
                <span>Try again</span>
                <SendIcon />
                <input id="submit_application" type="submit" />
              </SubmitButton>
            </SubmitLabel>
          </QuestionContent>
        </>
      ) : (
        <>
          <QuestionHeader>
            That's it!
          </QuestionHeader>

          <QuestionContent>
            <QuestionContentHeader as="h2">
              Thank you, <Name>{name}</Name>.
            </QuestionContentHeader>

            <Paragraph>
              You can review your application before sending it. <br />
              An officer will contact you in-game if we think you are a match for Plan B.
            </Paragraph>

            <SubmitLabel htmlFor="submit_application">
              <SubmitButton disabled={form.sending.loading}>
                <span>Send</span>
                <SendIcon />
                <input id="submit_application" type="submit" />
              </SubmitButton>
            </SubmitLabel>
          </QuestionContent>
        </>
      )}
    </RecruitmentContainerInner>
  );
};

export default CompleteApplication;
