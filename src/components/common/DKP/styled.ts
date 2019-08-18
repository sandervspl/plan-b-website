import styled from 'styled-components';
import DKPSvg from 'vectors/dkp.svg';

export const DKPContainer = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 15px;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0;
`;

export const DKPIcon = styled(DKPSvg)`
  position: relative;
  top: 3px;
  margin-right: 5px;
  height: 19px;
  fill: ${(props) => props.theme.color.secondary};
`;
