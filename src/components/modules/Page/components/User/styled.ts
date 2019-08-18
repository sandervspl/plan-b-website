import styled from 'styled-components';
import { CircleImgContainer } from 'common/CircleImg/styled';
import { DKPContainer } from 'common/DKP/styled';
import { media } from 'styles';

export const UserContainer = styled.div`
  position: relative;
`;

export const UserInfo = styled.button`
  appearance: none;
  display: none;

  ${CircleImgContainer} {
    margin: 0;
    width: 32px;
    height: 32px;
  }

  ${media.tablet`
    display: flex;
    justify-content: flex-end;
    position: relative;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    outline: 0;
  `}
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  top: -5px;
  margin-right: 10px;

  ${DKPContainer} {
    text-align: right;
  }
`;

export const Username = styled.span`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 13px;
  color: ${(props) => props.theme.color.secondary.darker};
  letter-spacing: 0;
  text-align: right;
`;
