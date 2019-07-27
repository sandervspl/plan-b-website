import * as i from 'types';
import React from 'react';
import { FieldArray } from 'react-final-form-arrays';
import { Field } from 'react-final-form';
import _ from 'lodash';
import { getUploadsUrl } from 'services';
import { useSelector, useGetFirebaseImage } from 'hooks';
import QuestionHeader from '../QuestionHeader';
import { NextButton, QuestionContent } from '../styled';
import {
  RaidList, RaidItem, RaidImage, RaidRow, RaidTooltip, RaidQuestionContainer,
} from './styled';

const RaidQuestion: React.FC<Props> = ({ onNextClick }) => {
  const form = useSelector((state) => state.form);
  const isMobile = useSelector((state) => state.ui.isMobile);

  const raids = [
    [
      {
        name: 'molten core',
        img: useGetFirebaseImage('raids', 'molten-core.png'),
      }, {
        name: 'onyxia',
        img: useGetFirebaseImage('raids', 'onyxia.jpg'),
      }, {
        name: 'blackwing lair',
        img: useGetFirebaseImage('raids', 'blackwing-lair.jpg'),
      },
    ],
    [
      {
        name: 'zul\'Gurub',
        img: useGetFirebaseImage('raids', 'zul\'gurub.jpg'),
      }, {
        name: 'ahn\'Qiraj (20)',
        img: useGetFirebaseImage('raids', 'aq20.jpg'),
      }, {
        name: 'ahn\'Qiraj (40)',
        img: useGetFirebaseImage('raids', 'aq40.jpg'),
      }, {
        name: 'naxxramas',
        img: useGetFirebaseImage('raids', 'naxxramas.jpg'),
      },
    ],
  ];

  const selected = form.application
    ? form.application.values.raid_experience || {}
    : {};
  const selectedArray = Object.keys(selected).filter((raid) => selected[raid]);

  return (
    <RaidQuestionContainer>
      <RaidTooltip effect="solid" delayShow={500} />

      <QuestionHeader>
        Raid experience
      </QuestionHeader>

      <QuestionContent fullSize>
        <RaidList>
          <FieldArray name="raid_experience">
            {({ fields }) => (
              isMobile ? _.flatten(raids).map((raid, i) => {
                const raidName = raid.name.replace(/[ ']/g, '').toLowerCase();
                const selected = !!selectedArray.find((name) => raidName === name);

                return (
                  <RaidItem key={i} data-tip={raid.name}>
                    <Field
                      component="input"
                      type="checkbox"
                      name={`${fields.name}.${raidName}`}
                      id={`${fields.name}.${raidName}`}
                    />
                    <RaidImage selected={selected}>
                      <img src={raid.img} alt={raid.name} />
                    </RaidImage>
                  </RaidItem>
                );
              }) : (
                raids.map((raidRow, i) => (
                  <RaidRow key={i} row={i}>
                    {raidRow.map((raid, j) => {
                      const raidName = raid.name.replace(/[ ']/g, '').toLowerCase();
                      const selected = !!selectedArray.find((name) => raidName === name);

                      return (
                        <RaidItem key={j} data-tip={raid.name}>
                          <Field
                            component="input"
                            type="checkbox"
                            name={`${fields.name}.${raidName}`}
                            id={`${fields.name}.${raidName}`}
                          />
                          <RaidImage selected={selected}>
                            <img src={raid.img} alt={raid.name} />
                          </RaidImage>
                        </RaidItem>
                      );
                    })}
                  </RaidRow>
                ))
              ))}
          </FieldArray>
        </RaidList>

        <NextButton onClick={onNextClick}>
          <span>Continue</span>
        </NextButton>
      </QuestionContent>
    </RaidQuestionContainer>
  );
};

type Props = i.QuestionComponentProps;

export default RaidQuestion;
