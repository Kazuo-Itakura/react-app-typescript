import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import { POST_QUERY, PostData } from '../api/getPosts'
import WpContent from './WpContent/WpContent'

interface PostItemProps {
  id: string;
}

const PostItem: NextPage<PostItemProps> = ({ id }) => {
  const { loading, error, data } = useQuery<PostData>(POST_QUERY, {
    variables: { id },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: { JSON.stringify(error) }</p>

  if (!data) return null
  const { post } = data

  return (
    <div>
      <h2>{ post.title }</h2>
      <hr />
      {post.content && (
        <WpContent content={ post.content } />
      )}
    </div>
  )
}

export default PostItem
