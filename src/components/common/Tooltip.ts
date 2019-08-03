import styled from 'styled-components';
import ReactToolTip from 'react-tooltip';

export const Tooltip = styled(ReactToolTip)`
  && {
    font-family: ${(props) => props.theme.font.primary};
    font-size: 14px;
    color: ${(props) => props.theme.color.secondary};
  }
`;
