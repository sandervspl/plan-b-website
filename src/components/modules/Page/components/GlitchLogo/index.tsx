import * as React from 'react';
import { Link, Glitch, GlitchNameLogo } from 'common';

const GlitchLogo: React.FC = () => (
  <Link to="home">
    <Glitch>
      <GlitchNameLogo />
    </Glitch>
  </Link>
);

export default GlitchLogo;
