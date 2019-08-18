import styled from 'styled-components';
import { media } from 'styles';

export const RaidsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5px;
  row-gap: 10px;
  margin: 0 20px;

  ${media.tablet`
    display: flex;
    flex-flow: wrap;
    margin: 0 40px;
  `}
`;

export const RaidImage = styled.figure<RaidImageProps>`
  margin: 0;
  padding-top: 100%; /* keep aspect ratio when scaling */
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${(props) => props.isactive ? 1 : .1};

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  ${media.tablet`
    margin-right: 15px;
    margin-bottom: 10px;
    padding-top: 0;
    width: 100px;
    height: 100px;
  `}
`;

type RaidImageProps = {
  isactive?: boolean;
}
