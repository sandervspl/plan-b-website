import * as i from 'types';

export type QuestionComponentProps = {
  form?: i.Forms;
  active?: boolean;
  onNextClick: () => void;
  errors: {
    professions?: {
      primary?: {
        level: string;
      }[];
      secondary?: {
        level: string;
      }[];
    };
    personal?: object;
  };
}

export type TiltStyle = {
  style: {
    transform: string;
    transition: string;
    willChange: string;
  };
}
