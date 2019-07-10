import styled from 'styled-components';
import { media } from 'styles';
import { Tag, Heading } from 'common';
import { MarkdownPageContainer } from 'common/MarkdownPage/styled';
import { DateContainer } from 'common/DateText/styled';
import { NewsItemContainer } from 'common/NewsItem/styled';
import { RecruitmentBlockContainer, RecruitmentInner } from 'modules/RecruitmentBlock/styled';

export const NewsDetailContainer = styled(MarkdownPageContainer)`
  
`;

export const MoreNewsContainer = styled.div`
  ${NewsItemContainer} {
    height: 178px;
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
    }
  }

  div > ${Heading}:first-child {
    padding: 15px 20px;
    font-size: 20px;
    text-align: center;
    background-color: ${(props) => props.theme.color.background};
    border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  }
`;

export const NewsInfo = styled.div`
  display: flex;
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
`;

export const HeadImage = styled.figure`
  margin: 0;
  width: 100%;
  height: 150px;
  overflow: hidden;

  > img {
    position: static;
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet`
    height: 200px;
  `}
`;
