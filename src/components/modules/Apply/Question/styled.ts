import styled from 'styled-components';

export const QuestionContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 230px 0 50px 50px;
  height: 84vh;
  background-color: ${(props) => props.theme.color.secondary};
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 0;
  transform: translate3d(50%, 0, 0);
  background: none;
  border: 0;
  outline: 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;

  &:before {
    content: '';
    position: relative;
    bottom: 0.3em;
    display: inline-block;
    margin-right: 12px;
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.theme.color.primary};
    transition: width 400ms, padding-right 400ms 400ms, margin-left 400ms;
  }

  &:hover:before {
    padding-right: 20px;
    margin-left: 20px;
    width: 10px;
    transition: width 400ms 400ms, padding-right 400ms, margin-left 400ms 400ms;
  }
`;
