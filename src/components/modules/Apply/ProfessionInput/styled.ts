import styled from 'styled-components';
import { media } from 'styles';
import { InputContainer, Bar, StyledInput } from 'common/form/input/styled';

export const ProfessionInputContainer = styled.div`
  margin-bottom: 40px;

  ${media.tablet`
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 25px;

    ${InputContainer} {
      margin-bottom: 0;

      ${StyledInput}, ${Bar} {
        width: 80%;
      }
    }
  `}
`;
