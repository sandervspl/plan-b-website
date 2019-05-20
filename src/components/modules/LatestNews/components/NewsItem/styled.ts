import styled from 'styled-components';
import { media } from 'styles';
import { Heading, Tag, UnderlineStyle } from 'common';

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
    will-change: opacity;
    transition: opacity .2s ease-in-out;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet`
    height: 437px;
    width: 257px;
  `}
`;

export const Tags = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  padding-right: 11px;
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
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 11px;
  transform: translateY(-10px);

  ${Heading} {
    margin-bottom: 10px;
  }

  ${media.tablet`
    padding: 0;
  `}
`;

export const PostText = styled.p`
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
  flex-grow: 2;
  align-items: flex-end;
  display: flex;
  margin: 0;
  font-size: 12px;
`;

export const ReadMore = styled.span`
  display: none;

  ${media.tablet`
    display: inline-block;
    align-self: flex-end;
    position: absolute;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.color.secondary};

    &:after {
      ${UnderlineStyle};
      transform: scaleY(1);
      transform-origin: top;
      will-change: transform;
      transition: transform .1s ease-in-out;
    }
  `}
`;

export const PostHeading = styled.header`
  align-self: flex-end;
  max-width: 95%;

  ${media.tablet`
    max-width: none;

    ${Heading} {
      margin-right: 0;
    }
  `}
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
    height: 100%;
  }

  ${media.tablet`
    a {
      height: auto;
    }

    &:nth-child(odd) {
      ${PostHeading} {
        position: relative;
        left: 25px;
        top: -35%;
        align-self: flex-start;

        ${Heading} {
          text-align: left;
        }

        ${ReadMore} {
          bottom: 0;
        }
      }
    }

    &:nth-child(even) {
      ${PostContent} {
        transform: none;
        top: calc(-100% + 50px);
      }

      ${PostHeading} {
        display: flex;
        flex-direction: column-reverse;
        position: relative;
        right: 25px;

        ${ReadMore} {
          top: -5px;
        }
      }

      ${Tags} {
        justify-content: flex-start;
        margin-bottom: 10px;

        ${Tag} {
          margin-left: 0;
          margin-right: 5px;
        }
      }

      ${PostImage} {
        align-self: flex-end;
      }
    }

    &:hover {
      ${ReadMore}:after {
        transform: scaleY(2);
      }

      ${PostImage}:after {
        opacity: .15;
      }
    }
  `}
`;
