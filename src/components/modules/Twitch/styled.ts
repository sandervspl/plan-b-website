import styled from 'styled-components';
import { media } from 'styles';
import { Heading, Small, GradientHeadingStyle } from 'common';

export const TwitchContainer = styled.div`
  background-color: ${(props) => props.theme.color.background.content};
  border-bottom: 1px solid ${(props) => props.theme.color.border.primary};

  > ${Heading} {
    ${GradientHeadingStyle};

    ${media.tablet`
      margin-bottom: 20px;
      padding: 15px 20px;
      font-size: 24px;
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
    grid-column: 14 / 21;
    border: 1px solid ${(props) => props.theme.color.border.primary};
    border-left: 0;
    border-top: 0;
  `}
`;

export const NoStreamers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;

  ${Small} {
    text-align: center;
  }
`;

export const StreamsContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
