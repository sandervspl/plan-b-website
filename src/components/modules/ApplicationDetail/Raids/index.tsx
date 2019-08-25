import * as i from 'types';
import React from 'react';
import { useGetFirebaseImage } from 'hooks';
import { Tooltip } from 'common';
import { RaidsContainer, RaidImage } from './styled';

const Raids: React.FC<Props> = ({ raids }) => {
  const images = {
    molten_core: useGetFirebaseImage('raids', 'molten-core.png'),
    onyxia: useGetFirebaseImage('raids', 'onyxia.jpg'),
    blackwing_lair: useGetFirebaseImage('raids', 'blackwing-lair.jpg'),
    zul_gurub: useGetFirebaseImage('raids', 'zul\'gurub.jpg'),
    aq_20: useGetFirebaseImage('raids', 'aq20.jpg'),
    aq_40: useGetFirebaseImage('raids', 'aq40.jpg'),
    naxxramas: useGetFirebaseImage('raids', 'naxxramas.jpg'),
  };

  return (
    <RaidsContainer>
      {Object.entries(images).map(([raidKey, imageUrl]) => (
        <RaidImage
          key={raidKey}
          isactive={raids[raidKey]}
          data-for="raid"
          data-tip={raidKey.replace('_', ' ')}
        >
          <img src={imageUrl} alt={raidKey} loading="lazy" />
        </RaidImage>
      ))}

      <Tooltip id="raid" effect="solid" />
    </RaidsContainer>
  );
};

type Props = {
  raids: i.RaidExperience;
};

export default Raids;
