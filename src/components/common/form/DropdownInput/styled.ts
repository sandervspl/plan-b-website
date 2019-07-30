import styled, { css } from 'styled-components';
import BaseDropdownIcon from 'vectors/arrow-drop-down.svg';
import { ParagraphStyle } from 'common/typography';
import { media } from 'styles';

export const DropdownIcon = styled(BaseDropdownIcon)<DropdownIconProps>`
  position: absolute;
  top: 12px;
  left: 230px;
  width: 25px;
  height: 25px;
  fill: ${(props) => props.theme.color.secondary};
  transition: transform .2s linear;

  ${media.tablet`
    top: 15px;
    left: 270px;
  `}

  ${(props) => props.isopen && css`
    transform: rotate(180deg);
  `}
`;

type DropdownIconProps = {
  isopen?: boolean;
}

export const DropdownContainer = styled.div`
  position: relative;

  input:hover {
    cursor: pointer;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 53px;
  left: 0;
  z-index: 1;
  padding: 0;
  margin: 0;
  width: 300px;
  background-color: ${(props) => props.theme.color.background.content};
  list-style: none;
  box-shadow: ${(props) => props.theme.shadow.innerContent};
`;

export const ListItem = styled.li<ListItemProps>`
  ${ParagraphStyle};
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #272727;
  }

  img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  ${(props) => props.isHighlighted && css`
    background-color: #272727;
  `}
`;

type ListItemProps = {
  isHighlighted?: boolean;
}
