import styled from 'styled-components';
import { Heading, ParagraphStyle } from 'common';
import { lineClamp, boxGradient } from 'common/styles';
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
    height: 178px;

    ${Heading} {
      ${lineClamp(1)};
      position: relative;
      z-index: 1;

      &:first-child {
        margin-top: auto;
      }
    }

    > ${StreamImg} {
      ${boxGradient};
      position: absolute;
      top: 0;
      left: 0;
    }

    h4 {
      font-weight: normal;
    }

    ${media.tablet`
      height: 100%;
      border: 1px solid ${(props) => props.theme.color.border.primary};

      h2 {
        font-size: 20px;
      }

      h4 {
        font-size: 14px;
      }
    `}
  }

  ${media.tablet`
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
  padding: 3px;
  font-size: 12px;
  line-height: 1;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px;

  &::before {
    content: '';
    margin-right: 5px;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 100%;

    ${media.tablet`
      transform: translateY(1px);
    `}
  }

  ${media.tablet`
    font-size: 16px;
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
      transform: none;
      width: 40px;
      height: 40px;
    `}
  }
`;
