import styledNormalize from './normalize';
import { createGlobalStyle } from 'styled-components';

import PlayfairRegularFont from 'fonts/playfair-display/PlayfairDisplay-Regular.otf';

import theme from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Heebo:400,500,700');
  
  ${styledNormalize};

  @font-face {
    font-family: 'playfair';
    src: url(${PlayfairRegularFont});
    font-weight: normal;
  }

  h1, h2, h3 {
    font-family: ${theme.font.primary};
  }
`;
