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
  image: {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
    public_id?: number;
    created_at: Date;
    updated_at: Date;
  };
  tags?: i.Tag[];
}

export type Tag = i.BaseResponseBody & {
  name?: string;
  color: i.HexCode;
  posts: null;
}
