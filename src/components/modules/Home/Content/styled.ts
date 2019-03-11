import styled from 'styled-components';
import { media } from 'styles/utils';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  background-color: ${(props) => props.theme.color.secondary};

  ${media.tablet`
    display: grid;
    grid-template-columns: 65% 35%;
    margin: 0 auto;
    max-width: 940px;
  `}

  @media (min-width: 940px) {
    transform: translateY(-50px);
  }
`;
