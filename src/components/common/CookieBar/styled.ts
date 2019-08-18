import styled from 'styled-components';
import { ParagraphStyle } from 'common/typography';
import { Button } from 'common';
import { media } from 'styles';

export const CookieBarContainer = styled.div`
  ${ParagraphStyle};
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 10;
  padding: 5px;
  padding: 15px 20px;
  width: 100vw;
  background-color: ${(props) => props.theme.color.background};
  font-size: 14px;
  line-height: 1;

  > div {
    display: flex;
    align-items: center;
    margin-top: 10px;

    svg {
      
    }

    ${media.tablet`
      margin: 0;

      svg {
        cursor: pointer;
      }
    `}
  }

  ${media.tablet`
    align-items: center;
    flex-direction: row;
    left: 50%;
    right: 50%;
    bottom: 20px;
    transform: translateX(-260px);
    width: 520px;
    font-size: 16px;
  `}
`;

export const ConsentButton = styled(Button)`
  padding: 7px 12px;
  font-size: 14px;

  ${media.tablet`
    margin: 0 20px;
    font-size: 16px;
  `}
`;

// export const CloseIcon = styled(FontAwesomeIcon).attrs({ icon: 'times' })`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   width: 17px;
//   height: 17px;
//   fill: ${(props) => props.theme.color.secondary};

//   ${media.tablet`
//     position: static;
//     width: 20px;
//     height: 20px;
//     cursor: pointer;
//   `}
// `;
