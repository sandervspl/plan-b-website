import styled from 'styled-components';
import { MarkdownPageContainer, MarkdownContent } from 'common/MarkdownPage/styled';
import { media } from 'styles';

export const AboutContainer = styled(MarkdownPageContainer)`
  margin-top: 0;

  ${MarkdownContent} h1 {
    margin-top: 15px;
  }

  ${media.tablet`
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => props.theme.color.border.primary};

    ${MarkdownContent} h1 {
      margin-top: 35px;
    }
  `}
`;
