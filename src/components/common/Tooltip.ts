import styled from 'styled-components';
import ReactToolTip from 'react-tooltip';

export const Tooltip = styled(ReactToolTip)`
  && {
    padding: 6px 15px;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 13px;
    color: ${(props) => props.theme.color.secondary};
  }
`;
