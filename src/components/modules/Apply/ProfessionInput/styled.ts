import styled from 'styled-components';
// import CloseSvg from 'vectors/close.svg';
import { media } from 'styles';
import { InputContainer, Bar, StyledInput } from 'common/form/Input/styled';
import { DropdownContainer, DropdownList } from 'common/form/DropdownInput/styled';
import { InputRangeContainer } from 'common/form/InputRange/styled';

export const ProfessionInputContainer = styled.div`
  margin-bottom: 40px;

  ${InputRangeContainer} {
    padding-top: 10px;
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 50% 40%;
    column-gap: 10%;

    ${InputContainer} {
      margin-bottom: 0;

      ${StyledInput}, ${Bar} {
        width: 100%;
      }
    }

    ${DropdownContainer} {
      svg {
        display: block;
        left: 92%;
      }

      ${DropdownList} {
        z-index: 3;
        width: 100%;
      }
    }

    ${InputRangeContainer} {
      padding-top: 20px;
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
