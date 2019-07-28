import styled from 'styled-components';
import { media } from 'styles';
import { Heading, Button } from 'common';
import { NextButton } from '../styled';

export const ProfessionsGrid = styled.div`
  width: 100%;

  ${Heading} {
    margin-bottom: 20px;
    color: ${(props) => props.theme.color.secondary.darker};
  }

  > div:nth-of-type(n+2) {
    margin-top: 30px;

    ${media.tablet`
      margin: 0;
    `}
  }

  + ${NextButton} {
    margin-top: 30px;
  }
  
  ${media.tablet`
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 10%;

    ${Button} {
      padding: 8px 18px;
      font-size: 18px;
      width: auto;
    }
  `}
`;
