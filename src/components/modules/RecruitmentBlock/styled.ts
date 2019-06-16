import styled from 'styled-components';
import { Link, UnderlineStyle } from 'common';
import { media } from 'styles';
import { HeadingContainer, Text } from 'common/typography/Heading/style';

export const RecruitmentBlockContainer = styled.div`
  position: relative;
  padding: 35px 25px 30px;
  margin-bottom: 45px;
  width: 100%;
  background-color: ${(props) => props.theme.color.blocks.recruitment};

  ${HeadingContainer} {
    position: absolute;
    top: -35px;
    transform: translateY(-50%);

    ${media.tablet`
      top: -85px;
      margin-left: 50px;
    `}
    
    ${Text} {
      font-size: 24px;

      ${media.tablet`
        font-size: 50px;
      `}
    }
  }

  ${media.tablet`
    padding: 85px 60px 50px;
    margin-bottom: 170px;
  `}
`;

export const RecruitmentBlockInner = styled.div`
  position: relative;
  
  ${media.tablet`
    margin: 0 auto;
    max-width: ${(props) => props.theme.width.page};
  `}
`;

export const Disclaimer = styled.small`
  display: block;
  margin-top: 15px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 12px;
  line-height: 17px;
  color: #FFFFFF;


  ${media.tablet`
    margin-top: 70px;
    font-size: 14px;
  `}
`;

export const ApplyNow = styled(Link)`
  display: block;
  margin-top: 25px;
  width: 100%;
  text-align: right;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 30px;
  font-weight: bold;
  color: #FFFFFF;
  text-transform: uppercase;

  ${media.tablet`
    position: absolute;
    top: -35px;
    right: 60px;
    width: auto;
    font-size: 50px;

    &:after {
      ${UnderlineStyle};
      height: 4px;
      background: #FFFFFF;
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
