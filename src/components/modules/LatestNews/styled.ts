import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import { media } from 'styles';

const SlickSliderStyle = css`
  .slick-track {
    padding: 2px 0;
  }

  .slick-slide {
    height: 300px;
    border-right: 10px solid transparent; /* Used for spacing between cards */
    
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
  
  margin: 30px 0 60px;
  width: 100%;

  ${media.tablet`
    display: flex;
    position: relative;
    margin-top: 90px;
    height: 595px;
  `}
`;

