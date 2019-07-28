import * as i from 'types';

export type QuestionComponentProps = {
  form?: i.Forms;
  active?: boolean;
  onNextClick: () => void;
  errors: Record<string, string>;
}

export type TiltStyle = {
  style: {
    transform: string;
    transition: string;
    willChange: string;
  };
}
