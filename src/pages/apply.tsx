import * as i from 'types';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import NextRouter from 'router';
import { redirect, getUrl } from 'services';
import { useRouter, useSelector } from 'hooks';
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

let initValues = {};
if (__DEV__) {
  initValues = {
    character: {
      server: 'Shazzrah',
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

const ApplicationPage: i.NextPageComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
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

  const formOnSubmit = () => {
    if (form.application!.invalid) {
      return;
    }

    dispatch(sendApplication());
  };

  return (
    <RecruitmentContainer ref={containerEl}>
      <Form
        onSubmit={formOnSubmit}
        mutators={{ ...arrayMutators }}
        destroyOnUnregister
        keepDirtyOnReinitialize
        initialValues={{
          character: {
            server: 'Shazzrah',
            level: 60,
          },
          ...initValues,
        }}
      >
        {({ errors, handleSubmit }) => (
          <QuestionsForm ref={formEl} onSubmit={handleSubmit}>
            <FormStateToRedux form="application" />

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

export default ApplicationPage;
