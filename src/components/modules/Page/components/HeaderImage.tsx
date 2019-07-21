import React from 'react';
import styled from 'styled-components';
import { media } from 'styles';

export const HeaderImageContainer = styled.figure`
  margin: 20px 0 0;
  width: 100%;
  height: 150px;
  overflow: hidden;

  > img {
    position: static;
    margin: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet`
    margin: 0;
    height: 350px;
  `}
`;

const HeaderImage: React.FC<Props> = ({ src, ...props }) => {
  return (
    <HeaderImageContainer>
      <img alt="" {...props} src={src} />
    </HeaderImageContainer>
  );
};

type Props = React.ImgHTMLAttributes<{}> & {
  src: string;
};

export default HeaderImage;
