import styled from 'styled-components';
import { media } from 'styles';
import { Heading, GradientHeadingStyle } from 'common';
import { NewsItemContainer } from 'common/NewsItem/styled';
import { lineClamp } from 'common/styles';

export const OtherNewsContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.background.content};

  > ${Heading} {
    ${GradientHeadingStyle};

    ${media.tablet`
      margin-bottom: 20px;
      padding: 15px 20px;
      font-size: 24px;
    `}
  }

  ${NewsItemContainer} {
    height: 178px;

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
      height: 300px;

      a {
        border: 1px solid ${(props) => props.theme.color.border.primary};
      }
    `}
  }

  ${media.tablet`
    grid-column: 1 / 15;
    border: 1px solid ${(props) => props.theme.color.border.primary};
    border-top: none;
  `}
`;
