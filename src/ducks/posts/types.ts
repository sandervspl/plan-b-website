import * as i from 'types';

export type PostsState = i.BaseState<i.Post[]> & {
  single?: i.Post;
};

export type BasePost = i.BaseResponseBody & {
  title: string;
  homepage?: number; // Home page ID
  content: string;
  abstract: string;
  published: boolean;
}

export type Post = i.BasePost & {
  image: i.Image;
  tags?: i.Tag[];
}

export type Tag = {
  id: number;
  name: string;
}
