import styled from 'styled-components';
import { media } from 'styles';

export const ClassTextContainer = styled.span<ClassTextContainerProps>`
  display: flex;
  position: relative;
  margin-bottom: 15px;
  margin-right: 15px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};

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
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ClassIconImg = styled.figure`
  margin: 0;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 18px;
  background: ${(props) => props.theme.color.background};
  box-shadow: ${(props) => props.theme.shadow.icon};
  overflow: hidden;

  ${media.tablet`
    margin-right: 15px;
    width: 26px;
    height: 26px;
  `}
`;
