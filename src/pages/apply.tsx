import * as i from 'types';
import React, { useState, useEffect, useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import NextRouter from 'router';
import { redirect, getUrl } from 'services';
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

const initValues = {};
if (__DEV__) {
  // initValues = {
  //   character: {
  //     server: 'Ragnaros',
  //     level: 60,
  //     name: 'msa',
  //     race: 2,
  //     'class': 1,
  //   },
  //   role: '1',
  //   raid_experience: {
  //     molten_core: true,
  //     onyxia: true,
  //     blackwing_lair: true,
  //   },
  //   personal: {
  //     name: 'asd',
  //     age: '12',
  //     story: 'as',
  //     reason: 'asd',
  //   },
  //   professions: {
  //     primary: [
  //       {
  //         level: '123',
  //         id: 0,
  //       },
  //     ],
  //   },
  // };
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

const ApplicationPage: i.NextPageComponent<Props> = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const containerEl = useRef<HTMLDivElement>(null);
  const formEl = useRef<HTMLFormElement>(null);
  const [questionIndex, setQuestionIndex] = useState(1);
  // const [questionIndex, setQuestionIndex] = useState(__DEV__ ? 7 : 1);
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

    if (questionIndex !== paramQstnId) {
      setQuestionIndex(paramQstnId);
    }
  }, [router!.query!.questionId]);

  function preventSubmit() {};

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
  const formOnSubmit = () => {
    props.sendApplication();
  };

  return (
    // <RecruitmentContainer {...mouseEvents} ref={containerEl}>
    <RecruitmentContainer ref={containerEl}>
      <Form
        onSubmit={formOnSubmit}
        mutators={{ ...arrayMutators }}
        destroyOnUnregister
        keepDirtyOnReinitialize
        initialValues={{
          character: {
            server: 'Ragnaros',
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
