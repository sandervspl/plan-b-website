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
}
