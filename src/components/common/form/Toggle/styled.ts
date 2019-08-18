import styled from 'styled-components';
import 'react-toggle/style.css';
import { Paragraph } from 'common/typography';
import { media } from 'styles';

export const ToggleContainer = styled.label`
  display: flex;
  align-items: center;

  ${Paragraph} {
    margin-left: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.color.secondary.darker};

    ${media.tablet`
      font-size: 16px;
    `}
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: ${(props) => props.theme.color.positive};
  }

  .react-toggle--checked .react-toggle-track {
    background-color: ${(props) => props.theme.color.positive};
  }
`;
