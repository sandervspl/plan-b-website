import * as i from 'types';
import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import anime from 'animejs';
import { API_ENDPOINT, getSourceUrl } from 'services';
import apiConfig from 'services/api/config';
import { TRANSITION_TIME_MS, TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';
import { fetchPage } from 'ducks/page';
import FadedBackgroundImage from 'modules/Apply/BackgroundImage';
import Question from 'modules/Apply/Question';
import { RecruitmentContainer } from 'modules/Apply/styled';

let question1Anim: anime.AnimeInstance;
let question2Anim: anime.AnimeInstance;
let bg1Anim: anime.AnimeInstance;
let bg2Anim: anime.AnimeInstance;

const ApplicationPage: i.NextPageComponent<Props> = ({ page }) => {
  const [started, setStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(-1);
  const [question, setQuestion] = useState<i.RecruitmentQuestionDetail>();
  const [nextQuestion, setNextQuestion] = useState<i.RecruitmentQuestionDetail>();
  const [loading, setLoading] = useState(false);
  const questionContainer1 = useRef(null);
  const questionContainer2 = useRef(null);
  const bgRef1 = useRef(null);
  const bgRef2 = useRef(null);
  const notStarted = !started || !question;

  useEffect(() => {
    question1Anim = anime({
      targets: questionContainer1.current,
      autoplay: false,
      translateY: '-100%',
      opacity: 0,
      duration: TRANSITION_TIME_MS_SHORT,
      easing: 'easeInOutSine',
    });

    question2Anim = anime({
      targets: questionContainer2.current,
      autoplay: false,
      translateY: '-100%',
      opacity: 1,
      duration: TRANSITION_TIME_MS,
      easing: 'easeInOutSine',
    });

    bg1Anim = anime({
      targets: bgRef1.current,
      autoplay: false,
      opacity: [1, 0],
      duration: TRANSITION_TIME_MS_SHORT,
      easing: 'easeInOutSine',
    });

    bg2Anim = anime({
      targets: bgRef2.current,
      autoplay: false,
      opacity: [0, 1],
      duration: TRANSITION_TIME_MS_SHORT,
      delay: TRANSITION_TIME_MS,
      easing: 'easeInOutSine',
    });
  }, []);

  useEffect(() => {
    if (!nextQuestion) return;

    question1Anim.play();
    question2Anim.play();
    bg1Anim.play();
    bg2Anim.play();
  }, [nextQuestion]);

  // Fetch new question
  const getNextQuestion = async () => {
    const questionIds = page.application!.recruitmentquestions.map((q) => q.id);
    const nextQuestionIndex = questionIndex + 1;

    /** @todo set finished state */
    if (nextQuestionIndex >= questionIds.length) return;

    const nextQuestionId = questionIds[nextQuestionIndex];

    setLoading(true);

    return await fetch(`${apiConfig.url.cms}/recruitmentquestions/${nextQuestionId}`)
      .then((data) => data.json())
      .then((newQuestion: i.RecruitmentQuestionDetail) => {
        if (newQuestion.background_image) {
          const img = new Image();
          img.src = getSourceUrl(newQuestion.background_image.url);
          img.onload = () => {
            toNextQuestion(newQuestion, nextQuestionIndex);
          };
        } else {
          toNextQuestion(newQuestion, nextQuestionIndex);
        }
      });
  };

  const toNextQuestion = (newQuestion: i.RecruitmentQuestionDetail, nextQuestionIndex: number) => {
    setLoading(false);
    setNextQuestion(newQuestion);
    setQuestionIndex(nextQuestionIndex);

    setTimeout(() => {
      setQuestion(newQuestion);
    }, TRANSITION_TIME_MS);
  };

  const getQuestion = () => {
    if (notStarted) {
      return {
        title: page.application!.intro_title,
        text: page.application!.intro_text,
        image: page.application!.intro_image,
      };
    } else if (question) {
      return {
        title: question!.question,
        image: question!.background_image,
      };
    }
  };

  const handleClick = async () => {
    if (!started) {
      setStarted(true);
    }

    await getNextQuestion();
  };

  const qstn = getQuestion();

  return (
    <RecruitmentContainer>
      <FadedBackgroundImage
        imgRef={bgRef1}
        image={qstn && qstn.image}
      />
      <FadedBackgroundImage
        next
        imgRef={bgRef2}
        image={nextQuestion && nextQuestion.background_image}
      />

      <Question
        containerRef={questionContainer1}
        question={{
          title: qstn && qstn.title,
          text: qstn && qstn.text,
        }}
        onNextClick={handleClick}
        isIntro={notStarted}
        loading={loading}
      />
      <Question
        next
        containerRef={questionContainer2}
        question={{
          title: nextQuestion && nextQuestion.question,
        }}
        onNextClick={handleClick}
        loading={loading}
      />

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
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(ApplicationPage);
