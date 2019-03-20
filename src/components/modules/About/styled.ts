import styled from 'styled-components';
import { BaseTextStyle, ParagraphStyle } from 'common/typography';

export const AboutContent = styled.div`
  max-width: 740px;

  * {
    ${BaseTextStyle};
    margin-bottom: 30px;
  }

  p {
    ${ParagraphStyle};
    margin-bottom: 30px;
  }

  ul, ol {
    margin-left: -25px;
    counter-reset: li 0;
    list-style: none;

    li {
      ${ParagraphStyle};
      counter-increment: li 1;
      position: relative;
      padding-left: 25px;
      margin-bottom: 25px;

      &:before {
        position: absolute;
        left: -16px;
        width: 12px;
        text-align: right;
        color: ${(props) => props.theme.color.primary};
      }
    }
  }

  ol li {
    &:before {
      content: counter(li) ".";
    }
  }

  ul li {
    &:before {
      content: "•";
      top: -5px;
      font-size: 25px;
    }
  }

  b, strong {
    font-weight: 600;
  }

  a {
    color: ${(props) => props.theme.color.primary};
    transition: color 100ms linear;

    &:hover {
      color: ${(props) => props.theme.color.primary.medium};
    }
  }

  img {
    width: 100%;
    margin: 20px 0;
  }
`;
