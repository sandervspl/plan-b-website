import styled from 'styled-components';
import 'react-input-range/lib/css/index.css';

export const InputRangeContainer = styled.div`

  .input-range__label {
    font-family: ${(props) => props.theme.font.primary};
  }

  .input-range__track {
    background: ${(props) => props.theme.color.secondary};
  }

  .input-range__track--active {
    background: ${(props) => props.theme.color.primary};
  }

  .input-range__slider {
    background: ${(props) => props.theme.color.primary};
    border-color: ${(props) => props.theme.color.primary};
  }
`;
