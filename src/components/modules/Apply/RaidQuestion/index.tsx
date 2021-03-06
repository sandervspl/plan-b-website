import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import _ from 'lodash';
import { useSelector, useGetFirebaseImage } from 'hooks';
import { Tooltip } from 'common';
import QuestionHeader from '../QuestionHeader';
import { NextButton, QuestionContent } from '../styled';
import { RaidList, RaidItem, RaidImage, RaidRow, RaidQuestionContainer } from './styled';

const RaidQuestion: React.FC<Props> = ({ onNextClick, inputTabIndex, formValues }) => {
  const isMobile = useSelector((state) => state.ui.isMobile);

  const raids = [
    [
      {
        name: 'molten core',
        value: 'molten_core',
        img: useGetFirebaseImage('raids', 'molten-core.png'),
      }, {
        name: 'onyxia',
        value: 'onyxia',
        img: useGetFirebaseImage('raids', 'onyxia.jpg'),
      }, {
        name: 'blackwing lair',
        value: 'blackwing_lair',
        img: useGetFirebaseImage('raids', 'blackwing-lair.jpg'),
      },
    ],
    [
      {
        name: 'zul\'Gurub',
        value: 'zul_gurub',
        img: useGetFirebaseImage('raids', 'zul\'gurub.jpg'),
      }, {
        name: 'ahn\'Qiraj (20)',
        value: 'aq_20',
        img: useGetFirebaseImage('raids', 'aq20.jpg'),
      }, {
        name: 'ahn\'Qiraj (40)',
        value: 'aq_40',
        img: useGetFirebaseImage('raids', 'aq40.jpg'),
      }, {
        name: 'naxxramas',
        value: 'naxxramas',
        img: useGetFirebaseImage('raids', 'naxxramas.jpg'),
      },
    ],
  ];

  const selected = formValues.raid_experience || {};
  const selectedArray = Object.keys(selected).filter((raid) => selected[raid]);

  return (
    <RaidQuestionContainer>
      <Tooltip effect="solid" delayShow={500} />

      <QuestionHeader>
        Raid experience
      </QuestionHeader>

      <QuestionContent fullSize>
        <RaidList>
          {isMobile ? _.flatten(raids).map((raid) => {
            const selected = !!selectedArray.find((name) => raid.value === name);

            return (
              <RaidItem key={raid.value} data-tip={raid.name}>
                <Field
                  component="input"
                  type="checkbox"
                  name={`raid_experience.${raid.value}`}
                  id={`raid_experience.${raid.value}`}
                  tabIndex={inputTabIndex}
                />
                <RaidImage selected={selected}>
                  <img src={raid.img} alt={raid.name} loading="lazy" />
                </RaidImage>
              </RaidItem>
            );
          }) : (
            raids.map((raidRow, i) => (
              <RaidRow key={i} row={i}>
                {raidRow.map((raid) => {
                  const selected = !!selectedArray.find((name) => raid.value === name);

                  return (
                    <RaidItem key={raid.value} data-tip={raid.name}>
                      <Field
                        component="input"
                        type="checkbox"
                        name={`raid_experience.${raid.value}`}
                        id={`raid_experience.${raid.value}`}
                        tabIndex={inputTabIndex}
                      />
                      <RaidImage selected={selected}>
                        <img src={raid.img} alt={raid.name} loading="lazy" />
                      </RaidImage>
                    </RaidItem>
                  );
                })}
              </RaidRow>
            )))}
        </RaidList>

        <NextButton onClick={onNextClick} tabIndex={inputTabIndex}>
          <span tabIndex={-1}>Continue</span>
        </NextButton>
      </QuestionContent>
    </RaidQuestionContainer>
  );
};

type Props = i.QuestionComponentProps;

export default RaidQuestion;
