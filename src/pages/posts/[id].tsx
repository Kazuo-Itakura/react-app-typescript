import { NextPage, NextPageContext } from 'next'
import Link from 'next/link'
import PostItem from '@/features/sample/components/PostItem'

interface PostPageProps {
  id: string
}

const PostPage: NextPage<PostPageProps> = ({ id }) => (
  <div>
    <h1>POST</h1>
    <hr />
    <PostItem id={id} />
    <hr />
    <Link href="/">
      戻る
    </Link>
  </div>
)

PostPage.getInitialProps = (ctx: NextPageContext) => {
  const { id } = ctx.query
  return { id: typeof id === 'string' ? id : id[0] }
}

export default PostPage
