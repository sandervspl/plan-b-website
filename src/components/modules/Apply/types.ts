import * as i from 'types';

export type QuestionComponentProps = {
  index: number;
  activeIndex: number;
  form?: i.Forms;
  active?: boolean;
  inputTabIndex: number;
  onNextClick: () => void;
  formValues: {
    role?: string;
    raid_experience?: object;
    character?: {
      name?: string;
    };
  };
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
    character?: object;
  };
}

export type TiltStyle = {
  style: {
    transform: string;
    transition: string;
    willChange: string;
  };
}
