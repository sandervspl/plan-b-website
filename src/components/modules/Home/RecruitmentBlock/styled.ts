import styled from 'styled-components';
import { Link, Heading } from 'common';
import { media } from 'styles';

export const RecruitmentBlockContainer = styled.div`
  position: relative;
  padding: 15px 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};

  ${media.tablet`
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

    ${Heading} {
      margin-bottom: 20px;
    }
  `}
`;

export const RecruitmentInner = styled.div`
  padding: 0 10px;

  ${media.tablet`
    padding: 20px;
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
  padding: 15px 0;
  width: 100%;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.color.primary};
  text-transform: uppercase;
  border-top: 1px solid ${(props) => props.theme.color.border.primary};
  border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
  background-color: ${(props) => props.theme.color.background.light};

  svg {
    margin-left: 5px;
    width: 25px;
    fill: ${(props) => props.theme.color.primary};
    transform: translateY(-2px);
  }

  ${media.tablet`
    position: absolute;
    bottom: 0;
  `}
`;
