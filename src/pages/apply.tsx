import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import router from 'router';
import { API_ENDPOINT, getSourceUrl } from 'services';
import { fetchPage } from 'ducks/page';
import FormStateToRedux from 'common/form/FormStateToRedux';
import Question from 'modules/Apply/Question';
import Introduction from 'modules/Apply/Introduction';
import { RecruitmentContainer, QuestionsForm } from 'modules/Apply/styled';
import { compose } from 'redux';
import { withRouter } from 'next/router';
import ArmorySelectAnswer from 'modules/Apply/ArmorySelectAnswer';
import SpecializationSelectAnswer from 'modules/Apply/SpecializationSelectAnswer';

type Question = {
  component: React.ComponentType<i.QuestionComponentProps>;
  image?: string;
};

const questions: Question[] = [
  {
    component: () => null,
  },
  {
    component: Introduction,
    image: 'http://cms.planbguild.eu/uploads/1e8c94ccaa63414989b718e01e5795fa.jpg',
  },
  {
    component: ArmorySelectAnswer,
    image: 'http://cms.planbguild.eu/uploads/ce5492e3f5964415897b6d8f12d907d4.jpg',
  },
  {
    component: SpecializationSelectAnswer,
    image: 'http://cms.planbguild.eu/uploads/fc4f9be1230747619532d3bc7155fc92.jpg',
  },
];

const ApplicationPage: i.NextPageComponent<Props> = ({ page, form, ...props }) => {
  const [questionIndex, setQuestionIndex] = useState(1);

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
    if (questions.length > 0) {
      preloadNextBgImage(questionIndex + 1);
    }
  }, [questions, questionIndex]);

  function handleKeyDown(e: KeyboardEvent) {
    if (
      e.key === 'Enter' &&
      document.activeElement &&
      document.activeElement.nodeName !== 'TEXTAREA'
    ) {
      e.preventDefault();
    }
  }

  const preloadNextBgImage = (id: number) => {
    if (questions[id] && questions[id].image) {
      const img = new Image();
      img.src = questions[id].image!;
    }
  };

  const handleClick = () => {
    // I need to clean myself after this. Disgusting.
    /** @todo Fix a way to figure out if input value is not empty */
    const el = document.querySelector<HTMLInputElement>(`[name='${form.activeField}']`);

    if (el && (el.type === 'text' || el.type === 'textarea') && el.value.length === 0) {
      /** @todo Display error */
      return;
    }

    (router as i.Router).push(
      'apply',
      { questionId: questionIndex + 1 },
      { shallow: true },
    );
  };

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <RecruitmentContainer>
      <Form onSubmit={() => {}}>
        {() => (
          <QuestionsForm onSubmit={formOnSubmit}>
            <FormStateToRedux form="application" />

            {questions.map((qstn, i) => (
              <Question
                key={i}
                image={qstn.image}
                active={questionIndex === i}
                answered={questionIndex > i}
                onNextClick={handleClick}
                Component={qstn.component}
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
  page: i.PageState;
  form: i.ReduxFormState;
  setActiveField: i.SetActiveField;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
  form: state.form,
});

export default compose(withRouter, connect(mapStateToProps))(ApplicationPage);
