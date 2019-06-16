import styled from 'styled-components';
import { HeadingContainer } from 'common/typography/Heading/style';

export const OtherNewsContainer = styled.div`
  position: relative;
  margin-bottom: 45px;
  padding: 35px 0 30px;
  background-color: ${(props) => props.theme.color.blocks.otherNews};

  > ${HeadingContainer} {
    position: absolute;
    top: 0;
    margin-left: 25px;
    transform: translateY(-50%);

    h2 {
      font-size: 20px;
    }
  }
`;
