import styled from 'styled-components';
import { media } from 'styles';
import { PostContent } from 'common/NewsItem/styled';

export const SliderContainer = styled.div`
  position: relative;
  height: 100%;
  background-color: ${(props) => props.theme.color.background.content};

  ${PostContent} {
    ${media.tablet`
      bottom: 30px;
    `}
  }
`;
