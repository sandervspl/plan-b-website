import * as i from 'types';

export type QuestionComponentProps = {
  form?: i.Forms;
  active?: boolean;
  onNextClick: () => void;
  tiltStyle: i.TiltStyle;
}

export type TiltStyle = {
  style: {
    transform: string;
    transition: string;
    willChange: string;
  };
}
