import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';

export const LatestNewsContainer = styled.div`
  margin: 30px 0 60px;
  width: 100%;

  .slick-track {
    padding: 2px 0;
  }

  .slick-slide {
    height: 243px;
    border-right: 10px solid transparent; /* Used for spacing between cards */
    
    > div {
      height: 100%;
      box-shadow: ${(props) => props.theme.shadow.card};
      border-radius: 2px;
      overflow: hidden;
    }
  }
`;
