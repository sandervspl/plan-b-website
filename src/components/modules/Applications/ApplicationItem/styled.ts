import styled from 'styled-components';
import { ParagraphStyle, ClassText } from 'common';
import { CircleIconContainer } from 'common/CircleIcon/styled';

export const ApplicationItemContainer = styled.li`
  margin-bottom: 5px;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  border: 1px solid ${(props) => props.theme.color.border.primary};

  a {
    ${ParagraphStyle};
    display: flex;
    align-items: center;
    padding: 10px 15px;
    width: 100%;

    > ${CircleIconContainer} {
      width: 30px;
      height: 30px;
    }
  }
`;

export const RoleText = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.color.secondary.darker};
`;

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;

  ${CircleIconContainer} {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;

  ${ClassText} {
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
`;

export const CommentsContainer = styled.div`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 13px;

  svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.color.secondary};
  }
`;
