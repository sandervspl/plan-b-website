import styled from 'styled-components';
import { Heading, ParagraphStyle } from 'common';
import { lineClamp } from 'common/styles';
import { media } from 'styles';

export const StreamImg = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StreamContainer = styled.li`
  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    padding: 10px;
    width: 100%;
    height: 100px;

    ${Heading} {
      ${lineClamp(1)};
      position: relative;
      z-index: 1;

      &:first-child {
        margin-top: auto;
      }
    }

    > ${StreamImg} {
      position: absolute;
      top: 0;
      left: 0;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #171717 100%);
      }
    }

    h4 {
      font-weight: normal;
    }

    ${media.tablet`
      height: 100%;
      border: 1px solid ${(props) => props.theme.color.border.primary};

      h2 {
        margin-bottom: 5px;
        font-size: 20px;
      }

      h4 {
        font-size: 14px;
      }
    `}
  }

  ${media.tablet`
      margin-bottom: 20px;
      padding: 0 10px;
      height: 150px;
  `}
`;

export const ViewCount = styled.div`
  ${ParagraphStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;

  &::before {
    content: '';
    margin-right: 5px;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 100%;
  }

  ${media.tablet`
    font-size: 16px;

    &::before {
      width: 10px;
      height: 10px;
    }
  `}
`;

export const Content = styled.div`
  ${StreamImg} {
    border-bottom: 2px solid ${(props) => props.theme.color.primary};
    float: left;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    transform: translateY(5px);

    ${media.tablet`
      transform: translateY(3px);
      width: 40px;
      height: 40px;
    `}
  }
`;
