import styled from 'styled-components';
import { media } from 'styles';

export const Small = styled.small`
  display: block;
  margin-top: 10px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 12px;
  line-height: 14px;
  color: ${(props) => props.theme.color.text.disclaimer};

  ${media.tablet`
    margin-top: 20px;
    font-size: 14px;
    line-height: 20px;
  `}
`;
