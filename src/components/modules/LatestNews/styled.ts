import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import { media } from 'styles';

const SlickSliderStyle = css`
  .slick-slide {
    height: 100%;
    /* border-right: 20px solid transparent; /* Used for spacing between cards */
    
    > div {
      height: 100%;
      box-shadow: ${(props) => props.theme.shadow.card};
      border-radius: 2px;
      overflow: hidden;
    }
  }
`;

export const LatestNewsContainer = styled.div`
  ${SlickSliderStyle};
  margin-top: 30px;
  width: 100%;
  height: 187px;
  border-color: ${(props) => props.theme.color.border.primary};
  border-top: 1px solid;
  border-bottom: 1px solid;

  ${media.tablet`
    height: 410px;
  `}
`;

