import * as i from 'types';

export type PostsState = i.BaseState<never> & {
  single?: i.Post;
  list?: i.Post[];
};

export type BasePost = i.BaseResponseBody & {
  title?: string;
  homepage?: number; // Home page ID
  content?: string;
  abstract?: string;
  published: boolean;
}

export type Post = i.BasePost & {
  image?: {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
    public_id?: any;
    created_at: Date;
    updated_at: Date;
  };
  tags?: i.Tag[];
}

export type Tag = i.BaseResponseBody & {
  name?: string;
  color: string;
  posts: null;
}
