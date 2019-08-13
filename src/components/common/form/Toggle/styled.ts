import styled from 'styled-components';
import 'react-toggle/style.css';
import { Paragraph } from 'common/typography';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;

  ${Paragraph} {
    margin-left: 8px;
    font-size: 16px;
    color: ${(props) => props.theme.color.secondary.darker};
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: ${(props) => props.theme.color.positive};
  }

  .react-toggle--checked .react-toggle-track {
    background-color: ${(props) => props.theme.color.positive};
  }
`;
