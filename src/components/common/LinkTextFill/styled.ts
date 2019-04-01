import styled from 'styled-components';

export const Mask = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transform: translateX(-102%);
  transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);

  > span {
    position: absolute;
    color: ${(props) => props.theme.color.primary};
    transform: translateX(102%);
    transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);
  }
`;

export const MaskWrap = styled.div`
  position: relative;
  overflow: hidden;

  &:hover ${Mask} {
    transform: translateY(0%);
    transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);

    > span {
      transform: translateY(0%);
      transition: all 350ms cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
`;
