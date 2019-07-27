import styled from 'styled-components';
import { Heading, ParagraphStyle } from 'common';
import { lineClamp } from 'common/styles';

export const StreamContainer = styled.li`
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

  h4 {
    font-weight: normal;
  }
`;

export const Thumbnail = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #171717 100%);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
`;
