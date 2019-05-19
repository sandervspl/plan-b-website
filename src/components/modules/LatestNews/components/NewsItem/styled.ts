import styled from 'styled-components';

export const NewsItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const PostImage = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 93px;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    opacity: .2;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostTitle = styled.h2`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px 6px;
  max-width: 95%;
  transform: translateY(-50%);
  background: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #FFFFFF;
  text-align: right;
`;

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
`;

export const PostContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 27px 11px 10px;
`;

export const PostText = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-size: 11px;
  line-height: 14px;
  color: ${(props) => props.theme.color.secondary};
`;

export const PostDate = styled(PostText)`
  flex-grow: 2;
  align-items: flex-end;
  display: flex;
  margin: 0;
  font-size: 10px;
`;
