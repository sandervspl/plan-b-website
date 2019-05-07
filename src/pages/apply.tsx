import * as i from 'types';
import React, { useState, useEffect, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { withRouter } from 'next/router';
import router from 'router';
import { API_ENDPOINT } from 'services';
import { useTilt } from 'services/hooks';
import { fetchPage } from 'ducks/page';
import FormStateToRedux from 'common/form/FormStateToRedux';
import Question from 'modules/Apply/Question';
import IntroductionQuestion from 'modules/Apply/IntroductionQuestion';
import CharacterQuestion from 'modules/Apply/CharacterQuestion';
import RoleQuestion from 'modules/Apply/RoleQuestion';
import RaidQuestion from 'modules/Apply/RaidQuestion';
import AboutYouQuestion from 'modules/Apply/AboutYouQuestion';
import { RecruitmentContainer, QuestionsForm } from 'modules/Apply/styled';

type Question = React.ComponentType<i.QuestionComponentProps>;

const questionComponents: Question[] = [
  () => null,
  IntroductionQuestion,
  CharacterQuestion,
  RoleQuestion,
  RaidQuestion,
  AboutYouQuestion,
];

const ApplicationPage: i.NextPageComponent<Props> = ({ form, ...props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [questionIndex, setQuestionIndex] = useState(1);
  const { tiltStyle, setRef, mouseEvents } = useTilt();
  const [canContinue, setCanContinue] = useState(true); // Can't get debounce to work on handleClick :/

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const paramQstnId = props.router!.query!.questionId
      ? Number(props.router!.query!.questionId)
      : 1;

    if (!form.application) {
      (router as i.Router).push('apply', {}, { shallow: true });
      return;
    }

    if (questionIndex !== paramQstnId) {
      setQuestionIndex(paramQstnId);
    }
  }, [props.router!.query!.questionId]);

  useEffect(() => {
    if (containerRef.current) {
      setRef(containerRef.current);
    }
  }, [containerRef]);

  // useEffect(() => {
  //   if (questions.length > 0) {
  //     preloadNextBgImage(questionIndex + 1);
  //   }
  // }, [questions, questionIndex]);

  function handleKeyDown(e: KeyboardEvent) {
    if (
      e.key === 'Enter' &&
      document.activeElement &&
      document.activeElement.nodeName !== 'TEXTAREA'
    ) {
      e.preventDefault();
    }
  }

  // const preloadNextBgImage = (id: number) => {
  //   if (questions[id] && questions[id].image) {
  //     const img = new Image();
  //     img.src = questions[id].image!;
  //   }
  // };

  const handleClick = () => {
    // Prevent double clicks
    if (!canContinue) return;

    (router as i.Router).push(
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
  const formOnSubmit = (finalFormSubmit: Function) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <RecruitmentContainer {...mouseEvents} ref={containerRef}>
      <Form
        onSubmit={() => {}}
        mutators={{ ...arrayMutators }}
        keepDirtyOnReinitialize
      >
        {({ handleSubmit }) => (
          <QuestionsForm onSubmit={formOnSubmit(handleSubmit)}>
            <FormStateToRedux form="application" />

            {questionComponents.map((component, i) => (
              <Question
                key={i}
                active={questionIndex === i}
                answered={questionIndex > i}
                onNextClick={handleClick}
                Component={component}
                tiltStyle={tiltStyle}
              />
            ))}
          </QuestionsForm>
        )}
      </Form>

      {/* <Progress /> */}
    </RecruitmentContainer>
  );
};

ApplicationPage.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPage(API_ENDPOINT.APPLICATION));

  return {};
};

type Props = i.WithRouterProps & {
  form: i.ReduxFormState;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  form: state.form,
});

export default compose(
  withRouter,
  connect(mapStateToProps),
)(ApplicationPage);
