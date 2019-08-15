import styled, { css } from 'styled-components';
import LoaderSvg from 'vectors/loader.svg';

export const Loader = styled(LoaderSvg)`
  width: 50px;
  height: 50px;

  ${(props) => props.center && css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `}
`;
