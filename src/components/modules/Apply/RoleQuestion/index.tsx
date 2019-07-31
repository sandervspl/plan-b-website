import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { useSelector, useGetFirebaseImage } from 'hooks';
import QuestionHeader from '../QuestionHeader';
import { NextButton, QuestionContent, RecruitmentContainerInner } from '../styled';
import { RoleList, RoleItem, BackgroundImage, RoleIcon, RoleText } from './styled';

const RoleQuestion: React.FC<Props> = ({ onNextClick }) => {
  const form = useSelector((state) => state.form);

  const roles = [{
    id: 1,
    background: useGetFirebaseImage('recruitment/roles', 'dps_low.jpg'),
    icon: useGetFirebaseImage('icons/classes/rogue', 'combat.jpg'),
    text: 'DPS',
  }, {
    id: 3,
    background: useGetFirebaseImage('recruitment/roles', 'healer_low.jpg'),
    icon: useGetFirebaseImage('icons/classes/druid', 'restoration.jpg'),
    text: 'Healer',
  }, {
    id: 2,
    background: useGetFirebaseImage('recruitment/roles', 'tank_low.jpg'),
    icon: useGetFirebaseImage('icons/classes/warrior', 'protection.jpg'),
    text: 'Tank',
  }];

  const activeRole = form.application
    ? form.application.values && form.application.values.role
    : null;

  return (
    <RecruitmentContainerInner>
      <QuestionHeader>
        Choose your role
      </QuestionHeader>

      <QuestionContent fullSize>
        <RoleList>
          {roles.map((role) => {
            const roleId = role.id.toString();

            return (
              <RoleItem
                key={role.id}
                checked={roleId === activeRole}
                unchecked={activeRole != null && roleId !== activeRole}
              >
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value={roleId}
                  tabIndex={-1}
                />
                <BackgroundImage>
                  <img src={role.background} alt={role.text} />
                </BackgroundImage>
                <RoleIcon src={role.icon} />
                <RoleText>{role.text}</RoleText>
              </RoleItem>
            );
          })}
        </RoleList>

        <NextButton onClick={onNextClick} disabled={!activeRole}>
          <span>Continue</span>
        </NextButton>
      </QuestionContent>
    </RecruitmentContainerInner>
  );
};

type Props = i.QuestionComponentProps;

export default RoleQuestion;
