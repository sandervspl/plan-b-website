import * as i from 'types';
import React, { useState } from 'react';
import SendIcon from 'vectors/send.svg';
import config from 'config';
import { useSelector, useGetFirebaseImage, useRouter, useTimeout } from 'hooks';
import { Paragraph, Link, Button, ErrorText } from 'common';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, QuestionContent, RecruitmentContainerInner } from '../styled';
import { SubmitButton, Name, ErrorContainer, OutroGrid } from './styled';

const CompleteApplication: React.FC<i.QuestionComponentProps> = ({ inputTabIndex }) => {
  const router = useRouter();
  const form = useSelector((state) => state.form);
  const applicationUuid = useSelector((state) => state.applications.applicationUuid);
  const TaurenIcon = useGetFirebaseImage('icons/races', 'Tauren_Male.gif');
  const [enabled, setEnabled] = useState(false);

  useTimeout(() => setEnabled(true), 2000);

  const onHomeClick = () => {
    router.push('/');
  };

  return (
    <RecruitmentContainerInner>
      <OutroGrid>
        {form.sending.success ? (
          <div>
            <QuestionHeader>
              Thank you!
            </QuestionHeader>

            <QuestionContent>
              <Paragraph>
                We have received your application.
                <br /><br />
                The guild officers will review and discuss your application as soon as possible.
                When they have come to a conclusion, we will contact you in-game.
              </Paragraph>

              <Paragraph>
                <br />
                You can view your application and its progress on
                <Link external to={`${config.domain()}/application/${applicationUuid}`}>
                  {' '}this page
                </Link>.{' '}
                <strong>Don't forget to bookmark it!</strong>
              </Paragraph>

              <Button
                onClick={onHomeClick}
                type="button"
                disabled={!enabled}
                tabIndex={inputTabIndex}
              >
                <span tabIndex={-1}>Return to home</span>
              </Button>
            </QuestionContent>
          </div>
        ) : form.sending.failed ? (
          <ErrorContainer>
            <QuestionHeader>
              Whoops.
            </QuestionHeader>

            <QuestionContent>
              <Paragraph>
                We are very sorry. Something went wrong when you tried to send the application our way.
                <br /><br />
                Go back to the previous questions and fill in anything that is missing.
                Try again in a few minutes. If that does not work, contact
                <figure><img src={TaurenIcon} alt="" /></figure>
                <strong>Msa</strong> in-game.
                <br /><br />
              </Paragraph>

              <label htmlFor="submit_application">
                <SubmitButton disabled={form.sending.loading} tabIndex={inputTabIndex}>
                  <span tabIndex={-1}>Try again</span>
                  <SendIcon />
                  <input id="submit_application" type="submit" />
                </SubmitButton>
              </label>
            </QuestionContent>
          </ErrorContainer>
        ) : (
          <div>
            <QuestionHeader>
              That's it!
            </QuestionHeader>

            <QuestionContent>
              <QuestionContentHeader as="h2">
                Thank you, <Name>{form.application!.values.character.name}</Name>.
              </QuestionContentHeader>

              <Paragraph>
                You can review your application by going back to the questions before sending it.
              </Paragraph>

              <label htmlFor="submit_application">
                <SubmitButton
                  disabled={form.sending.loading || form.application!.invalid}
                  tabIndex={inputTabIndex}
                >
                  <span tabIndex={-1}>Send application</span>
                  <SendIcon />
                  <input id="submit_application" type="submit" />
                </SubmitButton>
              </label>

              {form.application!.invalid && (
                <ErrorText>There are errors in the form.</ErrorText>
              )}
            </QuestionContent>
          </div>
        )}
      </OutroGrid>
    </RecruitmentContainerInner>
  );
};

export default CompleteApplication;
