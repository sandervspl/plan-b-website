import { createGlobalStyle } from 'styled-components';
import styledNormalize from './normalize';
import theme from './theme';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');
  
  ${styledNormalize};

  * {
    box-sizing: border-box;
  }

  body, html {
    width: 100%;
    background-color: ${theme.color.background};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.primary};
    color: ${theme.color.secondary};
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  a.disabled,
  span.disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    appearance: none; 
    margin: 0; 
  }

  select {
    appearance: none;
  }

  #__next {
    height: 100vh;

    > div {
      height: 100%;
      display: flex;
    }
  }
`;
