import styled from 'styled-components';
// import { darken } from 'polished';
import { media } from 'styles';

export const ClassTextContainer = styled.li<ClassTextContainerProps>`
  display: flex;
  flex-basis: 30%;
  position: relative;
  margin-bottom: 15px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};

  span {
    z-index: 1;
  }

  /* &:before {
    content: attr(data-shadow-text);
    position: absolute;
    top: 2px;
    left: 24px;
    z-index: 0;
    color: ${(props) => darken(.35, props.color)}
  } */

  ${media.tablet`
    font-size: 40px;
    align-items: center;
    margin-bottom: 20px;
  `}
`;

type ClassTextContainerProps = {
  color: string;
  'data-shadow-text': string;
}

export const ClassIcon = styled.img`
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 18px;
  box-shadow: ${(props) => props.theme.shadow.icon};

  ${media.tablet`
    margin-right: 15px;
    width: 26px;
    height: 26px;
  `}
`;
