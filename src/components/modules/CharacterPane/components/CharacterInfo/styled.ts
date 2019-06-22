import styled from 'styled-components';
import { Subheader, __OLD__Header } from 'common';
import { media } from 'styles';

export const CharacterInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  ${media.tablet`
    padding: 0 30px;
  `}
`;

export const Avatar = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.color.secondary};

  ${media.tablet`
    width: 84px;
    height: 84px;
  `}
`;

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  transform: translateY(-5px);

  ${__OLD__Header} {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 20px;
    
    ${media.tablet`
      font-size: 35px;
    `}
  }
`;

export const Guild = styled(Subheader)`
  margin: 0;
  font-size: 14px;

  ${media.tablet`
    font-size: 20px;
  `}
`;

export const ClassAndLevel = styled(Subheader)`
  margin: 0;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 300;

  ${media.tablet`
    font-size: 15px;
  `}
`;
