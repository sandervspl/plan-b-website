import styled, { css } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import { media } from 'styles';

const SlickSliderStyle = css`
  .slick-slide {
    height: 187px;
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
  margin: 30px 0 60px;
  width: 100%;
  border-color: ${(props) => props.theme.color.border.primary};
  border-top: 1px solid;
  border-bottom: 1px solid;

  ${media.tablet`
    display: flex;
    position: relative;
    margin: 90px auto 150px;
    height: 595px;
    max-width: ${(props) => props.theme.width.page};
  `}
`;

