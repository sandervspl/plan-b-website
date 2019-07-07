import styled from 'styled-components';
import DKPSvg from 'vectors/dkp.svg';

export const UserContainer = styled.div`
  position: relative;
`;

export const UserInfo = styled.button`
  appearance: none;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  outline: 0;
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  top: -5px;
  margin-right: 10px;
`;

export const DKPContainer = styled.div`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 15px;
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 0;
  text-align: right;
`;

export const DKPIcon = styled(DKPSvg)`
  position: relative;
  top: 3px;
  margin-right: 5px;
  height: 19px;
  fill: ${(props) => props.theme.color.secondary};
`;

export const Username = styled.span`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 13px;
  color: #8E9496;
  letter-spacing: 0;
  text-align: right;
`;
