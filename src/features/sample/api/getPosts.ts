import { gql } from '@apollo/client'

export interface Post {
  id: string
  title: string
  content: string
}

export interface PostsData {
  posts: Post[]
}

export interface PostData {
  post: Post
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

export const POST_QUERY = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`