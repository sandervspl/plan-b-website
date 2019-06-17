import styled from 'styled-components';
import { HeadingContainer } from 'common/typography/__OLD__Heading/style';
import { media } from 'styles';
import { Link, UnderlineStyle } from 'common';

export const OtherNewsContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
  padding: 35px 0 30px;
  background-color: ${(props) => props.theme.color.blocks.otherNews};

  > ${HeadingContainer} {
    position: absolute;
    top: 0;
    margin-left: 25px;
    transform: translateY(-50%);

    h2 {
      font-size: 20px;
    }
  }

  ${media.tablet`
    margin: 0 auto 170px;
    padding-top: 75px;
    max-width: ${(props) => props.theme.width.page};

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 85px;
      height: 100%;
      background-color: ${(props) => props.theme.color.background};
    }

    > ${HeadingContainer} {
      margin-left: 50px;

      h2 {
        font-size: 50px;
      }
    }
  `}
`;

export const OlderNewsLink = styled(Link)`
  display: table; /* idk why this works, but it removes full width */
  margin: 25px 25px 0 auto;
  text-align: right;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;

  ${media.tablet`
    position: relative;
    margin-right: 60px;
    width: auto;
    font-size: 50px;

    &:after {
      ${UnderlineStyle};
      height: 4px;
      background-color: ${(props) => props.theme.color.background};
      transform: scaleX(0);
      will-change: transform;
      transition: transform .2s ease-in-out;
      transform-origin: 100% 50%;
      transform-style: preserve-3d;
      backface-visibility: hidden;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
  `}
`;
