import styled from 'styled-components';
import { media } from 'styles';

export const CircleImgContainer = styled.figure`
  position: relative;
  margin: 0;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: ${(props) => props.theme.color.background};
  overflow: hidden;

  ${media.tablet`
    margin-right: 8px;
    width: 26px;
    height: 26px;
  `}
`;

export const CircleImgInner = styled.img.attrs({ loading: 'lazy' })`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;
