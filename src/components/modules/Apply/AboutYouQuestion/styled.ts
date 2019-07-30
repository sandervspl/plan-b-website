import styled from 'styled-components';
import { media } from 'styles';
import { Bar, Highlight } from 'common/form/input/styled';

export const PersonalGrid = styled.div`
  margin-top: 20px;
  width: 100%;

  ${media.tablet`
    display: grid;
    grid-template-columns: 50% 50%;

    > div:nth-child(2) {
      ${Highlight},
      ${Bar} {
        width: 500px;
      }
    }

    textarea {
      width: 500px;
    }

    + button {
      position: fixed;
      bottom: 30px;
    }
  `}
`;
