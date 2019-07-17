import * as i from 'types';
import React from 'react';
import { getCmsUrl } from 'services';
import { RaidsContainer, RaidImage } from './styled';

const images = {
  molten_core: '/uploads/63665bc56dd34b07a261aa0a0248c5c1.png',
  onyxia: '/uploads/99b4bd17f4ba4ff6bf4d7f319f5f9132.jpg',
  blackwing_lair: '/uploads/ee721c9713114a7c9608e4bc21080e59.jpg',
  zul_gurub: '/uploads/a508d76fc2c54e7d83200200c0a2092c.jpg',
  aq_20: '/uploads/60a07a072b0f426fac9ca157f1172a2e.jpg',
  aq_40: '/uploads/482ba7369a054c1b84eba01f7c4fc02f.jpg',
  naxxramas: '/uploads/ec15253b4a544d069921ae76dcb39e8c.jpg',
};

const Raids: React.FC<Props> = ({ raids }) => {
  return (
    <RaidsContainer>
      {Object.entries(images).map(([raidKey, imageUrl]) => (
        <RaidImage key={raidKey} isactive={raids[raidKey]}>
          <img src={getCmsUrl(imageUrl)} alt={raidKey} />
        </RaidImage>
      ))}
    </RaidsContainer>
  );
};

type Props = {
  raids: i.RaidExperience;
};

export default Raids;
