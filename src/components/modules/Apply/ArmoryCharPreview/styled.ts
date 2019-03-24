import styled from 'styled-components';
import { media } from 'styles/utils';
import { Header, Paragraph } from 'common';
import LoaderSvg from './loader.svg';

export const ArmoryCharPreviewContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 100%;
`;

export const ArmoryCharacter = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  padding: 20px;
  width: 100%;
  background: ${(props) => props.theme.color.secondary};
  clip-path: polygon(0% 0%, 100% 0%, 95% 0%, 0% 300%);
  cursor: pointer;
  will-change: background;
  transition: background 100ms linear;

  &:hover {
    background: ${(props) => props.theme.color.secondary.hover};
  }
`;

export const Loader = styled(LoaderSvg)`
  flex: 1;
  justify-self: center;
  width: 100px;
  height: 100px;
`;

export const Name = styled(Header)`
  text-transform: none;
  font-size: 35px;
  line-height: 40px;

  ${media.tablet`
    line-height: 40px;
  `}

  span {
    margin-right: 10px;
    font-weight: 100;
    color: ${(props) => props.theme.color.paragraph};
  }
`;

export const Guild = styled(Paragraph)`
  text-transform: none;
  font-size: 20px;
  line-height: 25px;

  ${media.tablet`
    line-height: 25px;
  `}
`;
