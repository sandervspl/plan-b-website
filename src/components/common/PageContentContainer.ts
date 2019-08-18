import styled from 'styled-components';
import { media } from 'styles';

export const PageContentContainer = styled.div`
  margin-top: 20px;
  background-color: ${(props) => props.theme.color.background.content};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.color.border.primary};

  ${media.tablet`
    margin-top: 0;
    border: 1px solid ${(props) => props.theme.color.border.primary};
  `}
`;
