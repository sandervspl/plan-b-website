import styled from 'styled-components';
import DKPSvg from 'vectors/dkp.svg';
import { CircleImgContainer } from 'common/CircleImg/styled';

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

  ${CircleImgContainer} {
    margin: 0;
    width: 32px;
    height: 32px;
  }
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
  color: ${(props) => props.theme.color.secondary.darker};
  letter-spacing: 0;
  text-align: right;
`;
