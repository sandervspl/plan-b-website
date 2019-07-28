import styled from 'styled-components';
import { media } from 'styles';
import { LatestNewsContainer } from './LatestNews/styled';
import { OtherNewsContainer } from './OtherNews/styled';

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.color.background.content};

  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(20, 1fr);

    > *:nth-child(1) {
      grid-column: 1 / 14;
    }

    ${LatestNewsContainer},
    ${OtherNewsContainer} {
      box-shadow: ${(props) => props.theme.shadow.innerContent};
      z-index: 1;
    }
  `}
`;
