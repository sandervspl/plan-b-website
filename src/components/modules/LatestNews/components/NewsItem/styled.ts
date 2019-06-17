import styled from 'styled-components';
import { media } from 'styles';
import { Tag } from 'common';
import { lineClamp } from 'common/styles';

export const PostImage = styled.figure`
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #171717 100%);
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  padding-right: 10px;
  margin: 0;
  width: 100%;
  list-style: none;

  ${Tag} {
    margin-left: 5px;
  }

  ${media.tablet`
    padding-right: 0;
  `}
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  position: absolute;
  bottom: 0;
  padding-left: 10px;
  transform: translateY(-10px);

  ${media.tablet`
    padding: 0;
  `}
`;

export const PostText = styled.p`
  ${lineClamp(3)}
  padding-right: 11px;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.theme.color.secondary};

  ${media.tablet`
    display: none;
  `}
`;

export const PostDate = styled(PostText)`
  display: flex;
  flex-grow: 2;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  margin: 0;
  font-size: 12px;

  svg {
    height: 12px;
    fill: ${(props) => props.theme.color.secondary};
    margin-right: 3px;
    transform: translateY(-1px);
  }
`;

export const ReadMore = styled.span`
  display: inline-block;
  align-self: flex-end;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 12px;
  line-height: 24px;
  color: ${(props) => props.theme.color.primary};
  
  svg {
    height: 14px;
    fill: ${(props) => props.theme.color.primary};
    margin-left: 2px;
    transform: translateY(3px);
  }
`;

export const PostHeading = styled.header`
  align-self: flex-end;
  z-index: 2;

  h3 {
    padding-right: 10px;
  }
`;

export const NewsItemContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  
  a {
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
  }
`;
