import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { getUploadsUrl } from 'services';
import { RecruitmentHeader } from '../styled';
import { RoleList, ListItem, BackgroundImage, RoleIcon, RoleText, SpecializationAnswerContainer } from './styled';

const roles = [{
  background: getUploadsUrl('roles/dps.jpg'),
  icon: getUploadsUrl('classes/rogue/combat.jpg'),
  text: 'DPS',
}, {
  background: getUploadsUrl('roles/healer.jpg'),
  icon: getUploadsUrl('classes/druid/restoration.jpg'),
  text: 'Healer',
}, {
  background: getUploadsUrl('roles/tank.jpg'),
  icon: getUploadsUrl('classes/warrior/protection.jpg'),
  text: 'Tank',
}];

const SpecializationSelectAnswer: React.FC<Props> = ({ onNextClick }) => {
  return (
    <SpecializationAnswerContainer>
      <RecruitmentHeader as="h2">
        What role will you play?
      </RecruitmentHeader>

      <RoleList>
        {roles.map((role) => (
          <ListItem key={role.text}>
            <Field
              name="character_specialization"
              component="input"
              type="radio"
              value={role.text}
              tabIndex={-1}
              onClick={onNextClick}
            />
            <BackgroundImage src={role.background} />
            <RoleIcon src={role.icon} />
            <RoleText>{role.text}</RoleText>
          </ListItem>
        ))}
      </RoleList>
    </SpecializationAnswerContainer>
  );
};

type Props = i.QuestionComponentProps;

export default SpecializationSelectAnswer;
