import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.theme.color.background};
  overflow: hidden;
`;

export const ProgressIndicator = styled.div<ProgressIndicatorProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: left center;
  background-color: ${(props) => props.theme.color.primary};
  transform: scaleX(${(props) => props.progress});
`;

type ProgressIndicatorProps = {
  progress: number;
}
