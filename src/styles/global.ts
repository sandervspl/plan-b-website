import { createGlobalStyle } from 'styled-components';
import PlayfairRegularFont from 'fonts/playfair-display/PlayfairDisplay-Regular.otf';
import styledNormalize from './normalize';
import theme from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Heebo:300,400,700');
  
  ${styledNormalize};

  @font-face {
    font-family: 'playfair';
    src: url(${PlayfairRegularFont});
    font-weight: normal;
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    height: 100%;
    background-color: ${theme.color.secondary.dark};
  }

  h1, h2, h3 {
    font-family: ${theme.font.primary};
    color: ${theme.color.primary};
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;
