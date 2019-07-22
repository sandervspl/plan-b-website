import styled from 'styled-components';
import { media } from 'styles';
import { Heading, GradientHeadingStyle } from 'common';
import { NewsItemContainer } from 'common/NewsItem/styled';
import { lineClamp } from 'common/styles';

export const OtherNewsContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
  background-color: ${(props) => props.theme.color.background.content};

  > ${Heading} {
    ${GradientHeadingStyle};

    ${media.tablet`
      margin-bottom: 20px;
      border-top: 0;
    `}
  }

  ${NewsItemContainer} {
    height: 125px;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${(props) => props.theme.color.border.primary};

      ${media.tablet`
        border: 0;
      `}
    }

    ${Heading} {
      ${(lineClamp(2))};
    }

    ${media.tablet`
      margin-bottom: 20px;
      padding: 0 20px;
      height: 230px;

      a {
        border: 1px solid ${(props) => props.theme.color.border.primary};
      }
    `}
  }

  ${media.tablet`
    grid-column: 1 / 21;
    border: 1px solid ${(props) => props.theme.color.border.primary};
    border-top: none;
  `}
`;
