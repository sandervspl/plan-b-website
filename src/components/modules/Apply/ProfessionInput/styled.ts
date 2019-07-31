import styled from 'styled-components';
// import CloseSvg from 'vectors/close.svg';
import { media } from 'styles';
import { InputContainer, Bar, StyledInput } from 'common/form/input/styled';
import { DropdownContainer, DropdownList } from 'common/form/DropdownInput/styled';

export const ProfessionInputContainer = styled.div`
  margin-bottom: 40px;

  ${DropdownContainer} {
    svg {
      display: none;
    }
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 75% 25%;
    /* grid-template-columns: 47.5% 47.5% 5%; */
    column-gap: 15px;

    ${InputContainer} {
      margin-bottom: 0;

      ${StyledInput}, ${Bar} {
        width: 100%;
      }
    }

    ${DropdownContainer} {
      svg {
        display: block;
        left: 90%;
      }

      ${DropdownList} {
        z-index: 3;
        width: 100%;
      }
    }  
  `}
`;

// export const CloseIcon = styled(CloseSvg)`
//   justify-self: center;
//   align-self: center;
//   width: 25px;
//   fill: ${(props) => props.theme.color.secondary};
//   cursor: pointer;
//   transition: transform .1s linear;

//   &:hover {
//     transform: scale(1.2);
//   }

//   &:active {
//     transform: scale(.9);
//   }
// `;
