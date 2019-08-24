import styled from 'styled-components';
import { EmptyStateText } from 'common';

export const GraphsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;

  ${EmptyStateText} {
    width: 100%;
    font-size: 16px !important;
    text-align: center;
  }
`;
