import * as i from 'types';

export type QuestionComponentProps = {
  form: i.Forms;
  active?: boolean;
  mutators: {
    setArmoryLink: () => void;
    setRole: (role: string) => void;
  };
  onNextClick: () => void;
}
