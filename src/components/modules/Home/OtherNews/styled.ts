import styled from 'styled-components';
import { media } from 'styles';
import { Heading } from 'common';
import { NewsItemContainer } from 'common/NewsItem/styled';
import { lineClamp } from 'common/styles';

export const OtherNewsContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
  background-color: ${(props) => props.theme.color.background};

  > ${Heading} {
    margin-bottom: 15px;
    padding: 0 15px;

    ${media.tablet`
      margin-bottom: 20px;
      padding: 0 20px;
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
      height: 230px;
    `}
  }

  ${media.tablet`
    grid-column: 1 / 21;
    padding-top: 30px;
    border: 1px solid ${(props) => props.theme.color.border.primary};
    border-top: none;
  `}
`;
