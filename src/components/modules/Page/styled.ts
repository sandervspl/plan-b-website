import styled from 'styled-components';
import bgImg from 'images/bg.jpg?external';
import { getStaticUrl } from 'services';
import { media } from 'styles';

export const PageContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.background};
  
  ${media.tablet`
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url(${getStaticUrl(bgImg)}) center center;
      background-repeat: repeat;
      background-size: cover;
      opacity: .1;
    }

    > div {
      z-index: 1;
    }
  `}
`;

export const PageContent = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1005px;
`;
