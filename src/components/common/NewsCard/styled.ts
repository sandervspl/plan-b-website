import styled from 'styled-components';
import { HeadingContainer } from 'common/typography/Heading/style';
import { media } from 'styles';
import { Tag } from 'common';
import { lineClamp } from 'common/styles';

export const NewsCardContainer = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const NewsImage = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 95px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NewsContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  transform: translateY(-10px);

  ${media.tablet`
    padding: 0;
  `}
`;

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  margin-left: 25px;
  list-style: none;

  ${Tag}:not(:first-child) {
    margin-left: 5px;
  }

  ${media.tablet`
    padding-right: 0;
  `}
`;

export const NewsHeading = styled.header`
  align-self: flex-start;
  max-width: 95%;
  z-index: 2;

  ${HeadingContainer} {
    margin-left: 25px;
    transform: translateY(-25%);

    h2 {
      ${lineClamp(2)};
      text-align: left;
    }
  }

  ${media.tablet`
    max-width: none;

    ${HeadingContainer} {
      margin-right: 0;
    }
  `}
`;

export const NewsText = styled.p`
  ${lineClamp(3)};
  margin-left: 25px;
  padding-right: 11px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.color.secondary};

  ${media.tablet`
    display: none;
  `}
`;

export const NewsDate = styled(NewsText)`
  display: flex;
  flex-grow: 2;
  align-items: flex-end;
  margin: 0;
  margin-left: 25px;
  font-size: 12px;
`;
