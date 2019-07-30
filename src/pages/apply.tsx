import * as i from 'types';
import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import NextRouter from 'router';
import { validate, redirect, getUrl } from 'services';
import { useRouter } from 'hooks';
import { sendApplication, actions as formActions } from 'ducks/form';
import FormStateToRedux from 'common/form/FormStateToRedux';
import Question from 'modules/Apply/Question';
import IntroductionQuestion from 'modules/Apply/IntroductionQuestion';
// import CharacterApiQuestion from 'modules/Apply/CharacterApiQuestion';
import CharacterQuestion from 'modules/Apply/CharacterQuestion';
import ProfessionsQuestion from 'modules/Apply/ProfessionsQuestion';
import RoleQuestion from 'modules/Apply/RoleQuestion';
import RaidQuestion from 'modules/Apply/RaidQuestion';
import AboutYouQuestion from 'modules/Apply/AboutYouQuestion';
import CompleteApplication from 'modules/Apply/CompleteApplication';
import { RecruitmentContainer, QuestionsForm } from 'modules/Apply/styled';

type Question = React.ComponentType<i.QuestionComponentProps>;

const questionComponents: Question[] = [
  () => null,
  IntroductionQuestion,
  // CharacterApiQuestion,
  CharacterQuestion,
  ProfessionsQuestion,
  RoleQuestion,
  RaidQuestion,
  AboutYouQuestion,
  CompleteApplication,
];

const ApplicationPage: i.NextPageComponent<Props> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const containerEl = useRef<HTMLDivElement>(null);
  const formEl = useRef<HTMLFormElement>(null);
  const [questionIndex, setQuestionIndex] = useState(1);
  // const { tiltStyle, setRef, mouseEvents } = useTilt();
  const [canContinue, setCanContinue] = useState(true); // Can't get debounce to work on handleClick :/

  useEffect(() => {
    formEl.current!.addEventListener('keypress', preventSubmit);

    return function cleanup() {
      // Reset form
      dispatch(formActions.reset());

      formEl.current!.removeEventListener('keypress', preventSubmit);
    };
  }, []);

  useEffect(() => {
    const paramQstnId = router!.query!.questionId
      ? Number(router!.query!.questionId)
      : 1;

    if (questionIndex !== paramQstnId) {
      setQuestionIndex(paramQstnId);
    }
  }, [router!.query!.questionId]);

  // useEffect(() => {
  //   if (containerEl.current) {
  //     setRef(containerEl.current);
  //   }
  // }, [containerEl]);

  // eslint-disable-next-line
  function preventSubmit(e: KeyboardEvent) {};

  const handleClick = () => {
    // Prevent double clicks
    if (!canContinue) return;

    window.scrollTo(0, 0);

    NextRouter.push(
      'apply',
      { questionId: questionIndex + 1 },
      { shallow: true },
    );

    setCanContinue(false);

    setTimeout(() => {
      setCanContinue(true);
    }, 500);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formOnSubmit = (values) => async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submitting
    if (validate.applyFormValidate(values)) return;

    await props.sendApplication();
  };

  return (
    // <RecruitmentContainer {...mouseEvents} ref={containerEl}>
    <RecruitmentContainer ref={containerEl}>
      <Form
        onSubmit={() => {}}
        mutators={{ ...arrayMutators }}
        destroyOnUnregister
        keepDirtyOnReinitialize
        initialValues={{
          character: {
            server: 'Ragnaros',
            level: 60,
          },
        }}
      >
        {({ values, errors }) => (
          <QuestionsForm ref={formEl} onSubmit={formOnSubmit(values)}>
            <FormStateToRedux form="application" />

            {questionComponents.map((component, i) => (
              <Question
                key={i}
                active={questionIndex === i}
                answered={questionIndex > i}
                onNextClick={handleClick}
                Component={component}
                errors={errors}
              />
            ))}
          </QuestionsForm>
        )}
      </Form>
    </RecruitmentContainer>
  );
};

ApplicationPage.getInitialProps = ({ req, res }) => {
  if (req && res && /\d/.test(req.url)) {
    redirect(res, '/apply');
  }

  return {
    url: getUrl(req),
  };
};

type Props = {
  sendApplication: i.SendApplication;
}

export default connect(null, { sendApplication })(ApplicationPage);
