import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { POSTS_QUERY, PostsData } from '../api/getPosts'
import { NextPage } from 'next'

interface PostsListProps {}

const PostsList: NextPage<PostsListProps> = () => {
  const { loading, error, data } = useQuery<PostsData>(POSTS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: { JSON.stringify(error) }</p>

  if (!data) return null
  const posts = data.posts.nodes

  return (
    <ul>
      {posts.map((post, index) => {
        return (
          <li key={index}>
            { post.title }{' '}
            <Link href={ `/posts/${post.id}` }>
              [詳細]
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PostsList
