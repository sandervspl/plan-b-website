import styled from 'styled-components';
import { Link } from 'common';
import { media } from 'styles';
import { HeadingContainer, Text } from 'common/typography/Heading/style';

export const RecruitmentBlockContainer = styled.div`
  position: relative;
  padding: 35px 25px 30px;
  width: 100%;
  background-color: ${(props) => props.theme.color.blocks.recruitment};

  ${HeadingContainer} {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    
    ${Text} {
      font-size: 24px;

      ${media.tablet`
        font-size: 50px;
      `}
    }
  }

  ${media.tablet`
    padding: 85px 60px 50px;
  `}
`;

export const Disclaimer = styled.small`
  display: block;
  margin-top: 15px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 12px;
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
    top: 50px;
    right: 60px;
    width: auto;
    font-size: 50px;
  `}
`;
