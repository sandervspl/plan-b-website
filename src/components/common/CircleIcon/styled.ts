import styled from 'styled-components';
import { media } from 'styles';

export const CircleIconContainer = styled.figure`
  position: relative;
  margin: 0;
  margin-right: 10px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: ${(props) => props.theme.color.background};
  overflow: hidden;

  ${media.tablet`
    margin-right: 15px;
    width: 26px;
    height: 26px;
  `}
`;

export const CircleIconImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;
