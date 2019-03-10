import styled from 'styled-components';
import { media } from 'styles/utils';
import { Header } from 'common';

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.color.secondary};

  ${Header} {
    font-size: 40px;
  }

  ${media.tablet`
    margin: 0 auto;
    max-width: 940px;
    transform: translateY(-50px);

    ${Header} {
      font-size: 65px;
    }
  `}
`;
