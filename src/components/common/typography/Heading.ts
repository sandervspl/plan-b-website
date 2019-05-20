import styled from 'styled-components';
import { media } from 'styles';

export const Heading = styled.h2`
  padding: 5px 6px;
  background: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #FFFFFF;
  text-align: right;

  ${media.tablet`
    padding: 10px 20px;
    font-size: 30px;
  `}
`;
