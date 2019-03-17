import styled from 'styled-components';
import { media } from 'styles';

export const HomeContentContainer = styled.div`
  width: 100%;
  transform: translateY(-45px);

  ${media.tablet`
    margin: 0 auto;
    max-width: 940px;
  `}

  @media (min-width: 940px) {
    transform: translateY(-150px);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: ${(props) => props.theme.color.secondary};

  ${media.tablet`
    flex-direction: row;
  `}
`;
