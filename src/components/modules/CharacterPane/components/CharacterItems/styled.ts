import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { media } from 'styles';

export const CharacterItemsContainer = styled.div`
  display: none;

  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(6, 40px);
    grid-template-rows: repeat(3, 40px);
    column-gap: 10px;
    row-gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    overflow: hidden;
  `}
`;

export const StyledTooltip = styled(ReactTooltip)`
  && {
    color: ${(props) => props.theme.color.secondary};
    font-family: ${(props) => props.theme.font.primary};
  }
`;
