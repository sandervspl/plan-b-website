import { createGlobalStyle } from 'styled-components';
import styledNormalize from './normalize';
import theme from './theme';
import { media } from './utils';

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
      display: flex;
    }
  }

  .modal__content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    height: 100vh;
    width: 100vw;
    background: ${theme.color.background.light};
    box-shadow: ${theme.shadow.innerContent};
    outline: 0;
    transform: scale(0.7);
    opacity: 0;
    transition: opacity .3s, transform .3s;
    
    ${media.tablet`
      display: block;
      padding: 40px;
      width: 600px;
      height: auto;
    `}
  }

  .modal__overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transition: opacity .3s;
    background: rgba(0, 0, 0, .4);

    &.ReactModal__Overlay {
      &--after-open {
        opacity: 1;

        > .modal__content {
          transform: scale(1);
          opacity: 1;
        }
      }

      &--before-close {
        opacity: 0;

        > .modal__content {
          transform: scale(0.7);
          opacity: 0;
        }
      }
    }
  }
`;
