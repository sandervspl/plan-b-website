import styled from 'styled-components';
import { EmptyStateText } from 'common';
import { media } from 'styles';

export const GraphsContainer = styled.div`
  position: relative;
  margin-top: 32px;

  .slick-slide {
    display: inline-block;
    border-right: 8px solid transparent;
    transform: translateX(24px);
  }

  ${EmptyStateText} {
    width: 100%;
    font-size: 16px !important;
    text-align: center;
  }

  ${media.tablet`
    display: flex;
    justify-content: space-between;
  `}
`;
