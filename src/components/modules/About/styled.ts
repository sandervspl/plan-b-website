import styled from 'styled-components';
import { media } from 'styles';

export const AboutContainer = styled.div`
  margin-top: 55px;
  background: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border.primary};

  ${media.tablet`
    margin-top: 25px;
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
    font-size: 18px;
    line-height: 28px;

    ${media.tablet`
      margin-bottom: 25px;
    `}
  }

  img {
    position: relative;
    left: -21px;
    margin: 35px 0;
    width: 100vw;

    ${media.tablet`
      left: 0;
      margin: 70px 0 50px;
      width: 100%;
    `}
  }
`;
