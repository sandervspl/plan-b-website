import styled from 'styled-components';
import { media } from 'styles';
import { Button } from 'common';

export const SubmitButton = styled(Button)`
  input[type="submit"] {
    display: none;
  }

  svg {
    margin-left: 5px;
    width: 15px;
    transform: translateY(2px);
    
    ${media.tablet`
      margin-left: 10px;
      width: 20px;
    `}
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.color.secondary};
`;

export const ErrorContainer = styled.div`
  figure {
    display: inline-block;
    position: relative;
    margin: 0 2px 0 5px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    vertical-align: sub;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const OutroGrid = styled.div`
  div:first-child {
    button {
      margin-top: 50px;
    }
  }
  
  > div:nth-child(2) {
    display: none;
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 33% 67%;
    height: 100%;

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70%;
        opacity: .1;
      }
    }
  `}
`;
