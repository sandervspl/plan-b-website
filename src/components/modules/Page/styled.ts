import styled from 'styled-components';
import { media } from 'styles';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: ${(props) => props.theme.color.background};
`;

export const PageContent = styled.div`
  width: 100%;

  ${media.tablet`
    margin: 0 auto;
    max-width: 1005px;
  `}
`;
