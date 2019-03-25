import * as i from 'types';
import React from 'react';
import { getUploadsUrl } from 'services';
import { Paragraph } from 'common';
import { ClassGrid, ClassRow, ClassIcon } from './styled';

const RecruitmentClassGrid: React.FC<Props> = ({ playerClasses }) => (
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
              const isRecruiting: boolean = playerClasses[plrClass][spec];

              return (
                <ClassIcon
                  key={i}
                  src={getUploadsUrl(`classes/${plrClass}/${spec}.jpg`)}
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
);

export type Props = {
  playerClasses: i.PlayerClassesSpecs;
};

export default RecruitmentClassGrid;
