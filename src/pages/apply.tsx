import * as i from 'types';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import NextRouter from 'router';
import { redirect, getUrl } from 'services';
import { useRouter } from 'hooks';
import { sendApplication, actions as formActions } from 'ducks/form';
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

let mockValues = {};
if (__DEV__) {
  mockValues = {
    character: {
      server: 'Firemaw',
      level: 60,
      name: 'WEB_TEST',
      race: 2,
      class: 1,
    },
    role: '1',
    raid_experience: {
      molten_core: true,
      onyxia: true,
      blackwing_lair: true,
    },
    personal: {
      name: 'TESTER',
      age: '12',
      story: 'abc',
      reason: 'def',
    },
    professions: {
      primary: [
        {
          level: '123',
          id: 1,
        },
      ],
    },
  };
}

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

const ApplicationPage: i.NextPageComponent = React.memo(() => {
  const router = useRouter();
  const dispatch = useDispatch();
  const containerEl = useRef<HTMLDivElement>(null);
  const formEl = useRef<HTMLFormElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
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
    // if (__DEV__) {
    //   return;
    // }

    const paramQstnId = router!.query!.questionId
      ? Number(router!.query!.questionId)
      : 1;

    if (activeIndex !== paramQstnId) {
      setActiveIndex(paramQstnId);
    }
  }, [router!.query!.questionId]);

  function preventSubmit() {};

  const handleClick = () => {
    // Prevent double clicks
    if (!canContinue) return;

    if (containerEl.current) {
      containerEl.current.scrollTo(0, 0);
    }

    NextRouter.push(
      'apply',
      { questionId: activeIndex + 1 },
      { shallow: true },
    );

    setCanContinue(false);

    setTimeout(() => {
      setCanContinue(true);
    }, 500);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formOnSubmit = (values: any) => {
    dispatch(sendApplication(values));
  };

  return (
    <RecruitmentContainer ref={containerEl}>
      <Form
        onSubmit={formOnSubmit}
        destroyOnUnregister
        keepDirtyOnReinitialize
        initialValues={{
          character: {
            server: 'Firemaw',
            level: 60,
            race: '-1',
            class: '-1',
          },
          social: false,
          // ...mockValues,
        }}
      >
        {({ handleSubmit, values, valid, errors }) => (
          <QuestionsForm
            ref={formEl}
            onSubmit={valid ? handleSubmit : () => {}}
          >
            {questionComponents.map((component, i) => (
              <Question
                key={i}
                index={i}
                activeIndex={activeIndex}
                active={activeIndex === i}
                answered={activeIndex > i}
                onNextClick={handleClick}
                Component={component}
                errors={errors}
                inputTabIndex={activeIndex === i ? 0 : -1}
                formValues={values}
              />
            ))}
          </QuestionsForm>
        )}
      </Form>
    </RecruitmentContainer>
  );
});

ApplicationPage.getInitialProps = ({ req, res }) => {
  if (req && res && /\d/.test(req.url)) {
    redirect(res, '/apply');
  }

  return {
    url: getUrl(req),
  };
};

export default ApplicationPage;
