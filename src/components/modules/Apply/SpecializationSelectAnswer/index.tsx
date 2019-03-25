import * as i from 'types';
import React from 'react';
import { getUploadsUrl } from 'services';
import { TextField } from '../styled';
import { SpecializationSelectContainer, RoleList, ListItem, BackgroundImage, RoleIcon, RoleText } from './styled';

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

const SpecializationSelect: React.FC<Props> = ({ mutators, onNextClick }) => {
  const handleClick = (role: string) => () => {
    mutators.setRole(role);
    onNextClick();
  };

  return (
    <SpecializationSelectContainer>
      <RoleList>
        {roles.map((role) => (
          <ListItem onClick={handleClick(role.text)}>
            <BackgroundImage src={role.background} />
            <RoleIcon src={role.icon} />
            <RoleText>{role.text}</RoleText>
          </ListItem>
        ))}
      </RoleList>

      <TextField
        hidden
        name="character_specialization"
        component="input"
        type="text"
        tabIndex={-1}
      />
    </SpecializationSelectContainer>
  );
};

type Props = i.QuestionComponentProps;

export default SpecializationSelect;
