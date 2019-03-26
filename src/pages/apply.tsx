import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import { API_ENDPOINT } from 'services';
import apiConfig from 'services/api/config';
import { fetchPage } from 'ducks/page';
import FormStateToRedux from 'common/form/FormStateToRedux';
import Question from 'modules/Apply/Question';
import { RecruitmentContainer } from 'modules/Apply/styled';

const ApplicationPage: i.NextPageComponent<Props> = ({ page, form }) => {
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState<i.RecruitmentQuestionDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestions();

    document.addEventListener('keydown', handleKeyDown);

    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(e: KeyboardEvent) {
    if (
      e.key === 'Enter' &&
      document.activeElement &&
      document.activeElement.nodeName !== 'TEXTAREA'
    ) {
      e.preventDefault();
    }
  }

  const getQuestions = async () => {
    const qstns = await Promise.all<any>(
      page.application!.recruitmentquestions.map((question) => (
        fetch(`${apiConfig.url.cms}/recruitmentquestions/${question.id}`)
          .then((data) => data.json())
      ))
    );

    setQuestions(qstns);
    setLoading(false);
  };

  const handleClick = () => {
    // I need to clean myself after this. Disgusting.
    /** @todo Fix a way to figure out if input value is not empty */
    const el = document.querySelector<HTMLInputElement>(`[name='${form.activeField}']`);

    if (el && (el.type === 'text' || el.type === 'textarea') && el.value.length === 0) {
      /** @todo Display error */
      return;
    }

    setQuestionIndex(questionIndex + 1);
  };

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <RecruitmentContainer>
      {/* <button onClick={handlePrevClick}>Previous question</button> */}

      <Form onSubmit={() => {}}>
        {() => (
          <form onSubmit={formOnSubmit}>
            <FormStateToRedux form="application" />
            <Question
              intro={{
                title: page.application!.intro_title,
                text: page.application!.intro_text,
              }}
              image={page.application!.intro_image}
              isIntro
              loading={loading}
              active={questionIndex === -1}
              answered={questionIndex > -1}
              onNextClick={handleClick}
            />

            {questions.map((question, i) => (
              <Question
                key={question.id}
                question={question}
                image={question.background_image}
                loading={loading}
                active={questionIndex === i}
                answered={questionIndex > i}
                onNextClick={handleClick}
                noButton={question.answer_type !== 'text' && question.answer_type !== 'long_text'}
              />
            ))}
          </form>
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

type Props = {
  page: i.PageState;
  form: i.ReduxFormState;
  setActiveField: i.SetActiveField;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
  form: state.form,
});

export default connect(mapStateToProps)(ApplicationPage);
