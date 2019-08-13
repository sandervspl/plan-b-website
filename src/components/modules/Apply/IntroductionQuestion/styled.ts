import styled from 'styled-components';
import { media } from 'styles';
import { ToggleContainer } from 'common/form/Toggle/styled';

export const IntroGrid = styled.div`
  > div:nth-child(2) {
    display: none;
  }

  ${ToggleContainer} {
    margin-top: 30px;
  }

  ${media.tablet`
    display: grid;
    /* grid-template-columns: 33% 67%; */
    grid-template-columns: 50% 50%;
    height: 100%;

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        opacity: .15;
      }
    }
`}
`;
