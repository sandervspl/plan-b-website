import styled from 'styled-components';
import { media } from 'styles';

export const HomeContainer = styled.div`
  background-color: ${(props) => props.theme.color.background.content};

  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(20, 1fr);

    > *:nth-child(1) {
      grid-column: 1 / 14;
    }
  `}
`;
