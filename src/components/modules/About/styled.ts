import styled from 'styled-components';
import { media } from 'styles';

export const AboutContainer = styled.div`
  margin-top: 20px;
  background-color: ${(props) => props.theme.color.background.content};
  border: 1px solid ${(props) => props.theme.color.border.primary};

  ${media.tablet`
    margin-top: 0;
  `}

  h1, h2, h3, h4, h5, h6, p {
    margin: 0 21px;
    color: ${(props) => props.theme.color.secondary};
    font-family: ${(props) => props.theme.font.primary};

    ${media.tablet`
      margin: 0 40px;
    `}
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 30px;
    margin-bottom: 15px;

    ${media.tablet`
      margin-top: 60px;
    `}
  }

  h1:first-child {
    line-height: 1.5;
    border-bottom: 1px solid ${(props) => props.theme.color.border.primary.light};

    ${media.tablet`
      margin-bottom: 35px;
      line-height: 1.2;
    `}
  }

  h2 {
    font-size: 21px;

    ${media.tablet`
      font-size: 30px;
    `}
  }

  h3 {
    font-size: 19px;

    ${media.tablet`
      font-size: 26px;
    `}
  }

  p {
    position: relative;
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 28px;

    ${media.tablet`
      margin-bottom: 25px;
    `}
  }

  img {
    position: relative;
    left: -21px;
    margin: 25px 0 15px;
    width: 100vw;

    ${media.tablet`
      left: 0;
      margin: 50px 0 30px;
      width: 100%;
    `}
  }
`;
