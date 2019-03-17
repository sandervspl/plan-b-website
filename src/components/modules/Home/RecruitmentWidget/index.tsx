import * as i from 'types';
import React from 'react';
import { Header, Paragraph } from 'common';
import { connect } from 'react-redux';
import apiConfig from 'services/api/config';
import { getRecruitmentClassSpecs } from 'ducks/recruitment/reselect';
import TransitionPost from '../TransitionPost';
import { RecruitmentBlock, RecruitmentContent, ClassRow, ClassIcon, ClassGrid } from './styled';

const RecruitmentWidget: React.FC<Props> = ({ recruitment, playerClasses }) => (
  <TransitionPost direction="right">
    {(visible) => (
      <RecruitmentBlock>
        <RecruitmentContent visible={visible}>
          <Header dark>{recruitment.title}</Header>
          <ClassGrid>
            {Object.keys(playerClasses).map((plrClass, i) => {
              // Sort on alphabetical order like the talent panel
              const specs = Object.keys(playerClasses[plrClass]).sort((a, b) => a.localeCompare(b));

              return (
                <ClassRow key={i}>
                  <Paragraph dark>{plrClass}</Paragraph>

                  <div>
                    {specs.map((spec, i) => {
                      // Replace underscores with spaces
                      const infoText = `${spec.replace(/_/g, ' ')} ${plrClass}`;
                      const isRecruiting = playerClasses[plrClass][spec];

                      return (
                        <ClassIcon
                          key={i}
                          src={`${apiConfig.apiUrl}uploads/classes/${plrClass}/${spec}.jpg`}
                          alt={infoText}
                          title={infoText}
                          active={isRecruiting}
                        />
                      );
                    })}
                  </div>
                </ClassRow>
              );
            })}
          </ClassGrid>
        </RecruitmentContent>
      </RecruitmentBlock>
    )}
  </TransitionPost>
);

export type Props = {
  recruitment: i.RecruitmentData;
  playerClasses: { [x: string]: { [x: string ]: boolean } };
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  recruitment: state.recruitment.data,
  playerClasses: getRecruitmentClassSpecs(state),
});

export default connect(mapStateToProps)(RecruitmentWidget);
