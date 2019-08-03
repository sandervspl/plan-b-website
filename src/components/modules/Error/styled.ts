import styled from 'styled-components';
import { Heading, Paragraph } from 'common';

export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    ${Heading}:first-child {
      margin-bottom: 5px;
      color: ${(props) => props.theme.color.primary};
      text-align: center;
    }

    ${Paragraph} {
      margin-top: 20px;
      color: ${(props) => props.theme.color.primary.dark};
    }
  }
`;
