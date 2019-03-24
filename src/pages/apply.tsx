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

const ApplicationPage: i.NextPageComponent<Props> = ({ page, recruitment }) => {
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [questions, setQuestions] = useState<i.RecruitmentQuestionDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuestions();
  }, []);

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
    setQuestionIndex(questionIndex + 1);
  };

  const finalFormOnSubmit = async (values) => {
    window.alert(JSON.stringify(values, null, 2));
  };

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <RecruitmentContainer>
      {/* <button onClick={handlePrevClick}>Previous question</button> */}

      <Form
        onSubmit={finalFormOnSubmit}
        mutators={{
          setArmoryLink: (args, state, tools) => {
            if (recruitment.character) {
              const { name } = recruitment.character;

              tools.changeValue(state, 'armory_link', () => (
                `https://worldofwarcraft.com/en-gb/character/eu/ragnaros/${name.toLowerCase()}`
              ));
            }
          },
        }}
      >
        {({ form }) => (
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
                mutators={form.mutators}
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
  recruitment: i.RecruitmentState;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
  recruitment: state.recruitment,
});

export default connect(mapStateToProps)(ApplicationPage);
