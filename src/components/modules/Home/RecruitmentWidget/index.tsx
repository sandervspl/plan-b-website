import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import { __OLD__Header, TransitionPost } from 'common';
import { getRecruitmentClassSpecs } from 'ducks/recruitment/reselect';
import RecruitmentClassGrid from '../RecruitmentClassGrid';
import { RecruitmentBlock, RecruitmentContent } from './styled';

const RecruitmentWidget: React.FC<Props> = ({ recruitment, playerClasses }) => (
  <TransitionPost direction="right">
    {(visible) => (
      <RecruitmentBlock>
        <RecruitmentContent isVisible={visible}>
          {recruitment && (
              <>
                <__OLD__Header dark>{recruitment.title}</__OLD__Header>
                <RecruitmentClassGrid playerClasses={playerClasses} />
              </>
          )}
        </RecruitmentContent>
      </RecruitmentBlock>
    )}
  </TransitionPost>
);

export type Props = {
  recruitment: i.RecruitmentData;
  playerClasses: i.PlayerClassesSpecs;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  recruitment: state.recruitment.data,
  playerClasses: getRecruitmentClassSpecs(state),
});

export default connect(mapStateToProps)(RecruitmentWidget);
