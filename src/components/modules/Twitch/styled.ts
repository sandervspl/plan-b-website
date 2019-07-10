import styled from 'styled-components';
import { media } from 'styles';
import { Heading, Small } from 'common';

export const TwitchContainer = styled.div`
  padding-bottom: 20px;
  background-color: ${(props) => props.theme.color.background.content};

  > ${Heading} {
    margin-bottom: 15px;
    padding: 0 15px;

    ${media.tablet`
      margin-bottom: 20px;
      padding: 0 20px;
    `}
  }

  svg {
    display: block;
    height: 75px;
    fill: ${(props) => props.theme.color.text.disclaimer};

    ${media.tablet`
      height: 100px;
    `}
  }

  ${media.tablet`
    grid-column: 1 / 21;
    padding-top: 30px;
    border: 1px solid ${(props) => props.theme.color.border.primary};
    border-top: none;
  `}
`;

export const NoStreamers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${Small} {
    width: 50%;
    text-align: center;
  }
`;