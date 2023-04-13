import { gql } from '@apollo/client'

export interface Post {
  id: string;
  title: string;
  body: string;
}

export const POSTS_QUERY = gql`
query Posts {
  posts {
    nodes {
      id
      title
    }
  }
}
`



export interface PostsData {
  posts: Post[];
}
