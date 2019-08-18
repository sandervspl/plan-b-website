import styled from 'styled-components';
import { Link, Heading, Small, GradientHeadingStyle } from 'common';
import { media } from 'styles';

export const RecruitmentBlockContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${(props) => props.theme.color.background.content};

  ${media.tablet`
    padding-top: 0;
    grid-column: 15 / 21;
    position: relative;
    padding-bottom: 50px;
    height: 410px;
    overflow: hidden;
    border-color: ${(props) => props.theme.color.border.primary};
    border-top: 1px solid;
    border-right: 1px solid;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const RecruitmentInner = styled.div`
  ${Small} {
    padding: 0 15px;
  }

  ${Heading} {
    ${GradientHeadingStyle};
    margin-bottom: 20px;
    font-size: 20px;
    border-top: 0;

    ${media.tablet`
      padding: 15px 20px;
      font-size: 24px;
    `}
  }
  
  ${media.tablet`
    height: 100%;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const ApplyNow = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  padding: 10px 0;
  width: 100%;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.primary};

  svg {
    margin-left: 5px;
    width: 25px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translateY(-2px);
  }

  ${media.tablet`
    position: absolute;
    bottom: 0;
    padding: 15px 0;
    font-size: 20px;
    transition: background-color .25s ease-in-out;

    svg {
      transition: transform .25s ease-in-out;
      transform: translateY(0);
    }

    &:hover {
      background-color: ${(props) => props.theme.color.primary.dark};

      svg {
        transform: translate3d(5px, 0, 0);
      }
    }
  `}
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 10px;
    width: 120px;
  }

  p {
    text-align: center;
  }
`;
