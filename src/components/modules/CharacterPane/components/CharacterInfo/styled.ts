import styled from 'styled-components';
import { Subheader, Header } from 'common';
import { media } from 'styles/utils';

export const CharacterInfoContainer = styled.div`
  display: flex;
  padding: 0 30px;
  width: 100%;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 100%;
  border: 1px solid ${(props) => props.theme.color.border.light};
`;

export const CharacterDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  transform: translateY(-5px);

  ${Header} {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
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
