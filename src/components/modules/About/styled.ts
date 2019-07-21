import styled from 'styled-components';
import { MarkdownPageContainer } from 'common/MarkdownPage/styled';
import { media } from 'styles';

export const AboutContainer = styled(MarkdownPageContainer)`
  margin-top: 0;

  ${media.tablet`
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => props.theme.color.border.primary};
  `}
`;
