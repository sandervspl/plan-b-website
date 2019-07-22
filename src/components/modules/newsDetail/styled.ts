import styled from 'styled-components';
import { media } from 'styles';
import { Tag, Heading, GradientHeadingStyle } from 'common';
import { MarkdownPageContainer, MarkdownContent } from 'common/MarkdownPage/styled';
import { DateContainer } from 'common/DateText/styled';
import { NewsItemContainer, PostHeading } from 'common/NewsItem/styled';
import { RecruitmentBlockContainer, RecruitmentInner } from 'modules/RecruitmentBlock/styled';
import { TwitchContainer } from 'modules/Twitch/styled';

export const NewsDetailContainer = styled(MarkdownPageContainer)`
  margin-top: 0;
  border-top: 0;

  h1:first-of-type {
    margin-top: 0;
    padding-top: 20px;

    ${media.tablet`
      padding-top: 40px;
    `}
  }

  ${MarkdownContent} {
    margin-bottom: 50px;

    h1, h2, h3, h4, h5, h6, p {
      margin-left: 20px;
      margin-right: 20px;

      ${media.tablet`
        margin-left: 40px;
        margin-right: 40px;
      `}
    }
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    padding-top: 0;
    margin-bottom: 50px;
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => props.theme.color.border.primary};

    > *:nth-child(1) {
      grid-column: 1/14;
    }

    > *:nth-child(2) {
      grid-column: 14/21;
    }
  `}
`;

export const MoreNewsContainer = styled.div`
  ${NewsItemContainer} {
    height: 178px;

    ${DateContainer} {
      font-size: 14px;
    }

    ${PostHeading} ${Heading} {
      font-size: 24px;
    }
  }
`;

export const SidebarContainer = styled.div`
  background-color: ${(props) => props.theme.color.background};

  ${RecruitmentBlockContainer} {
    padding: 0;

    ${RecruitmentInner} {
      padding: 0;

      ul, small {
        padding: 0 20px;
      }

      ${media.tablet`
        ${Heading} {
          border-top: 0;
        }
      `}
    }

    ${media.tablet`
      padding-bottom: 75px;
      height: auto;
      border: 0;
    `}
  }

  div > ${Heading}:first-child {
    ${GradientHeadingStyle};
    padding: 15px 20px;
    font-size: 20px;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: ${(props) => props.theme.color.border.primary};
  }

  ${media.tablet`
    border-left: 1px solid ${(props) => props.theme.color.border.primary};

    ${TwitchContainer} {
      padding-top: 0;
      border: 0;
    }
  `}
`;

export const NewsInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.color.background};
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme.color.border.primary};

  ${DateContainer} {
    margin-right: 20px;
  }

  ${Tag}:not(:last-of-type) {
    margin-right: 15px;
  }

  ${media.tablet`
    padding: 15px 40px;
    border: 1px solid ${(props) => props.theme.color.border.primary};
  `}
`;
